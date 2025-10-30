import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "Em quanto tempo verei resultados?",
        answer: "Muitos alunos relatam uma mudança de mentalidade e melhora no foco já na primeira semana. Os resultados dependem da sua dedicação, mas o método foi desenhado para gerar ganhos rápidos e sustentáveis.",
    },
    {
        question: "Funciona mesmo pra quem tem TDAH?",
        answer: "Sim! As técnicas são baseadas em neurociência e ajudam especialmente quem tem dificuldade de foco.",
    },
    {
        question: "Posso estudar mesmo tendo pouco tempo livre?",
        answer: "Com certeza! O método foca em otimizar a qualidade do seu estudo, não apenas a quantidade. Você aprenderá a aproveitar ao máximo cada minuto disponível.",
    },
    {
        question: "Posso pagar com Pix, cartão ou boleto?",
        answer: "Sim, a plataforma de pagamento aceita as principais formas de pagamento, incluindo Pix, cartão de crédito (parcelado) e boleto bancário.",
    },
    {
        question: "Recebo o material na hora?",
        answer: "Sim! Assim que o pagamento for confirmado, você receberá um e-mail com o acesso imediato e vitalício a todo o material.",
    },
    {
        question: "Posso acessar pelo celular?",
        answer: "Sim, todo o conteúdo é 100% online e compatível com qualquer dispositivo.",
    },
];

export function Faq() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ainda tem dúvidas? A gente te ajuda a decidir.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
              <AccordionTrigger className="text-left text-lg font-semibold transition-all hover:text-primary hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
