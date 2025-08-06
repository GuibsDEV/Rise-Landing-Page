import { CheckIcon, PlayIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";

const Integration = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Como o RiseFPS <br /><span className="font-subheading italic text-red-500">funciona</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        3 passos simples para desbloquear o máximo potencial do seu PC
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Container delay={0.1}>
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-background/40">
                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                            <span className="text-2xl font-bold text-red-500">1</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Baixe e Instale</h3>
                        <p className="text-muted-foreground text-sm">
                            Download rápido e instalação automática. Compatível com Windows 10 e 11.
                        </p>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-background/40">
                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                            <span className="text-2xl font-bold text-red-500">2</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Ative a Otimização</h3>
                        <p className="text-muted-foreground text-sm">
                            Um clique para aplicar todas as otimizações e configurações profissionais.
                        </p>
                    </div>
                </Container>

                <Container delay={0.3}>
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-background/40">
                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                            <span className="text-2xl font-bold text-red-500">3</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Jogue Melhor</h3>
                        <p className="text-muted-foreground text-sm">
                            Sinta a diferença imediatamente: mais FPS, menos delay, melhor performance.
                        </p>
                    </div>
                </Container>
            </div>

            <Container delay={0.4}>
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 border border-red-500/20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">
                                    Veja o RiseFPS em ação
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Assista como o RiseFPS transforma a performance do seu PC em tempo real.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="size-5 text-green-500" />
                                        <span className="text-sm">Otimização em tempo real</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="size-5 text-green-500" />
                                        <span className="text-sm">Interface simples e intuitiva</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="size-5 text-green-500" />
                                        <span className="text-sm">Resultados imediatos</span>
                                    </li>
                                </ul>
                                <Button className="bg-red-600 hover:bg-red-700">
                                    <PlayIcon className="size-4 mr-2" />
                                    Assistir Demo
                                </Button>
                            </div>
                            <div className="relative">
                                <div className="aspect-video bg-background/50 rounded-lg border border-border/50 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <PlayIcon className="size-8 text-red-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </div>
    );
};

export default Integration;