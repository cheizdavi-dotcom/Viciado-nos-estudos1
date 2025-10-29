import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="flex flex-col items-center gap-6 rounded-lg border border-dashed border-primary/50 p-8 text-center md:flex-row md:gap-8 md:text-left">
          <ShieldCheck className="h-24 w-24 flex-shrink-0 text-primary" />
          <div>
            <h2 className="font-headline text-2xl font-bold md:text-3xl">
              Sua Satisfação ou Seu Dinheiro de Volta
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Você tem garantia total! Se em até 7 dias você não ficar satisfeito com o material, devolvemos 100% do seu dinheiro, sem perguntas nem burocracia. O risco é todo nosso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
