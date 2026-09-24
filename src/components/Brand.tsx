import { Link } from "@/components/Link";

import { Mark } from "@/components/Icons";
import type { Lang } from "@/constants/languages";
import { HOME } from "@/constants/routes";

type BrandProps = {
  lang: Lang;
  label: string;
};

export function Brand({ lang, label }: BrandProps) {
  return (
    <Link className="brand" href={HOME[lang]} aria-label={label}>
      <Mark />
      <span>Broto</span>
    </Link>
  );
}
