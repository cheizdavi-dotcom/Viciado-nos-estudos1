import { CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CountdownTimer } from './countdown-timer';

const bonuses = [
  "O Poder do Estudo Efetivo",
  "100 Técnicas para Resolver Questões de Concurso",
  "Como Manter Uma Rotina de Estudos",
  "Playlist de Foco Profundo (Lo-fi)",
];

export function Offer() {
  return (
    <section id="offer" className="bg-card py-20 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="border-2 border-primary bg-transparent shadow-2xl shadow-primary/20 overflow-hidden">
          <CardHeader className="text-center bg-background/50 p-6">
            <p className="font-headline text-sm uppercase tracking-widest text-primary flex items-center justify-center gap-2">
                <Clock className="h-5 w-5" />
                OFERTA RELÂMPAGO
            </p>
            <CardTitle className="font-headline text-4xl font-black sm:text-5xl">
              Garanta Seu Acesso Completo
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-6 flex flex-col items-center p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="flex flex-col justify-center">
                 <h4 className="font-headline text-2xl font-bold text-center">O que você recebe:</h4>
                  <ul className="mt-4 space-y-3 text-lg">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                      <span>Ebook: Como Ficar Viciado em Estudar</span>
                    </li>
                    {bonuses.map((bonus) => (
                        <li key={bonus} className="flex items-center gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{bonus}</span>
                        </li>
                    ))}
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                      <span className="font-bold">Acesso Vitalício e Atualizações</span>
                    </li>
                  </ul>
              </div>
              <div className="rounded-lg border-2 border-primary/50 bg-background/50 p-6 flex flex-col items-center justify-center">
                 <p className="text-lg text-muted-foreground">De <s className="text-destructive/80">R$39,90</s> por apenas:</p>
                <p className="my-2">
                    <span className="font-headline text-7xl font-black text-primary">R$9,99</span>
                </p>
                <p className="text-sm text-muted-foreground mb-4">(Pagamento único, acesso vitalício)</p>
                <CountdownTimer />
              </div>
            </div>
            
            <Button size="lg" className="mt-10 h-16 w-full max-w-lg px-8 font-headline text-xl tracking-wide animate-pulse">
              Garantir Meu Acesso Agora com Desconto!
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
