import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      
      {/* CTA Section */}
      <section className="bg-primary section-padding">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Transforme a Eficiência da sua Clínica Hoje
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Junte-se a centenas de clínicas que já usam o Flow Agenda
          </p>
          <button className="bg-white text-primary button-primary hover:bg-gray-100">
            Começar Agora
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;