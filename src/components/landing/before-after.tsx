import { X, Check } from 'lucide-react';

export function BeforeAfter() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-red-500/30 bg-card p-8 shadow-lg">
            <h3 className="font-headline text-3xl font-bold text-center text-red-400 flex items-center justify-center gap-2">
              <X className="h-8 w-8" /> ANTES
            </h3>
            <ul className="mt-6 space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span>Distração, culpa e falta de energia.</span>
              </li>
              <li className="flex items-start gap-3">
                 <span>Sempre cansado e desmotivado para começar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>Sentimento de ansiedade por procrastinar.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-primary/30 bg-card p-8 shadow-lg">
            <h3 className="font-headline text-3xl font-bold text-center text-primary flex items-center justify-center gap-2">
              <Check className="h-8 w-8" /> DEPOIS
            </h3>
            <ul className="mt-6 space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span>Clareza, rotina sólida e prazer no estudo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>Energizado e com vontade de aprender.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>Confiança para alcançar seus objetivos.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
