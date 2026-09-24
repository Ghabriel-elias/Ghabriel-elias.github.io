import { Link } from "@/components/Link";

import { Brand } from "@/components/Brand";
import { LangMenu } from "@/components/LangMenu";
import { LOCALE_BY_LANG, type Lang } from "@/constants/languages";
import { ANCHORS, DOC_PATHS, HOME } from "@/constants/routes";
import { getT } from "@/i18n";

type TopbarProps = {
  lang: Lang;
  alternates: Record<Lang, string>;
  onHome?: boolean;
};

export function Topbar({ lang, alternates, onHome = false }: TopbarProps) {
  const t = getT(LOCALE_BY_LANG[lang], "common");
  const anchors = ANCHORS[lang];
  const prefix = onHome ? "" : HOME[lang];

  return (
    <header className="topbar">
      <div className="wrap">
        <Brand lang={lang} label={t("brandAria")} />

        <nav aria-label={t("topNavAria")}>
          <Link href={`${prefix}#${anchors.how}`}>{t("nav.how")}</Link>
          <Link href={`${prefix}#${anchors.pricing}`}>{t("nav.pricing")}</Link>
          <Link href={DOC_PATHS[lang].help}>{t("nav.help")}</Link>
        </nav>

        <LangMenu lang={lang} alternates={alternates} />
      </div>
    </header>
  );
}
