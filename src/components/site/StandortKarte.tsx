import { useMemo, useState } from "react";

import { CITY_POINTS, GERMANY_STATES } from "@/data/germany-map";

const rows = [
  { id: "hamburg", title: "Hamburg", subtitle: "Hauptsitz", cities: ["hamburg"], isHq: true },
  { id: "pinneberg", title: "Pinneberg & Itzehoe", subtitle: "Standort", cities: ["pinneberg", "itzehoe"] },
  { id: "kiel", title: "Kiel & Lübeck", subtitle: "Standort", cities: ["kiel", "luebeck"] },
  { id: "bremen", title: "Bremen", subtitle: "Standort", cities: ["bremen"] },
  { id: "lueneburg", title: "Lüneburg & Schwerin", subtitle: "Standort", cities: ["lueneburg", "schwerin"] },
  { id: "berlin", title: "Berlin", subtitle: "Standort", cities: ["berlin"] },
  { id: "koeln", title: "Köln & Umgebung", subtitle: "Standort", cities: ["koeln"] },
] as const;

const markers = {
  hamburg: { x: CITY_POINTS["Hamburg"].x, y: CITY_POINTS["Hamburg"].y, label: "Hamburg" },
  pinneberg: { x: CITY_POINTS["Pinneberg"].x, y: CITY_POINTS["Pinneberg"].y, label: "Pinneberg" },
  itzehoe: { x: CITY_POINTS["Itzehoe"].x, y: CITY_POINTS["Itzehoe"].y, label: "Itzehoe" },
  kiel: { x: CITY_POINTS["Kiel"].x, y: CITY_POINTS["Kiel"].y, label: "Kiel" },
  luebeck: { x: CITY_POINTS["Lübeck"].x, y: CITY_POINTS["Lübeck"].y, label: "Lübeck" },
  bremen: { x: CITY_POINTS["Bremen"].x, y: CITY_POINTS["Bremen"].y, label: "Bremen" },
  lueneburg: { x: CITY_POINTS["Lüneburg"].x, y: CITY_POINTS["Lüneburg"].y, label: "Lüneburg" },
  schwerin: { x: CITY_POINTS["Schwerin"].x, y: CITY_POINTS["Schwerin"].y, label: "Schwerin" },
  berlin: { x: CITY_POINTS["Berlin"].x, y: CITY_POINTS["Berlin"].y, label: "Berlin" },
  koeln: { x: CITY_POINTS["Köln"].x, y: CITY_POINTS["Köln"].y, label: "Köln" },
} as const;

