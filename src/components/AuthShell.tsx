import { Link } from "@/components/Link";
import type { ReactNode } from "react";

import { Mark } from "@/components/Icons";
import { HOME } from "@/constants/routes";

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <Link className="brand" href={HOME.pt} aria-label="Broto">
            <Mark />
            <span>Broto</span>
          </Link>
        </div>
      </header>

      <main className="auth">
        <div className="auth-card">{children}</div>
      </main>
    </>
  );
}
