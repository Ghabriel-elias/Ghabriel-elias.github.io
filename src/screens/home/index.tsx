import { Footer } from "@/components/Footer";
import { Topbar } from "@/components/Topbar";
import { LANGS, LOCALE_BY_LANG, type Lang } from "@/constants/languages";
import { HOME } from "@/constants/routes";
import { getT } from "@/i18n";

import { BrotinhoSection } from "./components/BrotinhoSection";
import { Closing } from "./components/Closing";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { NotList } from "./components/NotList";
import { Pricing } from "./components/Pricing";
import { Reminders } from "./components/Reminders";
import { WhyOrdered } from "./components/WhyOrdered";

export function HomeScreen({ lang }: { lang: Lang }) {
  const t = getT(LOCALE_BY_LANG[lang], "home");

  const alternates = Object.fromEntries(
    LANGS.map((other) => [other, HOME[other]]),
  ) as Record<Lang, string>;

  return (
    <>
      <Topbar lang={lang} alternates={alternates} onHome />

      <main className="page home">
        <Hero t={t} />
        <HowItWorks t={t} lang={lang} />
        <WhyOrdered t={t} />
        <Reminders t={t} />
        <BrotinhoSection t={t} />
        <NotList t={t} />
        <Pricing t={t} lang={lang} />
        <Closing t={t} lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
