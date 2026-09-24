import type { Metadata } from "next";

import { ConfirmScreen } from "@/screens/auth/confirm";

export const metadata: Metadata = {
  title: "Conta confirmada · Broto",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ConfirmScreen />;
}
