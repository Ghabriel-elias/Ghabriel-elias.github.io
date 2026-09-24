import { Rich } from "@/components/Rich";
import type { T } from "@/i18n";

import { LockMock } from "./mock/LockMock";

export function Reminders({ t }: { t: T }) {
  return (
    <section>
      <div className="wrap split">
        <LockMock t={t} />
        <div>
          <p className="eyebrow">{t("reminders.eyebrow")}</p>
          <h2>{t("reminders.title")}</h2>
          <p>
            <Rich t={t} k="reminders.first" />
          </p>
          <p>{t("reminders.second")}</p>
        </div>
      </div>
    </section>
  );
}
