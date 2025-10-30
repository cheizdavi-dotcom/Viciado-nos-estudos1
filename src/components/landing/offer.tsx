import { CheckCircle2, Clock, Music4, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CountdownTimer } from './countdown-timer';

const included = [
    {
        icon: CheckCircle2,
        text: "Ebook principal",
    },
    {
        icon: CheckCircle2,
        text: "Vídeos e técnicas práticas",
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
            <CardTitle className="font-headline text-4xl font-black sm:text-5xl">
              Garanta Seu Acesso Completo
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground pt-2">
                Por apenas R$9,99 (pagamento único, acesso vitalício), você recebe um pacote completo para dominar o foco e eliminar a procrastinação.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-6 flex flex-col items-center p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="flex flex-col justify-center items-center md:items-start">
                 <h4 className="font-headline text-2xl font-bold text-center md:text-left">O que você recebe:</h4>
                  <ul className="mt-4 space-y-3 text-lg">
                    {included.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                        <item.icon className="h-6 w-6 flex-shrink-0 text-primary" />
                        <span>{item.text}</span>
                        </li>
                    ))}
                  </ul>
              </div>
              <div className="rounded-lg border-2 border-primary/50 bg-background/50 p-6 flex flex-col items-center justify-center">
                 <p className="text-lg text-muted-foreground">Oferta válida até hoje às:</p>
                <p className="my-2">
                    <span className="font-headline text-7xl font-black text-primary">23:59</span>
                </p>
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ShieldCheck className="h-5 w-5 text-primary" /> Garantia total de 7 dias.
                    </div>
                    <CountdownTimer />
                </div>
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
