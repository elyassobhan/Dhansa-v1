import { useMemo, useState } from "react";

import { CITY_POINTS, GERMANY_STATES } from "@/data/germany-map";

const rows = [
  { id: "hamburg", title: "Hamburg", subtitle: "Hauptsitz", cities: ["hamburg"], isHq: true },
  { id: "pinneberg", title: "Pinneberg & Itzehoe", subtitle: "Standort", cities: ["itzehoe"] },
  { id: "kiel", title: "Kiel & Lübeck", subtitle: "Standort", cities: ["kiel", "luebeck"] },
  { id: "bremen", title: "Bremen", subtitle: "Standort", cities: ["bremen"] },
  {
    id: "lueneburg",
    title: "Lüneburg & Schwerin",
    subtitle: "Standort",
    cities: ["lueneburg", "schwerin"],
  },
  { id: "berlin", title: "Berlin", subtitle: "Standort", cities: ["berlin"] },
] as const;

const markers = {
  hamburg: { x: CITY_POINTS["Hamburg"].x, y: CITY_POINTS["Hamburg"].y, label: "Hamburg" },
  itzehoe: { x: CITY_POINTS["Itzehoe"].x, y: CITY_POINTS["Itzehoe"].y, label: "Itzehoe" },
  kiel: { x: CITY_POINTS["Kiel"].x, y: CITY_POINTS["Kiel"].y, label: "Kiel" },
  luebeck: { x: CITY_POINTS["Lübeck"].x, y: CITY_POINTS["Lübeck"].y, label: "Lübeck" },
  bremen: { x: CITY_POINTS["Bremen"].x, y: CITY_POINTS["Bremen"].y, label: "Bremen" },
  lueneburg: { x: CITY_POINTS["Lüneburg"].x, y: CITY_POINTS["Lüneburg"].y, label: "Lüneburg" },
  schwerin: { x: CITY_POINTS["Schwerin"].x, y: CITY_POINTS["Schwerin"].y, label: "Schwerin" },
  berlin: { x: CITY_POINTS["Berlin"].x, y: CITY_POINTS["Berlin"].y, label: "Berlin" },
} as const;

const spokes: Record<string, { x1: number; y1: number; x2: number; y2: number }> = {
  itzehoe: {
    x1: CITY_POINTS["Hamburg"].x,
    y1: CITY_POINTS["Hamburg"].y,
    x2: CITY_POINTS["Itzehoe"].x,
    y2: CITY_POINTS["Itzehoe"].y,
  },
  kiel: {
    x1: CITY_POINTS["Hamburg"].x,
    y1: CITY_POINTS["Hamburg"].y,
    x2: CITY_POINTS["Kiel"].x,
    y2: CITY_POINTS["Kiel"].y,
  },
  luebeck: {
    x1: CITY_POINTS["Hamburg"].x,
    y1: CITY_POINTS["Hamburg"].y,
    x2: CITY_POINTS["Lübeck"].x,
    y2: CITY_POINTS["Lübeck"].y,
  },
  bremen: {
    x1: CITY_POINTS["Hamburg"].x,
    y1: CITY_POINTS["Hamburg"].y,
    x2: CITY_POINTS["Bremen"].x,
    y2: CITY_POINTS["Bremen"].y,
  },
  lueneburg: {
    x1: CITY_POINTS["Hamburg"].x,
    y1: CITY_POINTS["Hamburg"].y,
    x2: CITY_POINTS["Lüneburg"].x,
    y2: CITY_POINTS["Lüneburg"].y,
  },
  schwerin: {
    x1: CITY_POINTS["Hamburg"].x,
    y1: CITY_POINTS["Hamburg"].y,
    x2: CITY_POINTS["Schwerin"].x,
    y2: CITY_POINTS["Schwerin"].y,
  },
  berlin: {
    x1: CITY_POINTS["Hamburg"].x,
    y1: CITY_POINTS["Hamburg"].y,
    x2: CITY_POINTS["Berlin"].x,
    y2: CITY_POINTS["Berlin"].y,
  },
};

export function StandortKarte() {
  const [activeCities, setActiveCities] = useState<string[]>(["hamburg"]);
  const activeSet = useMemo(() => new Set(activeCities), [activeCities]);

  const activateByCities = (cities: string[]) => {
    setActiveCities(cities);
  };

  const clearAll = () => {
    setActiveCities([]);
  };

  return (
    <div className="standort-card-shell">
      <div className="standort-directory">
        <div className="standort-eyebrow">Standorte</div>
        <h2 className="standort-title">Wo Sie uns finden</h2>
        <p className="standort-sub">
          Sieben Regionen, ein Team. Hamburg ist unser Hauptsitz — von dort aus sind wir in ganz
          Norddeutschland und darüber hinaus vertreten.
        </p>

        <ul className="standort-list">
          {rows.map((row) => {
            const isActive = row.cities.some((city) => activeSet.has(city));

            return (
              <li
                key={row.id}
                className={`standort-item ${row.isHq ? "hq" : ""} ${isActive ? "active" : ""}`}
                onMouseEnter={() => activateByCities(row.cities)}
                onMouseLeave={clearAll}
              >
                <span className="standort-dot" />
                <span className="standort-text">
                  <span className="standort-name">{row.title}</span>
                  <span className="standort-tag">{row.subtitle}</span>
                </span>
              </li>
            );
          })}
        </ul>

        <div className="standort-footer">
          Mit der Maus über einen Ort fahren, um ihn auf der Karte zu sehen.
        </div>
      </div>

      <div className="standort-map-panel">
        <svg
          className="standort-map"
          viewBox="0 0 2084 2084"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Deutschlandkarte mit DHANSA Standorten"
        >
          <g>
            {GERMANY_STATES.map((state) => (
              <path
                key={state.name}
                d={state.d}
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth={4}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </g>

          {Object.entries(spokes).map(([city, spoke]) => (
            <line
              key={city}
              className={`standort-spoke ${activeSet.has(city) ? "show" : ""}`}
              x1={spoke.x1}
              y1={spoke.y1}
              x2={spoke.x2}
              y2={spoke.y2}
            />
          ))}

          {Object.entries(markers).map(([city, marker]) => {
            const isActive = activeSet.has(city);
            const isHq = city === "hamburg";

            return (
              <g
                key={city}
                className={`standort-marker ${isHq ? "hq" : ""} ${isActive ? "active" : ""}`}
                onMouseEnter={() => activateByCities([city])}
                onMouseLeave={clearAll}
                style={{ cursor: "pointer" }}
              >
                <circle className="pulse" cx={marker.x} cy={marker.y} r={isHq ? 42 : 34} />
                <circle className="core" cx={marker.x} cy={marker.y} r={isHq ? 26 : 20} />
                <text x={marker.x + (isHq ? 35 : 26)} y={marker.y - (isHq ? 14 : 10)}>
                  {marker.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
