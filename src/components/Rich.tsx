import type { ReactElement } from "react";
import { Trans } from "react-i18next/TransWithoutContext";

import { i18nOf, type T } from "@/i18n";

type RichProps = {
  t: T;
  k: string;
  components?: Record<string, ReactElement>;
};

export function Rich({ t, k, components }: RichProps) {
  return (
    <Trans
      t={t}
      i18n={i18nOf(t)}
      i18nKey={k}
      components={{ strong: <strong />, br: <br />, ...components }}
    />
  );
}
