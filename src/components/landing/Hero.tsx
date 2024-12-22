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
      <div className="bg-gradient-to-r from-[#09b36e] to-[#09b36e]/80 py-2 px-4 text-center text-sm text-white">
        Transforme a gestão do seu negócio com tecnologia de ponta!
      </div>

      {/* Header */}
      <div className="absolute top-8 left-0 right-0 flex justify-center z-10">
        <img 
          src="/lovable-uploads/logo5.PNG" 
          alt="Agenda Flow Logo" 
          className="h-64 w-auto object-contain"
        />
      </div>

      <header className="container mx-auto px-4 py-16 flex justify-between items-center relative">
        <div className="absolute right-4 top-4">
          <button 
            onClick={handleDemonstration}
            className="bg-[#09b36e] hover:bg-[#09b36e]/90 text-white px-6 py-2 rounded-md"
          >
            Acessar Sistema →
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-40 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-[#1c1c1c] px-4 py-1 rounded-full text-sm mb-6">
            Gestão Inteligente para Seu Negócio
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            Automatize, Gerencie e <span className="text-[#09b36e]">Potencialize</span> Seu Negócio
          </h1>
          
          <p className="text-gray-400 text-lg mb-8">
            O Agenda Flow é a solução completa que transforma a gestão do seu negócio, 
            unindo agendamento, clientes, finanças e comunicação em uma única plataforma.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <button 
              onClick={handleSignup}
              className="bg-gradient-to-r from-[#09b36e] to-[#09b36e]/80 px-8 py-3 rounded-md font-medium hover:opacity-90"
            >
              Criar conta gratuitamente →
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