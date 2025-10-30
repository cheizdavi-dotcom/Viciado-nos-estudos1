import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Logo className="h-10 w-10" />
          <p className="text-sm text-muted-foreground">
            © 2024 — Como Ficar Viciado em Estudar. <br /> Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="#" className="transition-colors hover:text-foreground">
            Termos de Uso
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Política de Privacidade
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Suporte
          </Link>
        </div>
      </div>
    </footer>
  );
}
