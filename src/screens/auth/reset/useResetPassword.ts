"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { setPassword as savePassword, verifyToken } from "@/services/supabaseAuth";
import { readAuthLink } from "@/utils/authLink";
import { checkPassword, passwordValid } from "@/utils/password";

export type ResetPhase = "checking" | "form" | "done" | "bad";

async function openSession() {
  const { token, error } = readAuthLink();

  if (error || !token) throw new Error("no_token");

  const session = await verifyToken(token, "recovery");
  if (!session.access_token) throw new Error("no_session");

  return session.access_token;
}

export function useResetPassword() {
  const [phase, setPhase] = useState<ResetPhase>("checking");
  const [password, setPassword] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [failure, setFailure] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const accessToken = useRef<string | null>(null);
  const started = useRef(false);
  const field = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    openSession()
      .then((session) => {
        accessToken.current = session;
        setPhase("form");
      })
      .catch(() => setPhase("bad"));
  }, []);

  useEffect(() => {
    if (phase === "form") field.current?.focus();
  }, [phase]);

  const checks = checkPassword(password);
  const valid = passwordValid(checks);

  function change(value: string) {
    setFailure(null);
    setPassword(value);
  }

  function toggleReveal() {
    setRevealed((current) => !current);
    field.current?.focus();
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!valid || saving || !accessToken.current) return;

    setSaving(true);
    setFailure(null);

    try {
      await savePassword(accessToken.current, password);
      setPhase("done");
    } catch (error) {
      setFailure(error instanceof Error ? error.message : "");
      setSaving(false);
    }
  }

  return {
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
  };
}
