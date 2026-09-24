import { Link } from "@/components/Link";

import { LOCALE_BY_LANG, type Lang } from "@/constants/languages";
import { DOC_ORDER, DOC_PATHS } from "@/constants/routes";
import { SUPPORT_EMAIL } from "@/constants/site";
import { getT } from "@/i18n";

export function Footer({ lang }: { lang: Lang }) {
  const t = getT(LOCALE_BY_LANG[lang], "common");

  return (
    <footer>
      <div className="wrap">
        <nav className="footdocs" aria-label={t("footNavAria")}>
          {DOC_ORDER.map((key) => (
            <Link key={key} href={DOC_PATHS[lang][key]}>
              {t(`footer.docs.${key}`)}
            </Link>
          ))}
        </nav>
        <div className="footmeta">
          <span>{t("footer.tagline")}</span>
          <span>{t("footer.entity")}</span>
          <span>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
