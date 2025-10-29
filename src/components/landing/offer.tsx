import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const bonuses = [
  "O Poder do Estudo Efetivo",
  "100 Técnicas para Resolver Questões de Concurso",
  "Como Manter Uma Rotina de Estudos",
];

export function Offer() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="border-2 border-primary bg-background/50 shadow-2xl shadow-primary/20">
          <CardHeader className="text-center">
            <p className="font-headline text-lg text-primary">OFERTA ESPECIAL</p>
            <CardTitle className="font-headline text-3xl font-bold sm:text-4xl">
              Garanta Seu Acesso Completo
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-6 flex flex-col items-center">
            <div className="w-full max-w-md">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-headline text-xl font-bold text-center">Como Ficar Viciado em Estudar</h4>
                <p className="text-center text-muted-foreground mt-2">O material completo para sua transformação.</p>
              </div>
              <p className="my-6 text-center font-headline text-2xl">+</p>
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-headline text-xl font-bold text-center">Bônus Exclusivos</h4>
                <ul className="mt-4 space-y-3">
                  {bonuses.map((bonus) => (
                    <li key={bonus} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="my-10 text-center">
              <p className="text-lg text-muted-foreground">De <s className="text-destructive/80">R$39,90</s> por apenas:</p>
              <p className="my-2">
                <span className="font-headline text-6xl font-bold text-primary">R$9,99</span>
              </p>
              <p className="text-sm text-muted-foreground">(Pagamento único)</p>
            </div>

            <Button size="lg" className="h-14 w-full max-w-md px-8 font-headline text-xl tracking-wide">
              Garantir Meu Acesso com Desconto
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
