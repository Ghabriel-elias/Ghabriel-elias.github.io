import { Link } from "@/components/Link";

import { Info } from "@/components/Icons";
import { Rich } from "@/components/Rich";
import type { Lang } from "@/constants/languages";
import { ANCHORS, DOC_PATHS } from "@/constants/routes";
import { list, type T } from "@/i18n";

type Plan = {
  tag: string;
  price: string;
  per: string;
  items: string[];
  year?: { price: string; label: string; note: string };
};

export function Pricing({ t, lang }: { t: T; lang: Lang }) {
  const plans = list<Plan>(t, "pricing.plans");

  return (
    <section id={ANCHORS[lang].pricing}>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t("pricing.eyebrow")}</p>
          <h2>{t("pricing.title")}</h2>
          <p>{t("pricing.lede")}</p>
        </div>

        <div className="plans">
          {plans.map((plan, i) => (
            <div key={String(plan.tag)} className={plan.year ? "plan is-lead" : "plan"}>
              <p className="tag">{plan.tag}</p>
              <p className="price">{plan.price}</p>
              <p className="per">{plan.per}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={String(item)}>{item}</li>
                ))}
              </ul>

              {plan.year ? (
                <div className="plan-year">
                  <p className="plan-year-top">
                    <b>{plan.year.price}</b>
                    <span>{plan.year.label}</span>
                  </p>
                  <p className="plan-year-note">
                    <Rich t={t} k={`pricing.plans.${i}.year.note`} />
                  </p>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <p className="no-unlimited">
          <Info />
          <span>
            <Rich t={t} k="pricing.noUnlimited" />
          </span>
        </p>

        <p className="fineprint">
          <Rich
            t={t}
            k="pricing.fineprint"
            components={{ refund: <Link href={DOC_PATHS[lang].refund} /> }}
          />
        </p>
      </div>
    </section>
  );
}
