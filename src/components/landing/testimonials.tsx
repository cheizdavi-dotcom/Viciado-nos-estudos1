'use client';
import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Matheus Nunes",
    text: "Consegui finalmente estudar com consistência. Valeu cada centavo! O método é direto ao ponto e funciona.",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-matheus"),
  },
  {
    name: "Otávio Mesquita",
    text: "Me ajudou muito, estava sem rumo. Agora tenho disciplina e foco para passar no meu concurso. Recomendo demais!",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-otavio"),
  },
  {
    name: "Júlia Almeida",
    text: "As técnicas são práticas e fáceis de aplicar. Em uma semana minha rotina já era outra! Parece mágica.",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-julia"),
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Veja o que nossos <span className="text-accent">2.347 alunos</span> dizem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A transformação deles pode ser a sua também.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
             <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
            >
                <Card className="flex flex-col h-full bg-card/50 border-border/50 shadow-lg hover:shadow-primary/10 transition-shadow">
                <CardHeader className="flex-row items-center gap-4">
                    {testimonial.image && (
                        <Image
                        src={testimonial.image.imageUrl}
                        alt={testimonial.image.description}
                        width={56}
                        height={56}
                        data-ai-hint={testimonial.image.imageHint}
                        className="h-14 w-14 rounded-full object-cover"
                        />
                    )}
                    <div className="flex flex-col">
                    <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                    <div className="mt-1 flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                    </div>
                    </div>
                </CardHeader>
                <CardContent className="flex-1">
                    <blockquote className="italic text-muted-foreground text-base">
                    “{testimonial.text}”
                    </blockquote>
                </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
