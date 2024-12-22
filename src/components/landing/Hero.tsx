import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export const Hero = () => {
  const { toast } = useToast();

  const handleSignup = () => {
    window.location.href = "https://app.agendaflow.shop/auth/signup";
  };

  const handleDemonstration = () => {
    window.location.href = "https://app.agendaflow.shop/auth/signup";
  };

  return (
    <div className="bg-[#0a0a0a] text-white relative">
      {/* Banner promocional */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-light-sweep"></div>
        </div>
        <div className="bg-gradient-to-r from-[#05c46b] via-[#09b36e] to-[#0be881] py-2 text-center text-sm text-white font-medium tracking-wider shadow-lg relative z-10">
          🔥 Oferta Especial de Lançamento - 30% OFF Aproveite agora!
        </div>
      </div>

      {/* Header */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[-30px]">
        <img 
          src="/lovable-uploads/logo5.PNG" 
          alt="Agenda Flow Logo" 
          className="h-96 w-auto object-contain"
        />
      </div>

      <header className="container mx-auto px-4 py-16 flex justify-between items-center relative">
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-40 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-[#1c1c1c] px-4 py-1 rounded-full text-sm mb-6">
            Gestão Inteligente para Seu Negócio
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            Automatize sua comunicação e <br />
            <span className="text-[#09b36e]">potencialize seu negócio</span>
          </h1>
          
          <p className="text-gray-400 text-lg mb-8">
            O Agenda Flow é a solução completa que transforma a gestão do seu negócio, 
            unindo agendamento, clientes, finanças e comunicação em uma única plataforma.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <button 
              onClick={handleSignup}
              className="relative overflow-hidden bg-gradient-to-r from-[#09b36e] to-[#09b36e]/80 px-8 py-3 rounded-md font-medium hover:opacity-90 group"
            >
              <span className="absolute inset-0 pointer-events-none">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-light-sweep"></span>
              </span>
              <span className="relative z-10">Criar conta gratuitamente →</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#09b36e] to-[#0be881] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              onClick={handleDemonstration}
              className="bg-[#1c1c1c] px-8 py-3 rounded-md font-medium hover:bg-[#1c1c1c]/80"
            >
              Ver Demonstração
            </button>
          </div>

          <div className="inline-block bg-[#1c1c1c] px-4 py-1 rounded-full text-sm">
            Mais de 500 negócios já transformaram sua gestão com o Agenda Flow
          </div>
        </div>
      </section>
    </div>
  );
};