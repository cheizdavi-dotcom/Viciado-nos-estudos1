'use client';

import { Book, Video, BrainCircuit, Star, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "+1200 Técnicas e Estratégias",
    description: "Um arsenal completo contra a procrastinação para você nunca mais ficar sem saber o que fazer.",
    icon: Book,
  },
  {
    title: "Dicas Neurocientíficas",
    description: "Métodos baseados em ciência para otimizar seu cérebro e criar hábitos de estudo poderosos.",
     icon: BrainCircuit,
  },
  {
    title: "Aulas e Vídeos Educativos",
    description: "Conteúdo dinâmico e direto ao ponto para acelerar seu aprendizado e motivação.",
     icon: Video,
  },
  {
    title: "Ebooks e Palestras Bônus",
    description: "Materiais extras sobre foco, disciplina e resolução de questões para complementar sua jornada.",
     icon: Star,
  },
  {
    title: "Suporte Direto por E-mail",
    description: "Tire suas dúvidas e receba orientação personalizada sempre que precisar.",
     icon: Mail,
     featured: true,
  },
   {
    title: "Comunidade Exclusiva",
    description: "Conecte-se com outros alunos, compartilhe experiências e mantenha a motivação em alta.",
    icon: Users,
  },
];

export function Solutions() {
  const handleScrollToOffer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const offerSection = document.getElementById("offer");
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            O Método Cientificamente Comprovado Que Vai Fazer Você <span className="text-primary">Virar a Chave</span> da Procrastinação
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Baseado em princípios da neurociência e psicologia cognitiva, o método ensina como transformar procrastinação em foco através de hábitos simples e comprovados.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div 
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                    "flex flex-col items-start gap-4 rounded-lg border border-primary/30 bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1",
                    
                )}>
              <solution.icon className="h-10 w-10 text-primary" />
              <h3 className="font-headline text-xl font-bold">{solution.title}</h3>
              <p className="text-muted-foreground flex-1">{solution.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Button variant="default" size="lg" className="h-14 px-8 font-headline text-lg tracking-wide" onClick={handleScrollToOffer}>
            Quero Superar a Procrastinação!
          </Button>
        </div>
      </div>
    </section>
  );
}
