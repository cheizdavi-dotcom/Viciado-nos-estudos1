import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "Matheus Nunes",
    text: "Consegui finalmente estudar com consistência. Valeu cada centavo!",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-matheus"),
  },
  {
    name: "Otávio Mesquita",
    text: "Me ajudou muito, estava sem rumo. Agora tenho disciplina e foco para passar no meu concurso.",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-otavio"),
  },
  {
    name: "Júlia Almeida",
    text: "As técnicas são práticas e fáceis de aplicar. Em uma semana minha rotina já era outra!",
    image: PlaceHolderImages.find((img) => img.id === "testimonial-julia"),
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mais de <span className="text-accent">2.300 Alunos</span> Satisfeitos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Veja o que eles estão dizendo sobre o método.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                {testimonial.image && (
                    <Image
                      src={testimonial.image.imageUrl}
                      alt={testimonial.image.description}
                      width={56}
                      height={56}
                      data-ai-hint={testimonial.image.imageHint}
                      className="h-14 w-14 rounded-full"
                    />
                )}
                <div className="flex flex-col">
                  <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                  <div className="mt-1 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <blockquote className="italic text-muted-foreground">
                  “{testimonial.text}”
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
