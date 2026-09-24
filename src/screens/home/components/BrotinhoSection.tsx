import type { T } from "@/i18n";

import { BrotinhoArt, ChatMock } from "./mock/Brotinho";

export function BrotinhoSection({ t }: { t: T }) {
  return (
    <section className="is-feature">
      <div className="wrap split">
        <div>
          <BrotinhoArt />
          <p className="eyebrow">{t("brotinho.eyebrow")}</p>
          <h2>{t("brotinho.title")}</h2>
          <p>{t("brotinho.text")}</p>
        </div>

        <ChatMock t={t} />
      </div>
    </section>
  );
}
