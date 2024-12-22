import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Start",
      price: "R$ 97",
      description: "Plano Básico para Profissionais",
      paymentLink: "https://pay.kirvano.com/e0782cdc-0a6e-4fc6-a1c3-034078a869d2",
      features: [
        "Agenda completa",
        "Até 30 clientes cadastrados",
        "Até 40 agendamentos/mês",
        "Mensagens automáticas básicas:",
        "- Confirmação de agendamento",
        "- Lembrete 1 dia antes",
        "2 templates de mensagem personalizáveis",
        "1 profissional/colaborador",
        "Relatórios básicos",
        "Suporte via email",
      ],
    },
    {
      name: "PRO",
      price: "R$ 197",
      description: "Plano Completo para Crescimento",
      paymentLink: "https://pay.kirvano.com/10f1395f-a27c-4a1f-aca3-e6c8bfec2eb2",
      features: [
        "Todas as funcionalidades do Plano Start",
        "Clientes ilimitados",
        "Agendamentos ilimitados",
        "Chat do WhatsApp integrado na plataforma",
        "Mensagens automáticas avançadas:",
        "- Pré e pós-procedimento",
        "- Aniversário",
        "- Reativação de clientes inativos",
        "- Promoções",
        "Templates ilimitados",
        "Até 5 profissionais/colaboradores",
        "Relatórios avançados:",
        "- Taxa de retorno",
        "- Clientes mais frequentes",
        "- Horários mais populares",
        "- Faturamento por serviço",
        "Suporte prioritário via WhatsApp",
        "Exportação de relatórios",
      ],
      popular: true,
      highlights: [
        "Chat integrado economiza tempo",
        "Mais automações = menos trabalho manual", 
        "Relatórios avançados para tomada de decisão",
        "Suporte prioritário",
        "Múltiplos profissionais = crescimento do negócio"
      ]
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#1c1c1c] px-4 py-1 rounded-full text-sm text-[#09b36e] mb-4">
            💎 Planos Especiais
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Escolha o Plano Ideal para Seu Negócio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos planos flexíveis que crescem junto com sua empresa. 
            Todos os planos incluem atualizações gratuitas e suporte técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-[#1c1c1c] rounded-lg p-8 relative ${
                plan.popular ? "border-2 border-[#09b36e]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#09b36e] text-white text-sm py-1 px-3 rounded-full">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">
                  {plan.price}<span className="text-sm font-normal text-gray-400">/mês</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-[#09b36e] mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.highlights && (
                <div className="bg-[#09b36e]/10 p-4 rounded-lg mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-[#09b36e]">
                    Diferenciais do Plano PRO
                  </h4>
                  <ul className="space-y-2">
                    {plan.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center text-gray-300">
                        <span className="mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a 
                href={plan.paymentLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#09b36e] to-[#09b36e]/80 text-white hover:opacity-90"
                    : "bg-[#2c2c2c] text-white hover:bg-[#2c2c2c]/80"
                }`}
              >
                Começar Agora →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-[#1c1c1c] px-4 py-1 rounded-full text-sm">
            🔒 14 dias de garantia incondicional de devolução do dinheiro
          </div>
        </div>
      </div>
    </div>
  );
};