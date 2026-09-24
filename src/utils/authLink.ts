export type AuthLink = {
  token: string | null;
  type: string | null;
  error: string | null;
};

export function readAuthLink(): AuthLink {
  const search = new URLSearchParams(window.location.search);
  const fragment = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const get = (key: string) => search.get(key) || fragment.get(key);

  const link: AuthLink = {
    token: get("token_hash") || get("token"),
    type: get("type"),
    error: get("error_description") || get("error"),
  };

  window.history.replaceState({}, "", window.location.pathname);

  return link;
}
