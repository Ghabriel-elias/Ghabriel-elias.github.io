const SUPABASE_URL = "https://fqulknevqwjxojsfowkk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxdWxrbmV2cXdqeG9qc2Zvd2trIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwODM2MzUsImV4cCI6MjEwMjY1OTYzNX0.eOBVgUZQLa3-bwKAhGqDS2MnnZd09oL7YsN1rCN-YNg";

const APP_SCHEME = "broto://";

const STRINGS = {
  "pt-BR": {
    checking: "Verificando o link…",
    confirmTitle: "Tudo certo",
    confirmBody: "Seu e-mail está confirmado. Abra o Broto e entre na sua conta.",
    resetTitle: "Nova senha",
    resetBody: "Crie uma senha para voltar a entrar na sua conta.",
    field: "Nova senha",
    placeholder: "Crie uma senha",
    show: "Mostrar",
    hide: "Ocultar",
    ruleLength: "No mínimo 8 caracteres",
    ruleUpper: "Uma letra maiúscula",
    ruleSpecial: "Um caractere especial",
    submit: "Salvar senha",
    saving: "Salvando…",
    doneTitle: "Senha alterada",
    doneBody: "Abra o Broto e entre com a senha nova.",
    badTitle: "Link vencido",
    badBody: "Esse link já foi usado ou passou da validade. Peça um novo pelo app.",
    badBodyConfirm: "Esse link já foi usado ou passou da validade. Se você já confirmou, é só entrar no app.",
    open: "Abrir o Broto",
    foot: "Se nada abrir, abra o Broto pela tela inicial do celular.",
    same: "A senha nova precisa ser diferente da antiga.",
    weak: "Essa senha não atende às regras.",
    generic: "Não deu para concluir agora. Tente de novo em alguns minutos.",
  },
  "en-US": {
    checking: "Checking the link…",
    confirmTitle: "All set",
    confirmBody: "Your email is confirmed. Open Broto and sign in.",
    resetTitle: "New password",
    resetBody: "Create a password to get back into your account.",
    field: "New password",
    placeholder: "Create a password",
    show: "Show",
    hide: "Hide",
    ruleLength: "At least 8 characters",
    ruleUpper: "One uppercase letter",
    ruleSpecial: "One special character",
    submit: "Save password",
    saving: "Saving…",
    doneTitle: "Password changed",
    doneBody: "Open Broto and sign in with the new password.",
    badTitle: "Link expired",
    badBody: "This link was already used or has expired. Ask for a new one in the app.",
    badBodyConfirm: "This link was already used or has expired. If you already confirmed, just sign in.",
    open: "Open Broto",
    foot: "If nothing opens, launch Broto from your home screen.",
    same: "The new password has to be different from the old one.",
    weak: "That password does not meet the rules.",
    generic: "We could not finish right now. Try again in a few minutes.",
  },
  "es-ES": {
    checking: "Comprobando el enlace…",
    confirmTitle: "Todo listo",
    confirmBody: "Tu correo está confirmado. Abre Broto y entra en tu cuenta.",
    resetTitle: "Nueva contraseña",
    resetBody: "Crea una contraseña para volver a entrar en tu cuenta.",
    field: "Nueva contraseña",
    placeholder: "Crea una contraseña",
    show: "Mostrar",
    hide: "Ocultar",
    ruleLength: "Mínimo 8 caracteres",
    ruleUpper: "Una letra mayúscula",
    ruleSpecial: "Un carácter especial",
    submit: "Guardar contraseña",
    saving: "Guardando…",
    doneTitle: "Contraseña cambiada",
    doneBody: "Abre Broto y entra con la contraseña nueva.",
    badTitle: "Enlace vencido",
    badBody: "Este enlace ya se usó o venció. Pide uno nuevo desde la app.",
    badBodyConfirm: "Este enlace ya se usó o venció. Si ya lo confirmaste, solo entra en la app.",
    open: "Abrir Broto",
    foot: "Si no se abre nada, abre Broto desde la pantalla de inicio.",
    same: "La contraseña nueva tiene que ser distinta de la anterior.",
    weak: "Esa contraseña no cumple las reglas.",
    generic: "No se pudo completar ahora. Inténtalo de nuevo en unos minutos.",
  },
};

function pickLanguage() {
  const tag = (navigator.language || "en").toLowerCase();
  if (tag.startsWith("pt")) return "pt-BR";
  if (tag.startsWith("es")) return "es-ES";
  return "en-US";
}

const LANG = pickLanguage();
const T = STRINGS[LANG];

document.documentElement.lang = LANG;

function readToken() {
  const search = new URLSearchParams(location.search);
  const fragment = new URLSearchParams(location.hash.replace(/^#/, ""));
  const get = (key) => search.get(key) || fragment.get(key);

  const token = get("token_hash") || get("token");
  const type = get("type");
  const error = get("error_description") || get("error");

  history.replaceState({}, "", location.pathname);

  return { token, type, error };
}

async function verifyToken(token, type) {
  const response = await fetch(SUPABASE_URL + "/auth/v1/verify", {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type, token_hash: token }),
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.msg || body.error_description || "verify_failed");
  return body;
}

async function setPassword(accessToken, password) {
  const response = await fetch(SUPABASE_URL + "/auth/v1/user", {
    method: "PUT",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.msg || body.error_description || "update_failed");
  return body;
}

function show(name) {
  document.querySelectorAll(".auth-state").forEach((node) => {
    node.toggleAttribute("data-active", node.dataset.state === name);
  });
}

function fill(map) {
  Object.entries(map).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  });
}

function checkPassword(value) {
  return {
    length: value.length >= 8,
    upper: /\p{Lu}/u.test(value),
    special: /[^\p{L}\p{N}]/u.test(value),
  };
}

function friendlyError(message) {
  if (/different from the old password/i.test(message)) return T.same;
  if (/password/i.test(message) && /least|short|weak/i.test(message)) return T.weak;
  return T.generic;
}
