import { DownloadIcon, FilterIcon, TrendingUpIcon, GaugeIcon, ActivityIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Dashboard de  <br /><span className="font-subheading italic text-red-500">performance</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Monitore em tempo real o desempenho do seu PC e veja como o RiseFPS está otimizando seus jogos.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#ef4444"
                            gradientTo="#dc2626"
                            gradientColor="rgba(239,68,68,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-red-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Performance em Tempo Real
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Monitore FPS, CPU, GPU e RAM enquanto joga para máxima performance.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">
                                                165 FPS
                                            </div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <GaugeIcon className="w-4 h-4" />
                                                +45% de melhoria
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Jogo</div>
                                            <div>FPS</div>
                                            <div>Ping</div>
                                            <div>Melhoria</div>
                                        </div>
                                        {[
                                            { name: "Valorant", fps: "165", ping: "12ms", improvement: "+45%" },
                                            { name: "CS2", fps: "240", ping: "8ms", improvement: "+38%" },
                                            { name: "Fortnite", fps: "144", ping: "15ms", improvement: "+52%" },
                                        ].map((game) => (
                                            <div key={game.name} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div>{game.name}</div>
                                                <div>{game.fps}</div>
                                                <div>{game.ping}</div>
                                                <div className="font-semibold text-green-500">{game.improvement}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#ef4444"
                            gradientTo="#dc2626"
                            gradientColor="rgba(239,68,68,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-red-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Otimização do Sistema
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Monitore recursos do sistema e veja como o RiseFPS está liberando performance.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">32GB</div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <ActivityIcon className="w-4 h-4" />
                                                RAM liberada
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Recurso</div>
                                            <div>Antes</div>
                                            <div>Depois</div>
                                            <div>Economia</div>
                                        </div>
                                        {[
                                            { resource: "RAM", before: "85%", after: "45%", savings: "-40%" },
                                            { resource: "CPU", before: "78%", after: "52%", savings: "-26%" },
                                            { resource: "Processos", before: "156", after: "89", savings: "-67" },
                                        ].map((metric) => (
                                            <div key={metric.resource} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div>{metric.resource}</div>
                                                <div>{metric.before}</div>
                                                <div>{metric.after}</div>
                                                <div className="font-semibold text-green-500">{metric.savings}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;
