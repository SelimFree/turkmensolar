import { useTranslation } from "react-i18next";
import { TrendingDown, ShieldCheck, Award, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";
import { Image } from "../ui/Image";
import { FadeIn } from "../utils/FadeIn";

import OpportunityImg from "../../assets/home/market_opportunity_img.png";

const DEMAND_STATS = [
    { id: "safe", icon: ShieldCheck },
    { id: "cost", icon: TrendingDown },
    { id: "quality", icon: Award },
];

export function MarketOpportunityBlock() {
  const { t } = useTranslation("home");

  return (
    <section id="market-opportunity" className="w-full bg-white py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">

          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            <FadeIn direction="up" delay={0}>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-1.5 text-[10px] font-bold tracking-widest text-secondary uppercase border border-secondary-100">
                <TrendingDown className="h-3.5 w-3.5" /> {t("opportunityBlock.badge")}
              </span>
            </FadeIn>

            <FadeIn direction="up" delay={150}>
              <Heading className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl mb-6">
                {t("opportunityBlock.titleStart")}{" "}
                <span className="text-secondary">{t("opportunityBlock.titleAccent")}</span>
              </Heading>
            </FadeIn>

            <FadeIn direction="up" delay={300}>
              <div className="space-y-6 max-w-2xl mb-8">
                <Text className="text-base sm:text-lg leading-relaxed text-foreground">
                  {t("opportunityBlock.description")}
                </Text>

                <div className="flex flex-col gap-4 mt-6 text-left">
                  {DEMAND_STATS.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.id} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background text-secondary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-bold text-accent text-lg mr-2">
                            {t(`opportunityBlock.stats.${stat.id}.value`)}
                          </span>
                          <span className="font-bold text-primary mr-1">
                            {t(`opportunityBlock.stats.${stat.id}.label`)}
                          </span>
                          <span className="text-foreground text-sm">
                            {t(`opportunityBlock.stats.${stat.id}.desc`)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={450} className="w-full">
              <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full sm:w-auto">
                <Link to="/#contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-800 h-14 px-8 text-sm font-bold tracking-wide uppercase rounded-lg shadow-lg shadow-primary-900/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    {t("opportunityBlock.ctaButton")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative w-full flex items-center justify-center mt-10 lg:mt-0">
            <FadeIn direction="up" delay={450} className="w-full">
              <div className="group relative w-full max-w-md lg:max-w-none aspect-4/5 md:aspect-square h-120 lg:h-135">

                <div className="hidden md:block absolute inset-4 -bottom-4 -left-4 bg-background rounded-lg -z-10 transition-transform duration-500 group-hover:translate-x-1" />

                <Image
                  src={OpportunityImg}
                  alt={t("opportunityBlock.imageAlt")}
                  containerClassName="w-full h-full rounded-lg shadow-xl border border-gray-100"
                  className="transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />

                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-lg border border-gray-100 shadow-xl flex items-center gap-4 z-10">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                     <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                      {t("opportunityBlock.metricLabel")}
                    </span>
                    <span className="text-sm font-extrabold text-primary block truncate">
                      {t("opportunityBlock.metricValue")}
                    </span>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}