import type { T } from "@/i18n";

import { AppMock } from "./mock/AppMock";
import { Soon } from "./Soon";

export function Hero({ t }: { t: T }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">{t("hero.eyebrow")}</p>
          <h1>{t("hero.title")}</h1>
          <p className="lede">{t("hero.lede")}</p>
          <Soon>{t("hero.soon")}</Soon>
          <p className="hero-note">{t("hero.note")}</p>
        </div>

        <div className="phone" aria-hidden="true">
          <div className="phone-screen">
            <AppMock t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
