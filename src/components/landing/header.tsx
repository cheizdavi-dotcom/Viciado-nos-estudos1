"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";
import Script from "next/script";

const heroImage = PlaceHolderImages.find((img) => img.id === "hero-product-image");

export function Header() {
  const handleScrollToOffer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const offerSection = document.getElementById("offer");
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="relative py-12 text-center md:py-24 lg:pt-32 lg:pb-24 overflow-hidden">
       <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-20%] h-[50%] w-[50%] rounded-full bg-primary/10 blur-[150px] opacity-60"></div>
        <div className="absolute bottom-[-20%] right-[-20%] h-[50%] w-[50%] rounded-full bg-primary/10 blur-[150px] opacity-60"></div>
      </div>
      <div className="container z-10 mx-auto max-w-4xl px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-headline text-3xl font-black tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Pare de Procrastinar e Descubra Como Estudar com <span className="text-primary">Foco, Disciplina e Prazer</span> Todos os Dias.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground">
          Método já aplicado em <span className="font-bold text-accent">mais de 2.300 alunos</span> e baseado em neurociência e técnicas comportamentais.
        </motion.p>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="container mx-auto mt-10 max-w-3xl px-4 md:mt-16">
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

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="container mx-auto mt-12 max-w-4xl px-4 md:mt-16"
        >
            <div className="aspect-video w-full overflow-hidden rounded-lg border-2 border-primary/30 shadow-2xl shadow-primary/20">
                <div className="wistia_responsive_padding" style={{padding: "56.25% 0 0 0", position: "relative"}}>
                    <div className="wistia_responsive_wrapper" style={{height: "100%", left: 0, position: "absolute", top: 0, width: "100%"}}>
                        <iframe
                            src="https://fast.wistia.net/embed/iframe/kx7w0r8aft?web_component=true&seo=true"
                            title="1116 Video"
                            allow="autoplay; fullscreen"
                            frameBorder="0"
                            scrolling="no"
                            className="wistia_embed"
                            name="wistia_embed"
                            width="100%"
                            height="100%"
                        ></iframe>
                    </div>
                </div>
                <Script src="https://fast.wistia.net/player.js" async></Script>
            </div>
        </motion.div>
    </header>
  );
}
