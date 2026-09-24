import { Rich } from "@/components/Rich";
import type { T } from "@/i18n";

import { ConfirmCard } from "./mock/AppMock";

export function WhyOrdered({ t }: { t: T }) {
  return (
    <section>
      <div className="wrap split">
        <div>
          <p className="eyebrow">{t("why.eyebrow")}</p>
          <h2>{t("why.title")}</h2>
          <p>{t("why.first")}</p>
          <p>
            <Rich t={t} k="why.second" />
          </p>
        </div>

        <div className="cutout" aria-hidden="true">
          <div className="app">
            <p className="app-eyebrow">{t("mock.confirmEyebrow")}</p>
            <p className="app-title">{t("mock.confirmTitle")}</p>
            <ConfirmCard t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
