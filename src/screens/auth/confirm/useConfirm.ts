"use client";

import { useEffect, useRef, useState } from "react";

import { verifyToken } from "@/services/supabaseAuth";
import { readAuthLink } from "@/utils/authLink";

export type ConfirmPhase = "checking" | "ok" | "bad";

async function confirmEmail() {
  const { token, type, error } = readAuthLink();

  if (error || !token) throw new Error("no_token");

  const first = type || "email";
  const second = first === "signup" ? "email" : "signup";

  try {
    await verifyToken(token, first);
  } catch {
    await verifyToken(token, second);
  }
}

export function useConfirm() {
  const [phase, setPhase] = useState<ConfirmPhase>("checking");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    confirmEmail()
      .then(() => setPhase("ok"))
      .catch(() => setPhase("bad"));
  }, []);

  return phase;
}
