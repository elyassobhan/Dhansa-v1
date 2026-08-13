(function () {
  var header = document.getElementById("site-header");
  var menu = document.getElementById("mobile-menu");
  var toggle = document.getElementById("menu-toggle");
  var cookie = document.getElementById("cookie-consent");
  var isCareer =
    /karriere\.html$/i.test(location.pathname) || /karriere\.html$/i.test(location.href);

  function onScroll() {
    if (!header) return;
    var scrolled = window.scrollY > 40;
    header.classList.toggle("is-scrolled", scrolled);
    header.classList.toggle("border-b", scrolled || isCareer);
    header.classList.toggle("border-border", scrolled);
    header.classList.toggle("bg-white", scrolled);
    header.classList.toggle("shadow-soft", scrolled);
    header.classList.toggle("bg-transparent", !scrolled && !isCareer);
    header.querySelectorAll(".js-header-brand").forEach(function (el) {
      el.classList.toggle("text-foreground", scrolled);
      el.classList.toggle("text-white", !scrolled);
    });
    header.querySelectorAll(".js-header-sub").forEach(function (el) {
      el.classList.toggle("text-muted-foreground", scrolled);
      el.classList.toggle("text-white/70", !scrolled);
    });
    header.querySelectorAll(".js-header-link").forEach(function (el) {
      el.classList.toggle("text-muted-foreground", scrolled);
      el.classList.toggle("text-white/85", !scrolled);
    });
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.add("hidden");
      });
    });
  }

  document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var service = fd.get("service") || "";
      var body = [
        service ? "Leistungsbereich: " + service : "",
        "Name: " + (fd.get("name") || ""),
        "Telefon: " + (fd.get("phone") || ""),
        "E-Mail: " + (fd.get("email") || ""),
        "",
        String(fd.get("message") || ""),
      ]
        .filter(Boolean)
        .join("\n");
      var subject = service ? "Anfrage: " + service : "Anfrage";
      location.href =
        "mailto:info@dhansa.de?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
  });

  document.querySelectorAll(".js-service-pick").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var form = btn.closest("form");
      var hidden = form && form.querySelector('input[name="service"]');
      if (hidden) hidden.value = btn.getAttribute("data-service") || "";
      form.querySelectorAll(".js-service-pick").forEach(function (other) {
        other.className = other.className.replace(
          "border-primary bg-primary text-white",
          "border-border bg-secondary text-muted-foreground",
        );
      });
      btn.className = btn.className.replace(
        "border-border bg-secondary text-muted-foreground",
        "border-primary bg-primary text-white",
      );
    });
  });

  document.querySelectorAll('[data-orientation="vertical"]').forEach(function (root) {
    if (root.parentElement && root.parentElement.getAttribute("data-orientation") === "vertical") {
      return;
    }
    var items = [].slice.call(root.children).filter(function (el) {
      return el.getAttribute("data-orientation") === "vertical";
    });
    items.forEach(function (item) {
      var btn = item.querySelector("button");
      var panel = item.querySelector('[role="region"]');
      if (!btn || !panel) return;
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var willOpen = item.getAttribute("data-state") !== "open";
        items.forEach(function (other) {
          var oBtn = other.querySelector("button");
          var oPanel = other.querySelector('[role="region"]');
          other.setAttribute("data-state", "closed");
          if (oBtn) {
            oBtn.setAttribute("data-state", "closed");
            oBtn.setAttribute("aria-expanded", "false");
          }
          if (oPanel) {
            oPanel.setAttribute("data-state", "closed");
            oPanel.hidden = true;
          }
        });
        if (willOpen) {
          item.setAttribute("data-state", "open");
          btn.setAttribute("data-state", "open");
          btn.setAttribute("aria-expanded", "true");
          panel.setAttribute("data-state", "open");
          panel.hidden = false;
        }
      });
    });
  });

  if (cookie) {
    try {
      if (!localStorage.getItem("dhansa_cookie_consent_v1")) cookie.classList.remove("hidden");
    } catch (err) {}
    function hideCookie(value) {
      try {
        localStorage.setItem(
          "dhansa_cookie_consent_v1",
          JSON.stringify({
            value: value,
            at: new Date().toISOString(),
            version: 1,
          }),
        );
      } catch (err) {}
      cookie.classList.add("hidden");
    }
    var acceptAll = document.getElementById("cookie-accept-all");
    var acceptEssential = document.getElementById("cookie-accept-essential");
    if (acceptAll) {
      acceptAll.addEventListener("click", function () {
        hideCookie("all");
      });
    }
    if (acceptEssential) {
      acceptEssential.addEventListener("click", function () {
        hideCookie("essential");
      });
    }
  }
})();
