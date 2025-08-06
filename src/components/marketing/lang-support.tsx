import { MessageSquareIcon, TrophyIcon, UsersIcon, GiftIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";

const CommunitySection = () => {
    return (
        <div className="relative flex flex-col items-center justify-center max-w-5xl py-20 mx-auto">
            <Container>
                <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mb-6">
                        Comunidade exclusiva com <span className="font-subheading italic text-red-500">+5.600</span> gamers
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mb-8">
                        Entre no Discord oficial do RiseFPS e conecte-se com outros gamers
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto relative w-full">

                <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-red-400 to-red-500 rounded-full -rotate-12 blur-[10rem] -z-10"></div>

                <Container delay={0.1}>
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-background/40">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                            <MessageSquareIcon className="size-6 text-red-500" />
                        </div>
                        <h3 className="font-semibold mb-2">Suporte Rápido</h3>
                        <p className="text-sm text-muted-foreground">
                            Tire dúvidas e receba ajuda da comunidade 24/7
                        </p>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-background/40">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                            <TrophyIcon className="size-6 text-red-500" />
                        </div>
                        <h3 className="font-semibold mb-2">Eventos</h3>
                        <p className="text-sm text-muted-foreground">
                            Participe de campeonatos e eventos exclusivos
                        </p>
                    </div>
                </Container>

                <Container delay={0.3}>
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-background/40">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                            <GiftIcon className="size-6 text-red-500" />
                        </div>
                        <h3 className="font-semibold mb-2">Sorteios</h3>
                        <p className="text-sm text-muted-foreground">
                            Concorra a periféricos e jogos toda semana
                        </p>
                    </div>
                </Container>

                <Container delay={0.4}>
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-background/40">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                            <UsersIcon className="size-6 text-red-500" />
                        </div>
                        <h3 className="font-semibold mb-2">Networking</h3>
                        <p className="text-sm text-muted-foreground">
                            Conecte-se com outros gamers e forme equipes
                        </p>
                    </div>
                </Container>
            </div>

            <Container delay={0.5}>
                <div className="mt-12 text-center">
                    <Button className="bg-red-600 hover:bg-red-700" size="lg">
                        Entrar na Comunidade
                    </Button>
                </div>
            </Container>
        </div>
    )
};

export default CommunitySection
