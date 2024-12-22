export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-20 border-t border-[#1c1c1c]">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="col-span-1 relative">
            <img 
              src="/lovable-uploads/logo5.PNG" 
              alt="Agenda Flow Logo" 
              className="absolute top-[-50px] left-0 h-40 w-auto"
            />
            <div className="pt-16">
              <p className="text-gray-400">
                Transforme a gestão da sua agenda com inteligência artificial. Aumente a produtividade e reduza custos operacionais.
              </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#09b36e]">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#09b36e]">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#09b36e]">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#09b36e]">
                  Integrações
                </a>
              </li>
            </ul>
          </div>

          {/* Links de Suporte */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#09b36e]">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#09b36e]">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#09b36e]">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#09b36e]">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.instagram.com/agendaflow/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-[#09b36e] transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-gray-400"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1c1c1c] mt-12 pt-8 text-center text-gray-400">
          <img 
            src="/lovable-uploads/logo5.PNG" 
            alt="Agenda Flow Logo" 
            className="h-20 w-auto mx-auto mb-4"
          />
          <p className="text-sm mb-2">
            7 dias de garantia incondicional de devolução do dinheiro
          </p>
          <p className="mb-4"> 2024 Agenda Flow. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};