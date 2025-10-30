"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

const heroImage = PlaceHolderImages.find((img) => img.id === "hero-product-image");

export function Header() {
  return (
    <header className="relative py-20 text-center md:py-32 overflow-hidden">
       <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-background to-black/50"></div>
        <div className="absolute top-[-20%] left-[-20%] h-[50%] w-[50%] rounded-full bg-primary/10 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-20%] h-[50%] w-[50%] rounded-full bg-primary/10 blur-[120px]"></div>
      </div>
      <div className="container z-10 mx-auto max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-headline text-4xl font-black tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Acabe com a Procrastinação e Descubra Como Estudar com <span className="text-primary">Foco e Prazer</span> Todos os Dias!
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          O método que já transformou <span className="font-bold text-accent">mais de 2.300 alunos</span> e vai te ensinar a dominar seu tempo, seu foco e sua motivação.
        </motion.p>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }} 
            className="mt-10 flex justify-center">
          <Button size="lg" className="h-14 min-w-56 px-8 font-headline text-lg tracking-wide shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/40">
            Quero Começar Minha Transformação Agora!
          </Button>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="container mx-auto mt-16 max-w-3xl px-4 md:mt-20">
        {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={800}
              height={600}
              data-ai-hint={heroImage.imageHint}
              className="mx-auto rounded-lg shadow-2xl"
              priority
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(0, 255, 127, 0.15))'
              }}
            />
        )}
      </motion.div>
    </header>
  );
}
