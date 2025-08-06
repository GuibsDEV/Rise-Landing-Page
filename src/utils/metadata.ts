import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `RiseFPS - Desbloqueie seu potencial gamer`,
    description = `RiseFPS é o aplicativo desktop que otimiza seu PC Windows para máxima performance em jogos. Mais FPS, menos delay, ping otimizado. Maximize a performance do seu PC e deixe sua habilidade ser o único limite.`,
    icons = [
        {
            rel: "icon",
            url: "/icons/icon-dark.png",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            url: "/icons/icon.png",
            media: "(prefers-color-scheme: dark)",
        },
    ],
    noIndex = false,
    keywords = [
        "otimização PC jogos",
        "aumentar FPS",
        "reduzir ping",
        "input lag",
        "performance gaming",
        "otimizador Windows",
        "configs pro players",
        "gaming performance",
        "FPS booster",
        "PC optimization"
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME,
    type = "website",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://vertra-ai.vercel.app");

    return {
        metadataBase,
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
            default: title
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: "RiseFPS",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
    };
};