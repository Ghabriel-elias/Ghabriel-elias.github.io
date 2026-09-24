import { createInstance, type i18n as I18n, type TFunction } from "i18next";

import { FALLBACK_LOCALE, type Locale } from "@/constants/languages";

import enUS from "./locales/en-US";
import esES from "./locales/es-ES";
import ptBR from "./locales/pt-BR";

export const resources = {
  "pt-BR": ptBR,
  "en-US": enUS,
  "es-ES": esES,
};

export type Namespace = keyof typeof ptBR;

export type T = TFunction;

const NAMESPACES = Object.keys(ptBR) as Namespace[];

const instances = new Map<Locale, I18n>();
const fixed = new Map<string, T>();
const owners = new WeakMap<object, I18n>();

function instanceFor(locale: Locale) {
  const cached = instances.get(locale);
  if (cached) return cached;

  const instance = createInstance();

  instance.init({
    resources,
    lng: locale,
    fallbackLng: FALLBACK_LOCALE,
    defaultNS: "common",
    ns: NAMESPACES,
    interpolation: { escapeValue: false },
    load: "currentOnly",
    initAsync: false,
  });

  instances.set(locale, instance);
  return instance;
}

export function getT(locale: Locale, ns: Namespace): T {
  const key = `${locale}:${ns}`;
  const cached = fixed.get(key);
  if (cached) return cached;

  const instance = instanceFor(locale);
  const t = instance.getFixedT(locale, ns);

  owners.set(t, instance);
  fixed.set(key, t);

  return t;
}

export function i18nOf(t: T) {
  return owners.get(t);
}

export function list<Item>(t: T, key: string): Item[] {
  return t(key, { returnObjects: true }) as unknown as Item[];
}
