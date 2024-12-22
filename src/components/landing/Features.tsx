import { 
  Calendar, 
  Users, 
  DollarSign, 
  MessageCircle, 
  TrendingUp,
  BarChart2,
  FileText,
  Clock,
  Target
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agendamento Inteligente",
      description: "Calendário interativo com criação, bloqueio e filtro de agendamentos. Visualize por dia, semana e mês com cores e status personalizados.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestão Completa de Clientes",
      description: "Cadastro rápido, listagem detalhada, histórico de atendimentos e filtros avançados. Transforme leads em clientes fidelizados.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Ponto Digital",
      description: "Controle preciso de jornada de trabalho com registro digital de entrada, saída e intervalos. Geração automática de relatórios de horas trabalhadas.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Controle Financeiro Total",
      description: "Geração de orçamentos, cotações detalhadas, acompanhamento de receitas e relatórios financeiros em tempo real.",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Comunicação Integrada",
      description: "Chat ao vivo, templates de comunicação personalizados e possível integração com WhatsApp para comunicação eficiente.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Produtividade Maximizada",
      description: "Controle de jornada de trabalho, relatórios de produtividade e ferramentas que otimizam cada processo do seu negócio.",
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#1c1c1c] px-4 py-1 rounded-full text-sm text-[#09b36e] mb-4">
            🚀 Transformação Digital Completa
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Todas as Ferramentas que Seu Negócio Precisa
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            O Agenda Flow não é apenas um software, é um ecossistema completo de gestão 
            projetado para simplificar e potencializar cada aspecto do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] p-6 rounded-lg hover:bg-[#1c1c1c]/80 transition-colors"
            >
              <div className="bg-[#09b36e]/10 p-3 rounded-lg inline-block mb-4">
                <div className="text-[#09b36e]">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-[#1c1c1c] px-4 py-1 rounded-full text-sm">
            🏆 Tecnologia que transforma dados em crescimento para seu negócio
          </div>
        </div>
      </div>
    </div>
  );
};