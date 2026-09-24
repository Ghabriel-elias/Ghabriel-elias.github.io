"use client";

import { AuthShell } from "@/components/AuthShell";
import { Mark } from "@/components/Icons";
import { APP_SCHEME } from "@/constants/supabase";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

import { Bad, Checking, Done } from "../components/AuthStates";
import { PasswordRules } from "../components/PasswordRules";
import { friendlyError, useAuthCopy } from "../useAuthCopy";
import { useResetPassword } from "./useResetPassword";

export function ResetScreen() {
  const { t } = useAuthCopy();
  const {
    phase,
    password,
    change,
    checks,
    valid,
    revealed,
    toggleReveal,
    failure,
    saving,
    submit,
    field,
  } = useResetPassword();

  useDocumentTitle(t ? `${t("resetTitle")} · Broto` : null);

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

      {phase === "form" && (
        <div className="auth-state" data-state="form" data-active>
          <Mark className="auth-mark" />
          <h1>{t("resetTitle")}</h1>
          <p className="lede">{t("resetBody")}</p>

          <form className="auth-form" onSubmit={submit} noValidate>
            <div>
              <label className="auth-label" htmlFor="password">
                {t("field")}
              </label>
              <span className="auth-field">
                <input
                  ref={field}
                  id="password"
                  name="password"
                  type={revealed ? "text" : "password"}
                  autoComplete="new-password"
                  autoCapitalize="off"
                  spellCheck={false}
                  required
                  placeholder={t("placeholder")}
                  value={password}
                  onChange={(event) => change(event.target.value)}
                />
                <button className="auth-reveal" type="button" onClick={toggleReveal}>
                  {revealed ? t("hide") : t("show")}
                </button>
              </span>
            </div>

            <PasswordRules t={t} checks={checks} />

            <p className="auth-error" role="alert" data-active={failure === null ? undefined : ""}>
              {failure === null ? "" : friendlyError(t, failure)}
            </p>

            <button className="auth-submit" type="submit" disabled={!valid || saving}>
              {saving ? t("saving") : t("submit")}
            </button>
          </form>
        </div>
      )}

      {phase === "done" && (
        <Done
          state="done"
          title={t("doneTitle")}
          body={t("doneBody")}
          open={t("open")}
          foot={t("foot")}
          scheme={APP_SCHEME}
        />
      )}

      {phase === "bad" && <Bad title={t("badTitle")} body={t("badBody")} />}
    </AuthShell>
  );
}
