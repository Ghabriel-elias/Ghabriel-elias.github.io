import type { Metadata } from "next";

import { HomeScreen } from "@/screens/home";
import { homeMetadata } from "@/screens/home/metadata";

export const metadata: Metadata = homeMetadata("pt");

export default function Page() {
  return <HomeScreen lang="pt" />;
}
