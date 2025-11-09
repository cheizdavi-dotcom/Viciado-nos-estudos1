'use client';
import { CheckCircle, Clock, Music4, Zap, ShieldCheck, XCircle, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { CountdownTimer } from './countdown-timer';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";


const basicFeatures = [
    {
        icon: CheckCircle,
        text: "Ebook principal 'Viciado em Estudar'",
    },
    {
        icon: XCircle,
        text: "Playlist de Foco Profundo",
        unavailable: true,
    },
    {
        icon: XCircle,
        text: "Acesso vitalício e atualizações",
        unavailable: true,
    },
]

const completeFeatures = [
    {
        icon: CheckCircle,
        text: "Ebook principal 'Viciado em Estudar'",
    },
    {
        icon: Music4,
        text: "Playlist de Foco Profundo",
    },
    {
        icon: Zap,
        text: "Acesso vitalício e atualizações",
    },
]

export function Offer() {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);

  const checkoutUrlCompleto = "https://checkout.viciadonosestudos.site/VCCL1O8SCFH0";
  const checkoutUrlBasico = "#";

  const handleBasicButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsUpsellModalOpen(true);
  }

  const handleDeclineUpsell = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (checkoutUrlBasico === '#') {
        e.preventDefault();
        alert('Por favor, configure o link de checkout para o Pacote Básico.');
    } else {
        // Deixa o Link do Next.js cuidar da navegação
        setIsUpsellModalOpen(false);
    }
  }


  return (
    <>
    <section id="offer" className="bg-card py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto">
            <p className="font-headline text-sm sm:text-base uppercase tracking-widest text-primary flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                OFERTA POR TEMPO LIMITADO
            </p>
            <h2 className="font-headline text-3xl font-black sm:text-4xl md:text-5xl mt-2">
              Escolha o Plano Perfeito Para Você
            </h2>
            <p className="text-lg text-muted-foreground pt-4">
                Ambos os pacotes foram criados para transformar seus estudos. A oferta completa termina em:
            </p>
            <div className="mt-4 flex justify-center">
              <CountdownTimer />
            </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Card Básico */}
          <Card className="border-border/70 bg-transparent flex flex-col h-full">
              <CardHeader className="text-center p-6">
                <CardTitle className="font-headline text-2xl font-bold sm:text-3xl">
                  Pacote Básico
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground pt-2">
                    Acesso direto ao método essencial para focar nos estudos.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between p-6 pt-0">
                  <div>
                    <div className="my-4 text-center">
                        <p className="font-headline text-4xl sm:text-5xl font-black text-foreground/90">R$9,90</p>
                        <p className="text-sm text-muted-foreground">(Pagamento único)</p>
                    </div>
                    <ul className="mt-6 space-y-3 text-base">
                        {basicFeatures.map((item, index) => (
                            <li key={index} className={cn("flex items-center gap-3", item.unavailable && "text-muted-foreground")}>
                            <item.icon className={cn("h-6 w-6 flex-shrink-0", item.unavailable ? "text-muted-foreground/50" : "text-primary")} />
                            <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                  </div>
                    <Button onClick={handleBasicButtonClick} size="lg" variant="outline" className="mt-8 h-14 w-full text-base sm:text-lg">
                        Comprar Pacote Básico
                    </Button>
              </CardContent>
          </Card>

          {/* Card Completo - Destaque */}
          <Card className="border-2 border-primary bg-background/50 shadow-2xl shadow-primary/20 relative flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-primary text-primary-foreground font-headline text-sm tracking-wider uppercase px-4 py-1 rounded-full">
                    Mais Popular
                </div>
            </div>
              <CardHeader className="text-center p-6 pt-10">
                <CardTitle className="font-headline text-2xl font-bold sm:text-3xl">
                  Pacote Completo
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground pt-2">
                    A solução definitiva com todos os bônus para acelerar seus resultados.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between p-6 pt-0">
                  <div>
                    <div className="my-4 text-center">
                        <p className="font-headline text-4xl sm:text-5xl font-black text-primary">R$14,90</p>
                        <p className="text-sm text-muted-foreground">De <s className="text-destructive/90">R$49,90</s> (Pagamento único)</p>
                    </div>
                    <ul className="mt-6 space-y-3 text-base">
                        {completeFeatures.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                            <item.icon className="h-6 w-6 flex-shrink-0 text-primary" />
                            <span>{item.text}</span>
                            </li>
))}
                    </ul>
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-8">
                    <Link href={checkoutUrlCompleto} target="_blank" className="w-full">
                        <Button size="lg" className="h-14 w-full font-headline text-base sm:text-lg tracking-wide animate-pulse">
                            Quero o Pacote Completo!
                        </Button>
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <ShieldCheck className="h-5 w-5 text-primary" /> Garantia total de 7 dias.
                    </div>
                  </div>
              </CardContent>
          </Card>

        </div>
      </div>
    </section>

    <Dialog open={isUpsellModalOpen} onOpenChange={setIsUpsellModalOpen}>
      <DialogContent className="sm:max-w-md bg-card border-primary/50 text-center p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl sm:text-4xl font-black text-center mx-auto flex items-center gap-2">
            😮 Espere!
          </DialogTitle>
          <DialogDescription className="text-base sm:text-lg text-muted-foreground pt-2">
            Por apenas <span className="font-bold text-accent">R$ 4,90 a mais</span>, você pode levar o Pacote Completo com todos os bônus e acesso vitalício!
          </DialogDescription>
        </DialogHeader>
        <div className="my-4 sm:my-6 space-y-3 text-left w-fit mx-auto text-sm sm:text-base">
            <div className="flex items-center gap-3 text-foreground">
                <Music4 className="h-6 w-6 text-primary" />
                <span>Playlist de Foco Profundo</span>
            </div>
             <div className="flex items-center gap-3 text-foreground">
                <Zap className="h-6 w-6 text-primary" />
                <span>Acesso vitalício e atualizações</span>
            </div>
             <div className="flex items-center gap-3 text-foreground">
                <Star className="h-6 w-6 text-primary" />
                <span>Resultados mais rápidos e duradouros</span>
            </div>
        </div>
        <DialogFooter className="flex-col gap-2 sm:gap-3">
          <Link href={checkoutUrlCompleto} target="_blank" className="w-full">
            <Button type="button" size="lg" className="h-auto py-3 w-full font-headline text-base sm:text-lg animate-pulse whitespace-normal" onClick={() => setIsUpsellModalOpen(false)}>
              Sim, Atualizar para o Pacote Completo!
              <ArrowRight className="ml-2 h-5 w-5 hidden sm:inline" />
            </Button>
          </Link>
          <Link href={checkoutUrlBasico} target={checkoutUrlBasico === '#' ? '_self' : '_blank'} legacyBehavior passHref>
            <Button asChild type="button" variant="ghost" size="lg" className="w-full text-muted-foreground hover:bg-transparent hover:text-muted-foreground/80">
                <a onClick={(e) => {
                  if (checkoutUrlBasico === '#') {
                    e.preventDefault();
                    alert('Por favor, configure o link de checkout para o Pacote Básico.');
                  } else {
                    setIsUpsellModalOpen(false);
                  }
                }}>Não, obrigado, quero apenas o pacote básico.</a>
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  );
}
