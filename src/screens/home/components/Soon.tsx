import type { ReactNode } from "react";

import { Clock } from "@/components/Icons";

export function Soon({ children }: { children: ReactNode }) {
  return (
    <p className="soon">
      <Clock />
      {children}
    </p>
  );
}
