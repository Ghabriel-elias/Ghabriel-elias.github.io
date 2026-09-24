import type { Locale } from "@/constants/languages";
import type { DocKey } from "@/constants/routes";

import * as ptBRPrivacy from "./pt-BR/privacy";
import * as ptBRTerms from "./pt-BR/terms";
import * as ptBRRefund from "./pt-BR/refund";
import * as ptBRDeletion from "./pt-BR/deletion";
import * as ptBRHelp from "./pt-BR/help";
import * as enUSPrivacy from "./en-US/privacy";
import * as enUSTerms from "./en-US/terms";
import * as enUSRefund from "./en-US/refund";
import * as enUSDeletion from "./en-US/deletion";
import * as enUSHelp from "./en-US/help";
import * as esESPrivacy from "./es-ES/privacy";
import * as esESTerms from "./es-ES/terms";
import * as esESRefund from "./es-ES/refund";
import * as esESDeletion from "./es-ES/deletion";
import * as esESHelp from "./es-ES/help";

export type DocModule = {
  title: string;
  description?: string;
  Body: () => React.JSX.Element;
};

export const DOCS: Record<Locale, Record<DocKey, DocModule>> = {
  "pt-BR": {
    privacy: ptBRPrivacy,
    terms: ptBRTerms,
    refund: ptBRRefund,
    deletion: ptBRDeletion,
    help: ptBRHelp,
  },
  "en-US": {
    privacy: enUSPrivacy,
    terms: enUSTerms,
    refund: enUSRefund,
    deletion: enUSDeletion,
    help: enUSHelp,
  },
  "es-ES": {
    privacy: esESPrivacy,
    terms: esESTerms,
    refund: esESRefund,
    deletion: esESDeletion,
    help: esESHelp,
  },
};
