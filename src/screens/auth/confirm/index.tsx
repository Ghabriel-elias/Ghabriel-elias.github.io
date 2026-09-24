"use client";

import { AuthShell } from "@/components/AuthShell";
import { APP_SCHEME } from "@/constants/supabase";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

import { Bad, Checking, Done } from "../components/AuthStates";
import { useAuthCopy } from "../useAuthCopy";
import { useConfirm } from "./useConfirm";

export function ConfirmScreen() {
  const { t } = useAuthCopy();
  const phase = useConfirm();

  useDocumentTitle(t ? `${t("confirmTitle")} · Broto` : null);

  if (!t) {
    return (
      <AuthShell>
        <Checking label="" />
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      {phase === "checking" && <Checking label={t("checking")} />}

      {phase === "ok" && (
        <Done
          state="ok"
          title={t("confirmTitle")}
          body={t("confirmBody")}
          open={t("open")}
          foot={t("foot")}
          scheme={APP_SCHEME}
        />
      )}

      {phase === "bad" && <Bad title={t("badTitle")} body={t("badBodyConfirm")} />}
    </AuthShell>
  );
}
