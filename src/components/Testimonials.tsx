import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Thomas",
    role: "Lead Developer",
    company: "Tech Startup",
    content: "Stéphane a transformé notre approche des tests automatisés. Son expertise en Cypress nous a permis de réduire drastiquement le temps de validation de nos releases.",
    rating: 5,
    source: "LinkedIn"
  },
  {
    name: "Marie",
    role: "Product Manager",
    company: "E-commerce",
    content: "Excellent travail sur la mise en place de notre stratégie QA. Stéphane est très professionnel et ses conseils ont été précieux pour améliorer la qualité de nos livraisons.",
    rating: 5,
    source: "Malt"
  },
  {
    name: "Pierre",
    role: "CTO",
    company: "Fintech",
    content: "Je recommande vivement Stéphane pour ses compétences techniques exceptionnelles en automatisation. Il a su s'adapter rapidement à notre stack technique complexe.",
    rating: 5,
    source: "LinkedIn"
  },
  {
    name: "Sophie",
    role: "Tech Lead",
    company: "SaaS",
    content: "Collaboration parfaite avec Stéphane sur l'implémentation de Playwright. Son expertise et sa pédagogie ont permis à toute l'équipe de monter en compétences.",
    rating: 5,
    source: "Malt"
  },
  {
    name: "Laurent",
    role: "DevOps Engineer",
    company: "Scale-up",
    content: "Stéphane a mis en place une infrastructure de tests robuste qui nous fait gagner un temps précieux. Son approche méthodique est remarquable.",
    rating: 5,
    source: "LinkedIn"
  },
  {
    name: "Camille",
    role: "Frontend Developer",
    company: "Média",
    content: "Formation très enrichissante dispensée par Stéphane sur les bonnes pratiques de test. Il sait transmettre son savoir avec clarté et patience.",
    rating: 5,
    source: "Malt"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les retours de mes clients sur mes services de QA et d'automatisation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-card-foreground/90 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                  <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {testimonial.source}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Rejoignez plus de 50+ clients satisfaits qui me font confiance pour leurs projets QA
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;