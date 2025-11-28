import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Logo } from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A14] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-gray-400 mt-4">
              Aprenda a criar sites profissionais em minutos usando o poder da Inteligência Artificial.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
              <SocialIcon icon={<Youtube size={20} />} />
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <FooterLink href="#hero" text="Início" />
              <FooterLink href="#about" text="Sobre" />
              <FooterLink href="#benefits" text="Benefícios" />
              <FooterLink href="#testimonials" text="Depoimentos" />
              <FooterLink href="#faq" text="FAQ" />
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="Termos de Uso" />
              <FooterLink href="#" text="Política de Privacidade" />
              <FooterLink href="#" text="Reembolso" />
              <FooterLink href="#" text="Cookies" />
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contato</h3>
            <p className="text-gray-400">
              Estamos sempre prontos para ajudar com qualquer dúvida sobre o curso.
            </p>
            <a href="mailto:vinhagabriel@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors mt-2 inline-block">
              vinhagabriel@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-500">
            © 2025 SitePRO por @gabrielovigna. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return (
    <a 
      href="#" 
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-400 hover:text-white transition-all"
    >
      {icon}
    </a>
  );
};

const FooterLink: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-400 hover:text-blue-400 transition-colors"
      >
        {text}
      </a>
    </li>
  );
};

export default Footer;