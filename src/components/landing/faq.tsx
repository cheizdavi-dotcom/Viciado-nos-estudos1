import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Recebo o material na hora?",
    answer: "Sim! Assim que o pagamento for confirmado, você receberá um e-mail com o acesso imediato a todo o material.",
  },
  {
    question: "Funciona mesmo pra quem tem TDAH?",
    answer: "Sim. O método inclui técnicas de foco e organização que são especialmente úteis para pessoas com TDAH, ajudando a criar uma estrutura e a gerenciar a atenção.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Com certeza! Todo o material é responsivo e pode ser acessado de qualquer dispositivo: celular, tablet ou computador.",
  },
  {
    question: "O pagamento é seguro?",
    answer: "Sim, 100% seguro. O pagamento é processado por uma das maiores plataformas de produtos digitais do mundo, utilizando criptografia de ponta para proteger seus dados.",
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
            Ainda tem dúvidas? A gente te ajuda.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
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
