import type { Metadata } from "next";

import { DocScreen } from "@/screens/doc";
import { docMetadata } from "@/screens/doc/metadata";

export const metadata: Metadata = docMetadata("pt", "terms");

export default function Page() {
  return <DocScreen lang="pt" doc="terms" />;
}
