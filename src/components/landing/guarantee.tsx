import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center gap-8 rounded-lg border-2 border-primary/50 bg-background/30 p-8 text-center shadow-2xl shadow-primary/10 md:flex-row md:gap-10 md:text-left">
          <div className="relative">
            <ShieldCheck className="h-32 w-32 flex-shrink-0 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Sua Satisfação ou Seu Dinheiro de Volta
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Você tem 7 dias para testar. Se não gostar, devolvemos 100% do seu dinheiro. Sem burocracia, sem enrolação. O risco é todo nosso.
            </p>
            <div className="mt-6 flex justify-center gap-4 md:justify-start">
                <p className="text-sm text-muted-foreground">Compra Segura</p>
                <p className="text-sm text-muted-foreground">SSL Criptografado</p>
                <p className="text-sm text-muted-foreground">Acesso Imediato</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
