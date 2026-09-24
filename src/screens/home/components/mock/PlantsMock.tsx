import { ChevronRight, Plus, Sprout } from "@/components/Icons";
import { list, type T } from "@/i18n";

const DOTS = ["dot-today", "dot-soon", "dot-far", "dot-far"];

export function PlantsMock({ t }: { t: T }) {
  const items = list<{ name: string; when: string }>(t, "plants.items");

  return (
    <div className="app-plants">
      <div className="pl-top">
        <div>
          <p className="pl-title">{t("plants.title")}</p>
          <p className="pl-count">{t("plants.count")}</p>
        </div>
        <span className="pl-circle">
          <Plus />
        </span>
      </div>

      <div className="pl-tabs">
        {list<string>(t, "plants.tabs").map((tab, i) => (
          <span key={tab} className={i === 0 ? "is-on" : undefined}>
            {tab}
          </span>
        ))}
      </div>

      <div className="pl-list">
        {items.map((item, i) => (
          <div key={String(item.name)} className="pl-card">
            <span className="pl-thumb">
              <Sprout />
            </span>
            <div className="pl-texts">
              <p className="pl-name">{item.name}</p>
              <p className="pl-meta">
                <i className={DOTS[i]} />
                <span>{item.when}</span>
              </p>
            </div>
            <span className="pl-chevron">
              <ChevronRight />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
