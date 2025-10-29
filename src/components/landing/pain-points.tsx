import { AlertTriangle } from "lucide-react";

const painPoints = [
  "Você tenta estudar, mas sempre acaba se distraindo?",
  "Sente que o cansaço e a falta de foco dominam seus dias?",
  "Já tentou várias técnicas, mas nenhuma funcionou de verdade?",
  "Sente culpa por não conseguir manter uma rotina?",
];

export function PainPoints() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <ul className="space-y-6">
          {painPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-4">
              <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
              <p className="text-lg text-foreground md:text-xl">{point}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center font-headline text-xl font-semibold text-foreground md:text-2xl">
          Se você respondeu <span className="text-accent">SIM</span> para uma ou mais dessas perguntas, este material foi feito pra você.
        </p>
      </div>
    </section>
  );
}
