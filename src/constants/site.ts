export const BASE_PATH = "/broto";

export const SITE_URL = `https://ghabriel-elias.github.io${BASE_PATH}`;

export const SUPPORT_EMAIL = "falecombroto@gmail.com";

export const LEGAL_ENTITY = "61.021.870 Ghabriel Elias Fonseca de Souza";

export const CNPJ = "61.021.870/0001-31";

export const ADDRESS =
  "Rua Cerejo Cruz, 583, Centro, Boa Vista/RR, CEP 69.301-060";

export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}
