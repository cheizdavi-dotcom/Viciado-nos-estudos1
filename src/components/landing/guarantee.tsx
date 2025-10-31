import { ShieldCheck } from "lucide-react";
import { PiCreditCard, PiPixLogo, PiBarcode } from "react-icons/pi";


export function Guarantee() {
  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center gap-8 rounded-lg border-2 border-primary/50 bg-background/30 p-6 sm:p-8 text-center shadow-2xl shadow-primary/10 md:flex-row md:gap-10 md:text-left">
          <div className="relative">
            <ShieldCheck className="h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 text-primary animate-pulse" />
          </div>
          <div className="flex-1">
            <h2 className="font-headline text-2xl font-bold sm:text-3xl md:text-4xl">
              Sua Satisfação ou Seu Dinheiro de Volta
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Você tem 7 dias para testar. Se não gostar, devolvemos 100% do seu dinheiro. Sem burocracia, sem enrolação. O risco é todo nosso.
            </p>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 md:justify-start text-muted-foreground">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary"/>
                    <p className="text-sm">Compra Segura</p>
                </div>
                <div className="flex items-center gap-2">
                    <PiCreditCard size={20} className="text-primary"/>
                    <p className="text-sm">Cartão</p>
                </div>
                <div className="flex items-center gap-2">
                    <PiPixLogo size={20} className="text-primary"/>
                    <p className="text-sm">PIX</p>
                </div>
                 <div className="flex items-center gap-2">
                    <PiBarcode size={20} className="text-primary"/>
                    <p className="text-sm">Boleto</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
