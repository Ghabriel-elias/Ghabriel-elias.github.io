import { Dash } from "@/components/Icons";
import { list, type T } from "@/i18n";

type Not = { title: string; text: string };

export function NotList({ t }: { t: T }) {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t("nots.eyebrow")}</p>
          <h2>{t("nots.title")}</h2>
        </div>

        <div className="nots">
          {list<Not>(t, "nots.items").map((item) => (
            <div key={String(item.title)} className="not">
              <i>
                <Dash />
              </i>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
