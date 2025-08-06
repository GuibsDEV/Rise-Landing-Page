"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import Particles from "../ui/particles";

const CTA = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container className="py-20 max-w-6xl mx-auto">
                <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
                    <Particles
                        refresh
                        ease={80}
                        quantity={80}
                        color="#d4d4d4"
                        className="hidden lg:block absolute inset-0 z-0"
                    />
                    <Particles
                        refresh
                        ease={80}
                        quantity={35}
                        color="#d4d4d4"
                        className="block lg:hidden absolute inset-0 z-0"
                    />

                    <motion.div
                        className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
                        style={{
                            background: 'conic-gradient(from 0deg at 50% 50%, #ef4444 0deg, #dc2626 180deg, #b91c1c 360deg)',
                        }}
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium !leading-snug">
                        Pronto para desbloquear <br /> <span className="font-subheading italic text-red-500">seu potencial</span>?
                    </h2>
                    <p className="text-sm md:text-lg text-center text-accent-foreground/80 max-w-2xl mx-auto mt-4">
                        Junte-se a mais de 2.000 gamers que já melhoraram sua performance. <span className="hidden lg:inline">Baixe agora e sinta a diferença no primeiro jogo.</span>
                    </p>
                    <Link href="#" className="mt-8">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700">
                            Baixar RiseFPS Agora
                        </Button>
                    </Link>
                    <p className="text-xs text-muted-foreground mt-2">
                        Oferta especial de lançamento • Por tempo limitado
                    </p>
                </div>
            </Container>
        </div>
    )
};

export default CTA
