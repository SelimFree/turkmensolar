import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { FadeIn } from "../utils/FadeIn";
import { cn } from "../../lib/utils";
import { Sun, ArrowRight, Zap } from "lucide-react";

import SliderImg1 from "../../assets/home/slider/slider_img_1.png";
import SliderImg2 from "../../assets/home/slider/slider_img_2.png";
import SliderImg3 from "../../assets/home/slider/slider_img_3.png";
import { Link } from "react-router-dom";

const SLIDER_IMAGES = [SliderImg1, SliderImg2, SliderImg3];

export function HeroBlock() {
    const { t } = useTranslation("home");
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-primary-900">

            <div className="absolute inset-0 h-full w-full">
                {SLIDER_IMAGES.map((img, index) => (
                    <div
                        key={index}
                        className={cn(
                            "absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out",
                            index === activeIndex ? "opacity-100" : "opacity-0"
                        )}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-primary-900/95 via-primary-900/80 to-primary-900/40 z-10" />

            <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="max-w-3xl lg:max-w-4xl">

                    <FadeIn direction="up" delay={0}>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
                            <Sun className="h-4 w-4 text-accent" />
                            <span className="text-xs font-bold tracking-widest text-white uppercase">
                                {t("heroBlock.badge")}
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={150}>
                        <Heading className="mb-6 text-4xl font-black leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-6xl lg:font-extrabold tracking-tight">
                            {t("heroBlock.titleStart")} {" "}
                            <span className="text-accent">{t("heroBlock.titleAccent")}</span>
                        </Heading>
                    </FadeIn>

                    <FadeIn direction="up" delay={300}>
                        <Text className="hidden sm:inline-block mb-8 text-lg leading-relaxed text-gray-200 sm:text-xl md:text-2xl font-medium lg:text-xl lg:font-normal max-w-2xl">
                            {t("heroBlock.description")}
                        </Text>
                    </FadeIn>

                    <FadeIn direction="up" delay={450}>
                        <div className="mb-10 flex flex-col gap-3 text-base md:text-lg font-bold text-gray-200 sm:flex-row sm:items-center sm:gap-x-6 lg:text-base lg:font-semibold">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-secondary shrink-0 lg:h-1.5 lg:w-1.5" />
                                <span>{t("heroBlock.feature1")}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-secondary shrink-0 lg:h-1.5 lg:w-1.5" />
                                <span>{t("heroBlock.feature2")}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-secondary shrink-0 lg:h-1.5 lg:w-1.5" />
                                <span>{t("heroBlock.feature3")}</span>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={600}>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link to="/#contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="group w-full flex items-center justify-center gap-3 bg-accent text-primary-900 hover:bg-accent-500 h-16 px-10 text-base font-bold tracking-wide uppercase rounded-lg shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer active:scale-95"
                                >
                                    {t("heroBlock.ctaPrimary")}
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link to="/#services" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="ghost"
                                    className="group w-full flex items-center justify-center gap-3 border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 h-16 px-10 text-base font-bold tracking-wide uppercase rounded-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer active:scale-95 hover:border-white/60"
                                >
                                    <Zap className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:scale-110" />
                                    {t("heroBlock.ctaSecondary",)}
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}