import type { ReactNode } from "react";

import { HTML_LANG, type Lang } from "@/constants/languages";
import { fontClass } from "@/style/fonts";

import "@/style/globals.css";

type DocumentProps = {
  lang: Lang;
  children: ReactNode;
};

export function Document({ lang, children }: DocumentProps) {
  return (
    <html lang={HTML_LANG[lang]} className={fontClass}>
      <body>{children}</body>
    </html>
  );
}
