import { useTranslation } from "react-i18next";
import { Users, ShieldCheck, Zap, Award, Truck } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { FadeIn } from "../utils/FadeIn";

import LogoLongi from "../../assets/home/logos/longi.png";
import LogoJinko from "../../assets/home/logos/jinko.png";
import LogoHuawei from "../../assets/home/logos/huawei.png";

const PARTNERS = [
    { id: "longi", name: "Longi", logo: LogoLongi },
    { id: "jinko", name: "Jinko", logo: LogoJinko },
    { id: "huawei", name: "Huawei", logo: LogoHuawei },
];

const PILLARS = [
    { id: "dealership", icon: ShieldCheck },
    { id: "performance", icon: Zap },
    { id: "reliability", icon: Award },
    { id: "deployment", icon: Truck },
];

export function PartnersBlock() {
    const { t } = useTranslation("home");
    const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

    return (
        <section id="our-partners" className="w-full bg-white py-20 sm:py-28 relative border-t border-gray-100 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                <div className="mb-12 text-center md:mb-16">
                    <FadeIn direction="up" delay={0}>
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-1.5 text-[10px] font-bold tracking-widest text-secondary uppercase shadow-sm border border-gray-200">
                            <Users className="h-3.5 w-3.5 text-secondary" />{" "}
                            {t("partnersBlock.badge")}
                        </span>
                    </FadeIn>

                    <FadeIn direction="up" delay={150}>
                        <Heading className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl">
                            {t("partnersBlock.headingStart")}{" "}
                            <span className="text-secondary">
                                {t("partnersBlock.headingAccent")}
                            </span>
                        </Heading>
                    </FadeIn>

                    <FadeIn direction="up" delay={250}>
                        <Text className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                            {t("partnersBlock.description")}
                        </Text>
                    </FadeIn>
                </div>

                <FadeIn direction="up" delay={300}>
                    <div className="relative mx-auto max-w-5xl group mb-20">
                        <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

                        <div className="flex overflow-hidden w-full py-6">
                            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                                {duplicatedPartners.map((partner, index) => (
                                    <div key={`${partner.id}-${index}`} className="flex shrink-0 items-center justify-center w-40 sm:w-56 mx-4 sm:mx-8">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-h-12 sm:max-h-16 w-auto object-contain grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
                    {PILLARS.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <FadeIn key={pillar.id} direction="up" delay={400 + (index * 100)}>
                                <div className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-secondary-200 transition-all duration-300 hover:shadow-md group">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        <Icon className="h-5 w-5" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <Heading level={4} className="text-lg font-bold text-primary mb-2">
                                            {t(`partnersBlock.pillars.${pillar.id}.title`)}
                                        </Heading>
                                        <Text className="text-sm text-foreground leading-relaxed">
                                            {t(`partnersBlock.pillars.${pillar.id}.description`)}
                                        </Text>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}