import { useTranslation } from "react-i18next";
import { Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";
import { FadeIn } from "../utils/FadeIn";

export function ContactBlock() {
    const { t } = useTranslation("home");

    return (
        <section id="contact" className="w-full bg-background py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                <div className="max-w-3xl mx-auto text-center">
                    
                    <FadeIn direction="up" delay={0}>
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[10px] font-bold tracking-widest text-secondary uppercase border border-gray-200 shadow-sm">
                            <MessageSquare className="h-3.5 w-3.5" /> {t("contactBlock.badge")}
                        </span>
                    </FadeIn>

                    <FadeIn direction="up" delay={150}>
                        <Heading className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl mb-6">
                            {t("contactBlock.headingStart")}{" "}
                            <span className="text-accent">{t("contactBlock.headingAccent")}</span>
                        </Heading>
                    </FadeIn>

                    <FadeIn direction="up" delay={300}>
                        <Text className="text-lg text-foreground mb-12 max-w-xl mx-auto">
                            {t("contactBlock.description")}
                        </Text>
                    </FadeIn>

                    <FadeIn direction="up" delay={450}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            
                            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-gray-200 shadow-sm hover:bg-white hover:border-secondary-200 transition-all duration-300 hover:shadow-md group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background text-secondary mb-4 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t("contactBlock.contactInfo.emailTitle")}</span>
                                <a href={`mailto:${t("contactBlock.contactInfo.email")}`} className="text-base font-bold text-primary hover:text-secondary transition-colors">
                                    {t("contactBlock.contactInfo.email")}
                                </a>
                            </div>

                            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-gray-200 shadow-sm hover:bg-white hover:border-secondary-200 transition-all duration-300 hover:shadow-md group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background text-secondary mb-4 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t("contactBlock.contactInfo.locationTitle")}</span>
                                <span className="text-base font-bold text-primary">
                                    {t("contactBlock.contactInfo.location")}
                                </span>
                            </div>

                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={600}>
                        <div className="inline-block">
                            <a href={`mailto:${t("contactBlock.contactInfo.email")}`}>
                                <Button className="group bg-accent text-primary-900 hover:bg-accent-500 h-14 px-10 font-bold tracking-wide uppercase rounded-lg shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                                    {t("contactBlock.submitButton")}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </a>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}