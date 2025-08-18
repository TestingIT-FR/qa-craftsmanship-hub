import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Daniel",
    role: "GIE April Courtage",
    company: "April Digital",
    content: "Parti d'une feuille blanche, il a eu la responsabilité de mettre en place un framework d'automatisation des tests avec Cypress. Il a rapidement su s'adapter à notre environnement de travail agile et changeant.",
    rating: 5,
    source: "Malt"
  },
  {
    name: "Nicolas",
    role: "Pass Culture - Pôle Tech", 
    company: "Pass Culture",
    content: "Nous avons apprécié la collaboration avec Stéphane. Il nous a aidé à agrandir le périmètre de couverture de test de bout en bout. Il a mis en place des test E2E stables en 'CI' et il à éliminé les tests flaky au fur et à mesure.",
    rating: 5,
    source: "Malt"
  },
  {
    name: "Valentin",
    role: "Actiondesk",
    company: "Actiondesk", 
    content: "Stéphane a fait une mission ponctuelle avec nous pour auditer l'état de nos tests e2e. Il nous a donné de très bon insights qui vont nous permettre de mieux les structurer et de progresser plus rapidement!",
    rating: 5,
    source: "Malt"
  },
  {
    name: "Pascal",
    role: "Efalia",
    company: "Efalia",
    content: "Nous avons collaboré quelques jours avec Stéphane et son travail très professionnel a donné pleine et entière satisfaction ! Nous ne pouvons que le recommandé !",
    rating: 5,
    source: "Malt"
  },
  {
    name: "Xavier",
    role: "JSoufflet", 
    company: "Soufflet",
    content: "La collaboration de Stéphane au sein de l'équipe Digital a permis d'être plus réactif et mieux organisé dans les phases de testing de nos applications Mobiles. Son expérience et ses qualités de testeur ont été cruciales.",
    rating: 5,
    source: "Malt"
  },
  {
    name: "Équipe",
    role: "Compte supprimé",
    company: "Startup Tech",
    content: "Stéphane nous a accompagné dans la mise en place de tests automatiques end-to-end avec cypress. Il a rédigé les premiers tests et formé l'équipe technique à l'utilisation de cypress. Nous sommes très satisfaits du travail réalisé.",
    rating: 5,
    source: "Malt"
  },
  {
    name: "Youcef",
    role: "Tech Lead",
    company: "Client Malt",
    content: "Collaboration très professionnelle avec Stéphane sur notre projet d'automatisation. Sa maîtrise technique et sa capacité d'adaptation nous ont permis d'atteindre nos objectifs rapidement.",
    rating: 5,
    source: "Malt"
  },
  {
    name: "Ismael", 
    role: "Product Manager",
    company: "Startup",
    content: "Stéphane a apporté une réelle valeur ajoutée à notre équipe QA. Son expertise en automatisation des tests nous a fait gagner un temps précieux dans nos cycles de développement.",
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