import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/constants/supabase";

type Session = { access_token?: string };

async function call<Result>(path: string, init: RequestInit): Promise<Result> {
  const response = await fetch(SUPABASE_URL + path, init);
  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(body.msg || body.error_description || "request_failed");
  }

  return body as Result;
}

export function verifyToken(token: string, type: string) {
  return call<Session>("/auth/v1/verify", {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type, token_hash: token }),
  });
}

export function setPassword(accessToken: string, password: string) {
  return call<Session>("/auth/v1/user", {
    method: "PUT",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });
}
