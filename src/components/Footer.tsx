import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail, Github, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold">
                SC
              </div>
              <div>
                <div className="font-semibold">Stéphane Colson</div>
                <div className="text-sm text-primary-foreground/80">Expert QA & Automatisation</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Plus de 20 ans d'expérience dans l'automatisation de tests avec Cypress, 
              Playwright et les dernières technologies QA.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Liens utiles</h3>
            <div className="space-y-3">
              <a 
                href="https://www.malt.fr/profile/stephanecolson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-white transition-colors"
              >
                Profil Malt
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://www.linkedin.com/in/stephanecolson/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-white transition-colors"
              >
                LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://github.com/StephaneColson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-white transition-colors"
              >
                GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                Lyon, France
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                stephane@example.com
              </div>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                ✅ Disponible pour missions
              </Badge>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/60">
            © 2025 Stéphane Colson. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/StephaneColson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/stephanecolson/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:stephane@example.com"
              className="text-primary-foreground/60 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;