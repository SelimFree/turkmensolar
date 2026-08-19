import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HeroBlock } from "../components/blocks/HeroBlock";
import { MarketStatsBlock } from "../components/blocks/MarketStatsBlock";
import { MarketOpportunityBlock } from "../components/blocks/MarketOpportunityBlock";
import { ServicesBlock } from "../components/blocks/ServicesBlock";
import { PartnersBlock } from "../components/blocks/PartnersBlock";
import { ContactBlock } from "../components/blocks/ContacBlock";

export default function HomePage() {

  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.home"));

  return (
    <div className="flex flex-col">
      <HeroBlock />
      <MarketStatsBlock/>
      <MarketOpportunityBlock/>
      <ServicesBlock/>
      <PartnersBlock/>
      <ContactBlock/>
    </div>
  );
}