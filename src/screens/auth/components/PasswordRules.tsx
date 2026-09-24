import { Check } from "@/components/Icons";
import type { T } from "@/i18n";
import {
  PASSWORD_RULES,
  type PasswordChecks,
  type PasswordRule,
} from "@/utils/password";

const LABEL: Record<PasswordRule, string> = {
  length: "ruleLength",
  upper: "ruleUpper",
  special: "ruleSpecial",
};

export function PasswordRules({ t, checks }: { t: T; checks: PasswordChecks }) {
  return (
    <ul className="auth-rules">
      {PASSWORD_RULES.map((rule) => (
        <li key={rule} data-rule={rule} className={checks[rule] ? "is-met" : undefined}>
          <i>
            <Check strokeWidth="3.4" />
          </i>
          <span>{t(LABEL[rule])}</span>
        </li>
      ))}
    </ul>
  );
}
