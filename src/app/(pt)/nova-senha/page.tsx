import type { Metadata } from "next";

import { ResetScreen } from "@/screens/auth/reset";

export const metadata: Metadata = {
  title: "Nova senha · Broto",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ResetScreen />;
}
