import { Header } from "@/components/landing/header";
import { PainPoints } from "@/components/landing/pain-points";
import { Solutions } from "@/components/landing/solutions";
import { Offer } from "@/components/landing/offer";
import { Testimonials } from "@/components/landing/testimonials";
import { Guarantee } from "@/components/landing/guarantee";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-1">
        <Header />
        <PainPoints />
        <Solutions />
        <Offer />
        <Testimonials />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
