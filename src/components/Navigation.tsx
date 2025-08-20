import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Mail, ExternalLink } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#experience", label: "Expérience" },
    { href: "#skills", label: "Compétences" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm shadow-soft border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/9107669c-5ad1-4bab-884c-73e9dd8fe892.png" 
                alt="Logo de l'entreprise"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className={`font-semibold ${isScrolled ? 'text-foreground' : 'text-white'}`}>Stéphane Colson</div>
              <div className={`text-xs ${isScrolled ? 'text-muted-foreground' : 'text-white/70'}`}>QA Expert</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'} transition-colors`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Badge className="bg-green-500/20 text-green-700 border-green-500/30">
              ✅ Disponible
            </Badge>
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="shadow-tech"
            >
              <Mail className="w-4 h-4 mr-2" />
              Me contacter
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://www.malt.fr/profile/stephanecolson', '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-4">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Badge className="bg-green-500/20 text-green-700 border-green-500/30 w-fit">
                  ✅ Disponible
                </Badge>
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Me contacter
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://www.malt.fr/profile/stephanecolson', '_blank')}
                  className="w-full"
                >
                  Voir profil Malt
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;