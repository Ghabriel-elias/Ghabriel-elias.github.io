import type { Lang } from "@/constants/languages";

export type DocKey = "privacy" | "terms" | "refund" | "deletion" | "help";

export const DOC_ORDER: DocKey[] = [
  "privacy",
  "terms",
  "refund",
  "deletion",
  "help",
];

export const HOME: Record<Lang, string> = {
  pt: "/",
  en: "/en",
  es: "/es",
};

export const ANCHORS: Record<Lang, { how: string; pricing: string }> = {
  pt: { how: "como-funciona", pricing: "precos" },
  en: { how: "how-it-works", pricing: "pricing" },
  es: { how: "como-funciona", pricing: "precios" },
};

export const DOC_PATHS: Record<Lang, Record<DocKey, string>> = {
  pt: {
    privacy: "/privacidade",
    terms: "/termos",
    refund: "/reembolso",
    deletion: "/exclusao",
    help: "/ajuda",
  },
  en: {
    privacy: "/en/privacy",
    terms: "/en/terms",
    refund: "/en/refund",
    deletion: "/en/delete-account",
    help: "/en/help",
  },
  es: {
    privacy: "/es/privacidad",
    terms: "/es/terminos",
    refund: "/es/reembolso",
    deletion: "/es/eliminar-cuenta",
    help: "/es/ayuda",
  },
};

export const AUTH_PATHS = {
  confirm: "/confirmado",
  reset: "/nova-senha",
};
