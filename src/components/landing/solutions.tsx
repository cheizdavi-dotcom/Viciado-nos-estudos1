'use client';

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "+1200 Técnicas e Estratégias",
    description: "Um arsenal completo contra a procrastinação para você nunca mais ficar sem saber o que fazer.",
    icon: CheckCircle2,
  },
  {
    title: "Dicas Práticas e Neurocientíficas",
    description: "Métodos baseados em ciência para otimizar seu cérebro e criar hábitos de estudo poderosos.",
     icon: CheckCircle2,
  },
  {
    title: "Aulas e Vídeos Educativos",
    description: "Conteúdo dinâmico e direto ao ponto para acelerar seu aprendizado e motivação.",
     icon: CheckCircle2,
  },
  {
    title: "Ebooks e Palestras Bônus",
    description: "Materiais extras sobre foco, disciplina e resolução de questões para complementar sua jornada.",
     icon: CheckCircle2,
  },
  {
    title: "Suporte Direto por E-mail",
    description: "Tire suas dúvidas e receba orientação personalizada sempre que precisar.",
     icon: CheckCircle2,
  },
   {
    title: "Comunidade Exclusiva",
    description: "Conecte-se com outros alunos, compartilhe experiências e mantenha a motivação em alta.",
    icon: CheckCircle2,
  },
];

export function Solutions() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            O Método Cientificamente Comprovado Que Vai Fazer Você <span className="text-primary">Virar a Chave</span> da Procrastinação
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Baseado em neurociência e mais de 1.200 técnicas testadas, este método vai te ajudar a criar hábitos de estudo poderosos.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div 
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start gap-4 rounded-lg border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <solution.icon className="h-10 w-10 text-primary" />
              <h3 className="font-headline text-2xl font-bold">{solution.title}</h3>
              <p className="text-muted-foreground flex-1">{solution.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Button size="lg" className="h-14 px-8 font-headline text-lg tracking-wide">
            Quero Superar a Procrastinação!
          </Button>
        </div>
      </div>
    </section>
  );
}
