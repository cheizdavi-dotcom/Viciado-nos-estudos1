'use client';
import { AlertTriangle } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const painPoints = [
  "Você tenta estudar, mas o celular e os pensamentos <span class='text-accent font-bold'>não param de te distrair?</span>",
  "Sente que o <span class='text-accent font-bold'>foco desaparece</span> em poucos minutos, mesmo querendo aprender?",
  "Já tentou várias técnicas, mas <span class='text-accent font-bold'>nada parece durar</span> mais que uma semana?",
  "A <span class='text-accent font-bold'>culpa e a ansiedade</span> aparecem de novo, e o ciclo recomeça?",
];

export function PainPoints() {
  const handleScrollToOffer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const offerSection = document.getElementById("offer");
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <ul className="space-y-6">
          {painPoints.map((point, index) => (
             <motion.li 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-background/30">
              <AlertTriangle className="mt-1 h-8 w-8 flex-shrink-0 text-accent" />
              <p className="text-lg text-foreground/90 sm:text-xl" dangerouslySetInnerHTML={{ __html: point }}></p>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mt-10 text-center font-headline text-xl font-semibold text-foreground md:text-2xl">
            Se você se identificou, este método é <span className="text-primary">exatamente o que você precisa</span>.
          </p>
          <div className="mt-8 flex justify-center">
             <Button variant="default" size="lg" className="h-14 px-8 font-headline text-base sm:text-lg tracking-wide shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/40" onClick={handleScrollToOffer}>
                Sim, Preciso Mudar Isso Agora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
