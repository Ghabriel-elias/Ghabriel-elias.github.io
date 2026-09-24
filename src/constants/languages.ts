export const LOCALES = ["pt-BR", "en-US", "es-ES"] as const;

export type Locale = (typeof LOCALES)[number];

export const FALLBACK_LOCALE: Locale = "en-US";

export const LANGS = ["pt", "en", "es"] as const;

export type Lang = (typeof LANGS)[number];

export const LOCALE_BY_LANG: Record<Lang, Locale> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES",
};

export const HTML_LANG: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return FALLBACK_LOCALE;

  const tag = (navigator.language || "").toLowerCase();
  if (tag.startsWith("pt")) return "pt-BR";
  if (tag.startsWith("es")) return "es-ES";
  return FALLBACK_LOCALE;
}
