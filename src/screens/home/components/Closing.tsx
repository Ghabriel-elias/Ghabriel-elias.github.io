import { Link } from "@/components/Link";

import { Rich } from "@/components/Rich";
import type { Lang } from "@/constants/languages";
import { DOC_PATHS } from "@/constants/routes";
import type { T } from "@/i18n";

import { Soon } from "./Soon";

export function Closing({ t, lang }: { t: T; lang: Lang }) {
  return (
    <section className="closing">
      <div className="wrap">
        <h2>{t("closing.title")}</h2>
        <p>
          <Rich
            t={t}
            k="closing.text"
            components={{ help: <Link href={DOC_PATHS[lang].help} /> }}
          />
        </p>
        <Soon>{t("closing.soon")}</Soon>
      </div>
    </section>
  );
}
