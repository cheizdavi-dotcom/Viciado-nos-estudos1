import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "+1200 Técnicas e Estratégias",
    description: "Um arsenal completo contra a procrastinação para você nunca mais ficar sem saber o que fazer.",
  },
  {
    title: "Dicas Práticas e Neurocientíficas",
    description: "Métodos baseados em ciência para otimizar seu cérebro e criar hábitos de estudo poderosos.",
  },
  {
    title: "Aulas e Vídeos Educativos",
    description: "Conteúdo dinâmico e direto ao ponto para acelerar seu aprendizado e motivação.",
  },
  {
    title: "Ebooks e Palestras Bônus",
    description: "Materiais extras sobre foco, disciplina e resolução de questões para complementar sua jornada.",
  },
  {
    title: "Suporte Direto por E-mail",
    description: "Tire suas dúvidas e receba orientação personalizada sempre que precisar.",
  },
];

export function Solutions() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            O Método Que Vai <span className="text-primary">Virar a Chave</span> da Sua Rotina de Estudos
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div key={solution.title} className="flex flex-col items-start gap-3 rounded-lg border bg-card p-6">
              <CheckCircle2 className="h-8 w-8 text-primary" />
              <h3 className="font-headline text-xl font-bold">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Button size="lg" className="h-12 px-8 font-headline text-lg tracking-wide">
            Quero Superar a Procrastinação!
          </Button>
        </div>
      </div>
    </section>
  );
}
