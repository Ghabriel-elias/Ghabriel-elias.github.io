import type { Metadata } from "next";

import { DocScreen } from "@/screens/doc";
import { docMetadata } from "@/screens/doc/metadata";

export const metadata: Metadata = docMetadata("en", "help");

export default function Page() {
  return <DocScreen lang="en" doc="help" />;
}
