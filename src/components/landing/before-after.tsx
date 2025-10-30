import { XCircle, CheckCircle } from 'lucide-react';

export function BeforeAfter() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-red-500/30 bg-card p-8 shadow-lg">
            <h3 className="font-headline text-3xl font-bold text-center text-red-400 flex items-center justify-center gap-2">
              <XCircle className="h-8 w-8" /> ANTES
            </h3>
            <ul className="mt-6 space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-400 shrink-0"></span>
                <span>Distraído e sem foco, não conseguia completar uma tarefa.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-400 shrink-0"></span>
                <span>Sempre cansado e desmotivado para começar a estudar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-400 shrink-0"></span>
                <span>Sentimento de culpa e ansiedade por procrastinar.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-primary/30 bg-card p-8 shadow-lg">
            <h3 className="font-headline text-3xl font-bold text-center text-primary flex items-center justify-center gap-2">
              <CheckCircle className="h-8 w-8" /> DEPOIS
            </h3>
            <ul className="mt-6 space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Disciplinado, com horas de estudo focado e produtivo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Energizado e com prazer em aprender e evoluir.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Confiança e tranquilidade para alcançar qualquer objetivo.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
