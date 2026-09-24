import { Mark } from "@/components/Icons";
import type { T } from "@/i18n";

export function LockMock({ t }: { t: T }) {
  return (
    <div className="lock-phone" aria-hidden="true">
      <div className="lock-screen">
        <p className="lock-date">{t("lock.date")}</p>
        <p className="lock-time">{t("lock.time")}</p>

        <div className="notif">
          <span className="notif-icon">
            <Mark />
          </span>
          <div className="notif-texts">
            <p className="notif-app">
              <span>{t("lock.app")}</span>
              <span>{t("lock.now")}</span>
            </p>
            <p className="notif-title">{t("lock.title")}</p>
            <p className="notif-text">{t("lock.text")}</p>
          </div>
        </div>

        <span className="lock-bar" />
      </div>
    </div>
  );
}
