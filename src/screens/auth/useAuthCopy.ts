"use client";

import { useEffect, useSyncExternalStore } from "react";

import {
  detectBrowserLocale,
  HTML_LANG,
  LANGS,
  LOCALE_BY_LANG,
  type Locale,
} from "@/constants/languages";
import { getT, type T } from "@/i18n";

const subscribe = () => () => {};

const onServer = (): Locale | null => null;

export function useAuthCopy() {
  const locale = useSyncExternalStore(subscribe, detectBrowserLocale, onServer);

  useEffect(() => {
    if (!locale) return;

    const lang = LANGS.find((code) => LOCALE_BY_LANG[code] === locale);
    if (lang) document.documentElement.lang = HTML_LANG[lang];
  }, [locale]);

  return { locale, t: locale ? getT(locale, "auth") : null };
}

export function friendlyError(t: T, message: string) {
  if (/different from the old password/i.test(message)) return t("same");
  if (/password/i.test(message) && /least|short|weak/i.test(message)) return t("weak");
  return t("generic");
}
