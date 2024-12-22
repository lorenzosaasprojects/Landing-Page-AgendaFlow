import { 
  Calendar, 
  Users, 
  Clock, 
  DollarSign, 
  MessageCircle, 
  BarChart2, 
  FileText, 
  TrendingUp, 
  Target
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-[#09b36e]" />,
      title: "Agendamento Inteligente",
      description: "Calendário interativo com criação, bloqueio e filtro de agendamentos. Visualize por dia, semana e mês com cores e status personalizados.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#09b36e]" />,
      title: "Gestão Completa de Clientes",
      description: "Automatize mensagens de aniversário, lembretes de consulta e follow-ups com templates personalizados. Mantenha seus clientes engajados com comunicação inteligente.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#09b36e]" />,
      title: "Ponto Digital",
      description: "Controle preciso de jornada de trabalho com registro digital de entrada, saída e intervalos. Geração automática de relatórios de horas trabalhadas.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#09b36e]" />,
      title: "Controle Financeiro Total",
      description: "Envio de orçamentos inteligentes com controle completo de parcelas pendentes e pagas. Acompanhe seu fluxo financeiro de forma simples e eficiente.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#09b36e]" />,
      title: "Comunicação Integrada",
      description: "Chat ao vivo, templates de comunicação personalizados e possível integração com WhatsApp para comunicação eficiente.",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-[#09b36e]" />,
      title: "Produtividade Maximizada",
      description: "Dashboards inteligentes e análise de performance em tempo real. Tome decisões baseadas em dados e otimize seus resultados.",
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Automatize sua Comunicação e Gestão
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sistema inteligente que automatiza suas mensagens e simplifica a gestão do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] p-6 rounded-xl hover:bg-[#1c1c1c]/80 transition-colors"
            >
              <div className="w-12 h-12 bg-[#09b36e]/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};