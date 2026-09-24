import { Link } from "@/components/Link";

import { ChevronDown, Globe } from "@/components/Icons";
import {
  HTML_LANG,
  LANGS,
  LOCALE_BY_LANG,
  type Lang,
} from "@/constants/languages";
import { getT } from "@/i18n";

type LangMenuProps = {
  lang: Lang;
  alternates: Record<Lang, string>;
};

export function LangMenu({ lang, alternates }: LangMenuProps) {
  const t = getT(LOCALE_BY_LANG[lang], "common");

  return (
    <details className="langs">
      <summary aria-label={t("langAria")}>
        <Globe />
        <span>{t("langName")}</span>
        <ChevronDown />
      </summary>
      <div className="langs-menu">
        {LANGS.map((other) => {
          const label = getT(LOCALE_BY_LANG[other], "common")("langName");

          if (other === lang) {
            return (
              <Link key={other} href={alternates[other]} aria-current="true">
                {label}
              </Link>
            );
          }

          return (
            <Link key={other} href={alternates[other]} hrefLang={HTML_LANG[other]}>
              {label}
            </Link>
          );
        })}
      </div>
    </details>
  );
}
