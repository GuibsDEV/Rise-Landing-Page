import Container from "../global/container";
import Images from "../global/images";

const Companies = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 mt-16 overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-2xl lg:text-4xl font-medium text-center">
                        Mais de <span className="font-subheading italic text-red-500">2.000</span> gamers confiam no RiseFPS
                    </h4>
                </div>
            </Container>

            <Container delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16">
                    <div className="flex flex-col items-center text-center">
                        <div className="text-4xl font-bold text-red-500">+2.000</div>
                        <div className="text-sm text-muted-foreground">Clientes Pagos</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="text-4xl font-bold text-red-500">+5.600</div>
                        <div className="text-sm text-muted-foreground">Membros no Discord</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="text-4xl font-bold text-red-500">97%</div>
                        <div className="text-sm text-muted-foreground">Satisfação</div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Companies
