import { Drop, Info, Mark, Paw, Sprout, Sun } from "@/components/Icons";
import { list, type T } from "@/i18n";

type Cause = { cause: string; blocks: { label: string; body: string }[] };
type Care = { label: string; value: string; note: string };

type AppMockProps = {
  t: T;
  variant?: "full" | "compact";
};

const CARE_ICONS = [Drop, Sun, Sprout];

export function AppMock({ t, variant = "full" }: AppMockProps) {
  const full = variant === "full";
  const causes = list<Cause>(t, "mock.causes");
  const shown = full ? causes : causes.slice(0, 1);

  return (
    <div className="app">
      <div className="app-photo">
        <Mark tone="muted" />
      </div>

      <div className="app-sheet">
        <div className="app-pad">
          <p className="app-eyebrow">{t("mock.speciesLabel")}</p>
          <p className="app-species">{t("mock.species")}</p>
          <p className="app-sci">{t("mock.sci")}</p>
          <div className="app-status">
            <Info />
            <span>{t("mock.status")}</span>
          </div>
          {full && (
            <div className="app-strip">
              {list<string>(t, "mock.strip").map((label, i) => (
                <span key={label} className={i === 0 ? "is-on" : undefined}>
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="app-section">
          <div className="app-pad">
            <p className="app-eyebrow">{t("mock.diagnosisEyebrow")}</p>
            <p className="app-title">{t("mock.diagnosisTitle")}</p>
            {full && <p className="app-hint">{t("mock.diagnosisHint")}</p>}
          </div>

          <div className="app-carousel">
            {shown.map((item) => (
              <div key={String(item.cause)} className="app-card">
                <p className="app-cause">{item.cause}</p>
                {(full ? item.blocks : item.blocks.slice(0, 1)).map((block) => (
                  <div key={String(block.label)} className="app-block">
                    <p className="app-label">{block.label}</p>
                    <p className="app-body">{block.body}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {full && (
            <div className="app-dots">
              <i className="is-on" />
              <i />
              <i />
            </div>
          )}
        </div>

        {full && (
          <>
            <div className="app-section app-pad">
              <p className="app-eyebrow">{t("mock.confirmEyebrow")}</p>
              <p className="app-title">{t("mock.confirmTitle")}</p>
              <ConfirmCard t={t} only={0} />
            </div>

            <div className="app-section app-pad">
              <p className="app-eyebrow">{t("mock.careEyebrow")}</p>
              <div className="app-care">
                {list<Care>(t, "mock.care").map((row, i) => {
                  const Icon = CARE_ICONS[i];
                  return (
                    <div key={String(row.label)} className="app-care-row">
                      <span className="app-care-icon">
                        <Icon />
                      </span>
                      <div className="app-care-texts">
                        <p className="app-label">{row.label}</p>
                        <p className="app-care-value">{row.value}</p>
                        {row.note ? <p className="app-care-note">{row.note}</p> : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="app-pad">
              <div className="app-toxic">
                <Paw />
                <div>
                  <p className="app-toxic-title">{t("mock.toxicTitle")}</p>
                  <p className="app-toxic-text">{t("mock.toxicText")}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function ConfirmCard({ t, only }: { t: T; only?: number }) {
  const confirms = list<{ cause: string; text: string }>(t, "mock.confirms");
  const shown = only === undefined ? confirms : [confirms[only]];

  return (
    <>
      {shown.map((item) => (
        <div key={String(item.cause)} className="app-confirm">
          <p className="app-confirm-cause">{item.cause}</p>
          <p>{item.text}</p>
        </div>
      ))}
    </>
  );
}
