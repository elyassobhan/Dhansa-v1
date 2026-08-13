const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

const PRINT_WIDTH = 100;

function tokenize(html) {
  const tokens = [];
  let i = 0;

  while (i < html.length) {
    if (html[i] === "<") {
      let j = i + 1;
      let quote = null;
      while (j < html.length) {
        const c = html[j];
        if (quote) {
          if (c === quote) quote = null;
        } else if (c === '"' || c === "'") {
          quote = c;
        } else if (c === ">") {
          j += 1;
          break;
        }
        j += 1;
      }
      tokens.push({ type: "tag", value: html.slice(i, j) });
      i = j;
    } else {
      let j = i;
      while (j < html.length && html[j] !== "<") j += 1;
      tokens.push({ type: "text", value: html.slice(i, j) });
      i = j;
    }
  }

  return tokens;
}

function tagName(tag) {
  const match = tag.match(/^<\/?([^\s>/]+)/);
  return match ? match[1].toLowerCase() : "";
}

function isClosing(tag) {
  return tag.startsWith("</");
}

function isComment(tag) {
  return tag.startsWith("<!--");
}

function isDoctype(tag) {
  return /^<!doctype/i.test(tag);
}

function isSelfClosing(tag) {
  return /\/\s*>$/.test(tag) || VOID_TAGS.has(tagName(tag));
}

function parseAttributes(attrPart) {
  const attrs = [];
  const re = /([^\s"'=<>/]+)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s"'=<>`]+))?/g;
  let match;
  while ((match = re.exec(attrPart))) {
    attrs.push(match[0].trim());
  }
  return attrs;
}

function wrapAttribute(attr, indent, extraIndent = 2) {
  const pad = "  ".repeat(indent);
  const innerPad = "  ".repeat(indent + extraIndent);
  const eq = attr.indexOf("=");
  if (eq < 0) return `${pad}${attr}`;

  const name = attr.slice(0, eq);
  const value = attr.slice(eq + 1);
  const quote = value[0];
  if ((quote !== '"' && quote !== "'") || name === "d") {
    return `${pad}${attr}`;
  }

  const inner = value.slice(1, -1);
  if (!inner.includes(" ") || `${pad}${attr}`.length <= PRINT_WIDTH) {
    return `${pad}${attr}`;
  }

  const words = inner.split(/\s+/);
  const lines = [];
  let current = "";
  const budget = Math.max(40, PRINT_WIDTH - innerPad.length);

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (current && next.length > budget) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  if (lines.length === 1) return `${pad}${attr}`;

  return `${pad}${name}=${quote}${lines[0]}\n${lines
    .slice(1)
    .map((line) => `${innerPad}${line}`)
    .join("\n")}${quote}`;
}

function formatTag(tag, indent) {
  const pad = "  ".repeat(indent);
  if (isComment(tag) || isDoctype(tag) || isClosing(tag)) {
    return pad + tag;
  }

  const match = tag.match(/^<([^\s>/]+)([\s\S]*?)(\s*\/)?>$/);
  if (!match) return pad + tag;

  const [, name, attrPart, selfClose] = match;
  const attrs = parseAttributes(attrPart);
  const compact = pad + tag;
  if (attrs.length === 0 || compact.length <= PRINT_WIDTH) return compact;

  const lines = [`${pad}<${name}`];
  for (const attr of attrs) {
    lines.push(wrapAttribute(attr, indent + 1, 1));
  }
  lines.push(`${pad}${selfClose ? "/>" : ">"}`);
  return lines.join("\n");
}

function indentBlock(block, indent) {
  const pad = "  ".repeat(indent);
  const lines = block.replace(/\s+$/, "").split("\n");
  const inner = lines.slice(1).filter((line) => line.trim());
  const minIndent = inner.length
    ? Math.min(...inner.map((line) => line.match(/^ */)[0].length))
    : 0;

  return lines
    .map((line, index) => {
      if (!line.trim()) return "";
      if (index === 0) return pad + line.trim();
      return pad + line.slice(minIndent);
    })
    .join("\n");
}

function formatJsonLd(scriptTag, indent) {
  const match = scriptTag.match(/^(<script\b[^>]*>)([\s\S]*)(<\/script>)$/i);
  if (!match) return "  ".repeat(indent) + scriptTag;
  try {
    const json = JSON.parse(match[2]);
    const pretty = JSON.stringify(json, null, 2)
      .split("\n")
      .map((line, index) => (index === 0 ? line : "  ".repeat(indent + 1) + line))
      .join("\n");
    return `${formatTag(match[1], indent)}\n${"  ".repeat(indent + 1)}${pretty}\n${"  ".repeat(indent)}</script>`;
  } catch {
    return "  ".repeat(indent) + scriptTag;
  }
}

function extractProtected(html) {
  const blocks = [];
  const next = html.replace(
    /<(script|style|pre|textarea)\b[\s\S]*?<\/\1>/gi,
    (block) => {
      const id = blocks.length;
      blocks.push(block);
      return `<dhansa-block data-i="${id}" />`;
    },
  );
  return { html: next, blocks };
}

export function formatHtml(input) {
  const { html, blocks } = extractProtected(input.replace(/^\uFEFF/, "").trim());
  const tokens = tokenize(html);
  const out = [];
  let indent = 0;

  for (const token of tokens) {
    if (token.type === "text") {
      const text = token.value.replace(/\s+/g, " ").trim();
      if (text) out.push("  ".repeat(indent) + text);
      continue;
    }

    const tag = token.value;
    const name = tagName(tag);

    if (name === "dhansa-block") {
      const id = Number((tag.match(/data-i="(\d+)"/) || [])[1]);
      const block = blocks[id];
      if (!block) continue;
      if (/^<script\b[^>]*type="application\/ld\+json"/i.test(block)) {
        out.push(formatJsonLd(block, indent));
      } else {
        out.push(indentBlock(block, indent));
      }
      continue;
    }

    if (isClosing(tag)) indent = Math.max(0, indent - 1);
    out.push(formatTag(tag, indent));
    if (!isClosing(tag) && !isSelfClosing(tag) && !isComment(tag) && !isDoctype(tag)) {
      indent += 1;
    }
  }

  return `${out.join("\n").replace(/(?<!<\/[a-zA-Z0-9:-]+)>\n\s*<\/([a-zA-Z0-9:-]+)>/g, "></$1>")}\n`;
}
