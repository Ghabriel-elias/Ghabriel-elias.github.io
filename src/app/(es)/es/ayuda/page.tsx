import type { Metadata } from "next";

import { DocScreen } from "@/screens/doc";
import { docMetadata } from "@/screens/doc/metadata";

export const metadata: Metadata = docMetadata("es", "help");

export default function Page() {
  return <DocScreen lang="es" doc="help" />;
}
