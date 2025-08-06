import {
    GaugeIcon,
    WifiIcon,
    MousePointerIcon,
    SettingsIcon,
    UsersIcon
} from "lucide-react";

export const FEATURES = [
    {
        title: "Mais FPS Estável",
        description: "Otimizações avançadas no sistema para garantir FPS consistente e sem quedas durante o jogo",
        icon: GaugeIcon,
        image: "/images/feature-one.svg",
    },
    {
        title: "Ping Otimizado",
        description: "Configurações de rede avançadas para reduzir latência e melhorar conexão com servidores",
        icon: WifiIcon,
        image: "/images/feature-two.svg",
    },
    {
        title: "Zero Input Lag",
        description: "Rise Input integrado reduz drasticamente o delay entre seus comandos e a resposta no jogo",
        icon: MousePointerIcon,
        image: "/images/feature-three.svg",
    },
    {
        title: "Configs Pro Players",
        description: "Aplique configurações usadas por jogadores profissionais com apenas um clique",
        icon: SettingsIcon,
        image: "/images/feature-four.svg",
    },
    {
        title: "Comunidade Exclusiva",
        description: "Acesso ao Discord com +5.600 gamers, eventos, sorteios e suporte da comunidade",
        icon: UsersIcon,
        image: "/images/feature-five.svg",
    }
]