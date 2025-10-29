import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroImage = PlaceHolderImages.find((img) => img.id === "hero-product-image");

export function Header() {
  return (
    <header className="relative py-20 text-center md:py-32">
      <div className="container z-10 mx-auto max-w-4xl">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Diga Adeus à Procrastinação e{" "}
          <span className="text-accent">Transforme Sua Vida!</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Aprenda a estudar com prazer e disciplina com o método que já
          transformou mais de 2.300 alunos.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" className="h-12 px-8 font-headline text-lg tracking-wide">
            Começar Minha Transformação Agora!
          </Button>
        </div>
      </div>
      <div className="container mx-auto mt-12 max-w-3xl px-4 md:mt-16">
        {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={600}
              height={400}
              data-ai-hint={heroImage.imageHint}
              className="mx-auto rounded-lg shadow-2xl"
              priority
            />
        )}
      </div>
    </header>
  );
}
