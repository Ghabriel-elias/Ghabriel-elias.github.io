import { Link } from "@/components/Link";

import { Footer } from "@/components/Footer";
import { Topbar } from "@/components/Topbar";
import { LANGS, LOCALE_BY_LANG, type Lang } from "@/constants/languages";
import { DOC_ORDER, DOC_PATHS, type DocKey } from "@/constants/routes";
import { getT } from "@/i18n";

import { DOCS } from "./content";

type DocScreenProps = {
  lang: Lang;
  doc: DocKey;
};

export function DocScreen({ lang, doc }: DocScreenProps) {
  const t = getT(LOCALE_BY_LANG[lang], "common");
  const { Body } = DOCS[LOCALE_BY_LANG[lang]][doc];

  const alternates = Object.fromEntries(
    LANGS.map((other) => [other, DOC_PATHS[other][doc]]),
  ) as Record<Lang, string>;

  return (
    <>
      <Topbar lang={lang} alternates={alternates} />

      <main className="page">
        <div className="wrap">
          <div className="layout">
            <nav className="docnav" aria-label={t("footNavAria")}>
              <p className="eyebrow">{t("docsEyebrow")}</p>
              {DOC_ORDER.map((key) => (
                <Link
                  key={key}
                  href={DOC_PATHS[lang][key]}
                  aria-current={key === doc ? "page" : undefined}
                >
                  {t(`docs.${key}`)}
                </Link>
              ))}
            </nav>

            <article>
              <Body />
            </article>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </>
  );
}
