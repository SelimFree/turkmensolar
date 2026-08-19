import { useTranslation } from "react-i18next";
import { Sun, Clock, Zap, Sparkles } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { FadeIn } from "../utils/FadeIn";

const POTENTIAL_STATS = [
    { id: "days", icon: Sun },
    { id: "hours", icon: Clock },
    { id: "capacity", icon: Zap },
];

export function MarketStatsBlock() {
    const { t } = useTranslation("home");

    return (
        <section id="market-stats" className="w-full bg-background py-20 sm:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mb-16 text-center mx-auto max-w-3xl">
                    <FadeIn direction="up" delay={0}>
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[10px] font-bold tracking-widest text-secondary uppercase border border-gray-200 shadow-sm">
                            <Sparkles className="h-3.5 w-3.5" /> {t("marketStatsBlock.potentialBadge")}
                        </span>
                    </FadeIn>
                    <FadeIn direction="up" delay={150}>
                        <Heading className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl">
                            {t("marketStatsBlock.potentialHeading")}
                        </Heading>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-8">
                    {POTENTIAL_STATS.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <FadeIn key={stat.id} direction="up" delay={200 + index * 100}>
                                <div className="h-full flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-md hover:border-secondary-200 group">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background text-secondary mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-secondary-50">
                                        <Icon className="h-6 w-6" strokeWidth={2} />
                                    </div>
                                    <span className="block text-4xl font-black text-accent mb-2">
                                        {t(`marketStatsBlock.potentialStats.${stat.id}.value`)}
                                    </span>
                                    <Heading className="text-lg font-bold text-primary mb-3">
                                        {t(`marketStatsBlock.potentialStats.${stat.id}.label`)}
                                    </Heading>
                                    <Text className="text-sm leading-relaxed text-foreground">
                                        {t(`marketStatsBlock.potentialStats.${stat.id}.desc`)}
                                    </Text>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
                
                <FadeIn direction="up" delay={500}>
                    <Text variant="muted" className="text-center text-xs text-gray-500 mb-24">
                        {t("marketStatsBlock.sourceDisclaimer")}
                    </Text>
                </FadeIn>

                <FadeIn direction="up" delay={500}>
                    <div className="relative w-full overflow-hidden rounded-2xl bg-primary p-8 sm:p-12 border border-primary-800 shadow-2xl flex flex-col md:flex-row items-start justify-between gap-10 max-w-7xl mx-auto">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
                        
                        <div className="flex-1 z-10 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0">
                            <Heading className="text-2xl font-bold text-white mb-4">
                                {t("marketStatsBlock.edgeTitle")}
                            </Heading>
                            <Text className="text-gray-300">
                                {t("marketStatsBlock.edgeDesc")}
                            </Text>
                        </div>

                        <div className="flex-1 z-10 pl-0 md:pl-8">
                            <Heading className="text-2xl font-bold text-white mb-4">
                                {t("marketStatsBlock.alignmentTitle")}
                            </Heading>
                            <Text className="text-gray-300">
                                {t("marketStatsBlock.alignmentDesc")}
                            </Text>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}