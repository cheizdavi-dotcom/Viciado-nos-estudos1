import { CheckCircle, Clock, Music4, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CountdownTimer } from './countdown-timer';

const included = [
    {
        icon: CheckCircle,
        text: "Ebook principal",
    },
    {
        icon: Music4,
        text: "Playlist de Foco Profundo",
    },
    {
        icon: Zap,
        text: "Acesso vitalício",
    },
    {
        icon: Zap,
        text: "Atualizações futuras",
    },
]

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
            <CardTitle className="font-headline text-3xl font-black sm:text-5xl">
              Garanta Seu Acesso Completo
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground pt-2 sm:text-lg">
                Receba um pacote completo para dominar o foco e eliminar a procrastinação.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-6 flex flex-col items-center p-4 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="flex flex-col justify-center items-center md:items-start">
                 <h4 className="font-headline text-2xl font-bold text-center md:text-left">O que você recebe:</h4>
                  <ul className="mt-4 space-y-3 text-base sm:text-lg">
                    {included.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                        <item.icon className="h-6 w-6 flex-shrink-0 text-primary" />
                        <span>{item.text}</span>
                        </li>
                    ))}
                  </ul>
              </div>
              <div className="rounded-lg border-2 border-primary/50 bg-background/50 p-6 flex flex-col items-center justify-center">
                 <p className="text-base text-foreground/90 sm:text-lg">Oferta válida até hoje às 23:59</p>
                
                 <div className="my-4 text-center">
                    <p className="text-base sm:text-lg text-foreground/90">
                        De <s className="text-destructive/90">R$49,90</s> por apenas:
                    </p>
                    <p className="font-headline text-5xl sm:text-6xl font-black text-primary">R$14,90</p>
                    <p className="text-sm text-foreground/90">(Pagamento único)</p>
                 </div>

                <div className="flex flex-col items-center gap-2">
                    <CountdownTimer />
                    <div className="flex items-center gap-2 text-sm text-foreground/90 mt-2">
                        <ShieldCheck className="h-5 w-5 text-primary" /> Garantia total de 7 dias.
                    </div>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="mt-10 h-16 w-full max-w-lg px-8 font-headline text-lg sm:text-xl tracking-wide animate-pulse">
              Garantir Meu Acesso Agora com Desconto!
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
