export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-20 border-t border-[#1c1c1c]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">AGENDA FLOW</div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforme a gestão da sua agenda com inteligência artificial.
              Aumente a produtividade e reduza custos operacionais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#09b36e]">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-[#09b36e]">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-[#09b36e]">
                Instagram
              </a>
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
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1c1c1c] mt-12 pt-8 text-center text-gray-400">
          <p> 2024 Agenda Flow. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};