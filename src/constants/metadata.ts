import type { Metadata } from "next";

import { asset, SITE_URL } from "./site";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: asset("/favicon.svg"), type: "image/svg+xml" },
      { url: asset("/favicon.png"), sizes: "180x180", type: "image/png" },
    ],
    apple: asset("/favicon.png"),
  },
};
