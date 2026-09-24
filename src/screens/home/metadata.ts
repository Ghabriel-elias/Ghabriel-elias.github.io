import type { Metadata } from "next";

import { LOCALE_BY_LANG, type Lang } from "@/constants/languages";
import { getT } from "@/i18n";
import { asset } from "@/constants/site";

export function homeMetadata(lang: Lang): Metadata {
  const t = getT(LOCALE_BY_LANG[lang], "home");

  const title = t("meta.title");
  const description = t("meta.description");

  return {
    title,
    description,
    openGraph: {
      type: "website",
      title: t("meta.ogTitle"),
      description,
      images: [asset("/mark.png")],
    },
  };
}
