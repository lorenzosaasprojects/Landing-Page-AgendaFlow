import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  const handleSignup = () => {
    window.location.href = "https://app.agendaflow.shop/auth/signup";
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      
      {/* CTA Section */}
      <section className="relative bg-[#0a0a0a] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#09b36e]/20 to-[#09b36e]/10 opacity-50 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-block bg-[#1c1c1c] px-4 py-1 rounded-full text-sm text-[#09b36e] mb-4">
              🚀 Transformação Digital
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Transforme a Eficiência do seu Negócio Hoje
            </h2>
            <p className="text-lg mb-10 text-gray-400 max-w-xl mx-auto">
              Junte-se a centenas de empreendedores que já estão revolucionando 
              sua gestão com o Agenda Flow
            </p>
            <button 
              onClick={handleSignup}
              className="bg-gradient-to-r from-[#09b36e] to-[#09b36e]/80 px-10 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-[#09b36e]/30"
            >
              Começar Gratuitamente
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;