import type { Metadata } from "next";

import { DocScreen } from "@/screens/doc";
import { docMetadata } from "@/screens/doc/metadata";

export const metadata: Metadata = docMetadata("es", "refund");

export default function Page() {
  return <DocScreen lang="es" doc="refund" />;
}
