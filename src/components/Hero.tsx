import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail } from "lucide-react";
import qaHeroImage from "@/assets/qa-automation-hero.jpg";
import stephanePortrait from "@/assets/stephane-profile-real.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Content */}
        <div className="text-white space-y-8">
          <div className="space-y-4">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Expert QA & Automatisation
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Stéphane Colson
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 font-medium">
              QA | Automatisation | Cypress 🤖 | Playwright 🤖
            </p>
          </div>
          
          <p className="text-lg text-white/80 leading-relaxed max-w-xl">
            Plus de 20 ans d'expérience dans l'automatisation de tests. 
            Je vous aide à mettre en place des stratégies de test efficaces 
            avec Cypress, Playwright et les dernières technologies.
          </p>
          
          <div className="flex items-center gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-sm text-white/70">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">56</div>
              <div className="text-sm text-white/70">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white/70">Taux de satisfaction</div>
            </div>
          </div>
        </div>
        
        {/* Visual */}
        <div className="relative">
          <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-tech">
            <img 
              src={qaHeroImage} 
              alt="QA Automation Dashboard" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Profile card floating */}
          <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-tech max-w-xs">
            <div className="flex items-center gap-4">
              <img 
                src={stephanePortrait} 
                alt="Stéphane Colson" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-primary">Stéphane Colson</h3>
                <p className="text-sm text-muted-foreground">QA Expert</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;