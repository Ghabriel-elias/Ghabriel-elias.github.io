import { Rich } from "@/components/Rich";
import type { Lang } from "@/constants/languages";
import { ANCHORS } from "@/constants/routes";
import { list, type T } from "@/i18n";

import { AppMock } from "./mock/AppMock";
import { CameraMock } from "./mock/CameraMock";
import { PlantsMock } from "./mock/PlantsMock";

type Step = { n: string; title: string; text: string };

export function HowItWorks({ t, lang }: { t: T; lang: Lang }) {
  const steps = list<Step>(t, "how.steps");

  const shots = [
    <div key="cam" className="step-screen is-dark">
      <CameraMock t={t} />
    </div>,
    <div key="app" className="step-screen">
      <AppMock t={t} variant="compact" />
    </div>,
    <div key="plants" className="step-screen">
      <PlantsMock t={t} />
    </div>,
  ];

  return (
    <section id={ANCHORS[lang].how}>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t("how.eyebrow")}</p>
          <h2>{t("how.title")}</h2>
          <p>{t("how.lede")}</p>
        </div>

        <div className="steps">
          {steps.map((step, i) => (
            <div key={String(step.n)} className="step">
              <span className="n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>
                <Rich t={t} k={`how.steps.${i}.text`} />
              </p>
              <div className="step-shot" aria-hidden="true">
                {shots[i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
