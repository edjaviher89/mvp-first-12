import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoUtec from '@/assets/logo-utec.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoUtec} alt="UTEC Logo" className="h-10 sm:h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hackathon')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Hackathon
            </button>
            <button 
              onClick={() => scrollToSection('speakers')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Speakers
            </button>
            <button 
              onClick={() => scrollToSection('agenda')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Agenda
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="hero"
              size="lg"
              asChild
            >
              <a 
                href="https://admin.eventplus.app/eventInfoThree?eventId=556168"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscríbete ahora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hackathon')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Hackathon
              </button>
              <button 
                onClick={() => scrollToSection('speakers')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Speakers
              </button>
              <button 
                onClick={() => scrollToSection('agenda')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Agenda
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                FAQ
              </button>
              <Button 
                variant="hero"
                size="lg"
                asChild
                className="w-full mt-4"
              >
                <a 
                  href="https://admin.eventplus.app/eventInfoThree?eventId=556168"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscríbete ahora
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;