const spokes: Record<string, { x1: number; y1: number; x2: number; y2: number }> = {
  pinneberg: { x1: CITY_POINTS["Hamburg"].x, y1: CITY_POINTS["Hamburg"].y, x2: CITY_POINTS["Pinneberg"].x, y2: CITY_POINTS["Pinneberg"].y },
  itzehoe: { x1: CITY_POINTS["Hamburg"].x, y1: CITY_POINTS["Hamburg"].y, x2: CITY_POINTS["Itzehoe"].x, y2: CITY_POINTS["Itzehoe"].y },
  kiel: { x1: CITY_POINTS["Hamburg"].x, y1: CITY_POINTS["Hamburg"].y, x2: CITY_POINTS["Kiel"].x, y2: CITY_POINTS["Kiel"].y },
  luebeck: { x1: CITY_POINTS["Hamburg"].x, y1: CITY_POINTS["Hamburg"].y, x2: CITY_POINTS["Lübeck"].x, y2: CITY_POINTS["Lübeck"].y },
  bremen: { x1: CITY_POINTS["Hamburg"].x, y1: CITY_POINTS["Hamburg"].y, x2: CITY_POINTS["Bremen"].x, y2: CITY_POINTS["Bremen"].y },
  lueneburg: { x1: CITY_POINTS["Hamburg"].x, y1: CITY_POINTS["Hamburg"].y, x2: CITY_POINTS["Lüneburg"].x, y2: CITY_POINTS["Lüneburg"].y },
  schwerin: { x1: CITY_POINTS["Hamburg"].x, y1: CITY_POINTS["Hamburg"].y, x2: CITY_POINTS["Schwerin"].x, y2: CITY_POINTS["Schwerin"].y },
  berlin: { x1: CITY_POINTS["Hamburg"].x, y1: CITY_POINTS["Hamburg"].y, x2: CITY_POINTS["Berlin"].x, y2: CITY_POINTS["Berlin"].y },
  koeln: { x1: CITY_POINTS["Hamburg"].x, y1: CITY_POINTS["Hamburg"].y, x2: CITY_POINTS["Köln"].x, y2: CITY_POINTS["Köln"].y },
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
    <>
      <style>{`
        .standort-card-shell {
          display: grid;
          grid-template-columns: 0.78fr 1.3fr;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          background: #fff;
          border-radius: 22px;
          box-shadow: 0 30px 60px -25px rgba(8, 33, 63, 0.35), 0 2px 0 rgba(8, 33, 63, 0.04);
          overflow: hidden;
          border: 1px solid #dbe1e8;
        }

        .standort-directory {
          background: #fff;
          padding: 44px 38px 40px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .standort-eyebrow {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #d79a4b;
          font-weight: 600;
          margin-bottom: 10px;
          font-family: "Inter", sans-serif;
        }

        .standort-title {
          margin: 0 0 6px;
          color: #0d2e52;
          font-size: 30px;
          line-height: 1.1;
          font-family: "Fraunces", serif;
          font-weight: 500;
        }

        .standort-sub {
          margin: 0 0 28px;
          font-size: 13.5px;
          color: #647186;
          max-width: 34ch;
          line-height: 1.6;
          font-family: "Inter", sans-serif;
        }

        .standort-list {
          list-style: none;
          margin: 0;
          padding: 0;
          border-top: 1px solid #dbe1e8;
        }

        .standort-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 10px;
          border-bottom: 1px solid #dbe1e8;
          position: relative;
          cursor: pointer;
          transition: background 0.25s ease, padding-left 0.25s ease;
          font-family: "Inter", sans-serif;
        }

        .standort-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #d79a4b;
          transform: scaleY(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }

        .standort-item.active,
        .standort-item:hover {
          background: #f2f6fa;
          padding-left: 18px;
        }

        .standort-item.active::before,
        .standort-item:hover::before {
          transform: scaleY(1);
        }

        .standort-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #0e3a67;
          flex: 0 0 auto;
          transition: all 0.25s ease;
        }

        .standort-item.hq .standort-dot {
          background: #d79a4b;
          box-shadow: 0 0 0 3px #f0d3a2;
        }

        .standort-item.active .standort-dot,
        .standort-item:hover .standort-dot {
          background: #d79a4b;
          transform: scale(1.25);
          box-shadow: 0 0 0 4px #f0d3a2;
        }

        .standort-text {
          display: flex;
          flex-direction: column;
        }

        .standort-name {
          font-size: 14.5px;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: #122436;
        }

        .standort-tag {
          font-size: 11px;
          letter-spacing: 0.03em;
          color: #647186;
        }

        .standort-footer {
          margin-top: auto;
          padding-top: 22px;
          font-size: 11px;
          color: #647186;
          letter-spacing: 0.02em;
          font-family: "Inter", sans-serif;
        }

        .standort-map-panel {
          position: relative;
          background: linear-gradient(160deg, #08213f 0%, #0e3a67 55%, #1c69a8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          min-height: 640px;
        }

        .standort-map-panel::before {
          content: "Deutschland";
          position: absolute;
          top: 24px;
          left: 28px;
          font-family: "Fraunces", serif;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          z-index: 2;
        }

        .standort-map {
          width: 100%;
          height: auto;
          max-height: 800px;
          overflow: visible;
          position: relative;
          z-index: 1;
        }

        .standort-state {
          fill: rgba(255,255,255,0.09);
          stroke: rgba(255,255,255,0.42);
          stroke-width: 4px;
          stroke-linejoin: round;
          transition: fill 0.3s ease;
        }

        .standort-spoke {
          stroke: rgba(240,211,162,0.45);
          stroke-width: 5;
          stroke-dasharray: 10 18;
          fill: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .standort-spoke.show {
          opacity: 1;
        }

        .standort-marker circle.core {
          fill: #f0d3a2;
          stroke: #d79a4b;
          stroke-width: 8;
          transition: transform 0.25s ease, fill 0.25s ease;
          transform-box: fill-box;
          transform-origin: center;
          cursor: pointer;
        }

        .standort-marker.hq circle.core {
          fill: #d79a4b;
          stroke: #fff6e8;
        }

        .standort-marker circle.pulse {
          fill: none;
          stroke: #f0d3a2;
          stroke-width: 6;
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
        }

        .standort-marker.active circle.core,
        .standort-marker:hover circle.core {
          transform: scale(1.55);
          fill: #fff6e8;
          stroke: #d79a4b;
        }

        .standort-marker.active circle.pulse,
        .standort-marker:hover circle.pulse {
          animation: pulse 1.4s ease-out infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.55; transform: scale(1); }
          100% { opacity: 0; transform: scale(2.4); }
        }

        .standort-marker text {
          font-family: "Inter", sans-serif;
          font-size: 44px;
          font-weight: 600;
          fill: rgba(255,255,255,0.72);
          transition: fill 0.25s ease;
          pointer-events: none;
          paint-order: stroke;
          stroke: rgba(8,33,63,0.85);
          stroke-width: 6px;
        }

        .standort-marker.active text,
        .standort-marker:hover text {
          fill: #ffffff;
        }

        @media (max-width: 860px) {
          .standort-card-shell {
            grid-template-columns: 1fr;
          }

          .standort-map-panel {
            padding-top: 40px;
            min-height: 420px;
          }
        }
      `}</style>

      <div className="standort-card-shell">
        <div className="standort-directory">
          <div className="standort-eyebrow">Standorte</div>
          <h1 className="standort-title">Wo Sie uns finden</h1>
          <p className="standort-sub">Sieben Regionen, ein Team. Hamburg ist unser Hauptsitz — von dort aus sind wir in ganz Norddeutschland und darüber hinaus vertreten.</p>

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

          <div className="standort-footer">Mit der Maus über einen Ort fahren, um ihn auf der Karte zu sehen.</div>
        </div>

        <div className="standort-map-panel">
          <svg className="standort-map" viewBox="0 0 2084 2084" xmlns="http://www.w3.org/2000/svg" aria-label="Deutschlandkarte mit DHANSA Standorten">
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
                  <text x={marker.x + (isHq ? 35 : 26)} y={marker.y - (isHq ? 14 : 10)}>{marker.label}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </>
  );
}
