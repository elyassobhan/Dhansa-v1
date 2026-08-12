import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

type ConsentChoice = "all" | "essential";
const STORAGE_KEY = "dhansa_cookie_consent_v1";

function saveConsent(value: ConsentChoice) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      value,
      at: new Date().toISOString(),
      version: 1,
    }),
  );
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [allowAnalytics, setAllowAnalytics] = useState(false);

  useEffect(() => {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) setVisible(true);
  }, []);

  const acceptAll = () => {
    setAllowAnalytics(true);
    saveConsent("all");
    setVisible(false);
    setSettingsOpen(false);
  };

  const acceptEssential = () => {
    setAllowAnalytics(false);
    saveConsent("essential");
    setVisible(false);
    setSettingsOpen(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4">
      <div className="mx-auto max-w-5xl rounded-2xl border border-primary/20 bg-white p-4 shadow-lift sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <ShieldCheck className="size-3.5" />
              Cookie-Einstellungen (DSGVO)
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Wir verwenden notwendige Cookies fuer den sicheren Betrieb der Website. Optionale
              Cookies helfen uns, Inhalte und Nutzererlebnis zu verbessern.
            </p>
            <button
              type="button"
              onClick={() => setSettingsOpen((v) => !v)}
              className="mt-2 text-xs font-semibold text-primary underline-offset-2 hover:underline"
            >
              {settingsOpen ? "Einstellungen ausblenden" : "Einstellungen anzeigen"}
            </button>

            {settingsOpen && (
              <div className="mt-3 rounded-xl border border-border bg-secondary p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Notwendige Cookies</p>
                    <p className="text-xs text-muted-foreground">Immer aktiv fuer Sicherheit und Grundfunktionen.</p>
                  </div>
                  <span className="rounded-full bg-primary px-2 py-1 text-[10px] font-semibold text-white">Aktiv</span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Analyse-Cookies</p>
                    <p className="text-xs text-muted-foreground">Optional fuer Statistiken und Performance-Verbesserung.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAllowAnalytics((v) => !v)}
                    className={`h-7 w-12 rounded-full p-1 transition-colors ${
                      allowAnalytics ? "bg-primary" : "bg-border"
                    }`}
                    aria-label="Analyse-Cookies umschalten"
                  >
                    <span
                      className={`block size-5 rounded-full bg-white transition-transform ${
                        allowAnalytics ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 sm:justify-end">
            <Button type="button" variant="outline" size="pill" onClick={acceptEssential}>
              Nur notwendige
            </Button>
            <Button type="button" variant="hero" size="pill" className="shadow-blue" onClick={acceptAll}>
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
