import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Document } from "@/components/Document";
import { baseMetadata } from "@/constants/metadata";

export const metadata: Metadata = baseMetadata;

export default function Layout({ children }: { children: ReactNode }) {
  return <Document lang="en">{children}</Document>;
}
