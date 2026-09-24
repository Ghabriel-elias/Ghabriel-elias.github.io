export const PASSWORD_RULES = ["length", "upper", "special"] as const;

export type PasswordRule = (typeof PASSWORD_RULES)[number];

export type PasswordChecks = Record<PasswordRule, boolean>;

export function checkPassword(value: string): PasswordChecks {
  return {
    length: value.length >= 8,
    upper: /\p{Lu}/u.test(value),
    special: /[^\p{L}\p{N}]/u.test(value),
  };
}

export function passwordValid(checks: PasswordChecks) {
  return PASSWORD_RULES.every((rule) => checks[rule]);
}
