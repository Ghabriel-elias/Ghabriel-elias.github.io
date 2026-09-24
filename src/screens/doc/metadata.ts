import type { Metadata } from "next";

import { LOCALE_BY_LANG, type Lang } from "@/constants/languages";
import type { DocKey } from "@/constants/routes";

import { DOCS } from "./content";

export function docMetadata(lang: Lang, doc: DocKey): Metadata {
  const { title, description } = DOCS[LOCALE_BY_LANG[lang]][doc];

  return { title, description };
}
