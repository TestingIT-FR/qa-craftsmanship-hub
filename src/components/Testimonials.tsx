import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Daniel",
    role: "Manager équipe test/QA",
    company: "April",
    content: "Parti d'une feuille blanche, il a eu la responsabilité de mettre en place un framework d'automatisation des tests avec Cypress. Il a rapidement su s'adapter à notre environnement de travail agile et changeant. Son intégration rapide au sein de nos équipes a été cruciale dans le succès de cette mission. Aujourd\'hui, les tests automatisés sont devenus une composante incontournable de notre processus projet, utilisés quotidiennement par nos équipes QA, Dev et DevOps.",
    rating: 5,
    source: "Malt"
  },
  {
    name: "Nicolas",
    role: "Lead QA", 
    company: "Pass Culture",
    content: "Nous avons apprécié la collaboration avec Stéphane. Il nous a aidé à agrandir le périmètre de couverture de test de bout en bout. Il a mis en place des test E2E stables en 'CI' et il a éliminé les tests flaky au fur et à mesure.",
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
    role: "Directeur Technique", 
    company: "Soufflet",
    content: "La collaboration de Stéphane au sein de l'équipe Digital a permis d'être plus réactif et mieux organisé dans les phases de testing de nos applications Mobiles. Merci à Stéphane, d'une part pour son sérieux et sa rigueur dans les missions qu'il a accompli depuis plusieurs mois et d'autre part pour son professionnalisme avec la diffusion d'un rapport d'étonnement qui a permis à l'équipe de mieux appréhender ses faiblesses.",
    rating: 5,
    source: "Malt"
  },
  {
    name: "Youcef",
    role: "Engineering Manager",
    company: "April",
    content: "J’ai eu le plaisir de collaborer avec Stéphane sur l’automatisation des tests end to end à l’aide de Cypress. Stéphane se distingue par sa solide expertise technique, sa rigueur et son sens du service. Il a conçu et stabilisé les tests end to end couvrant l’ensemble de nos parcours, tout en proposant des solutions durables et bien structurées. Je recommande vivement Stéphane pour son professionnalisme, la qualité de ses livrables et ses qualités humaines indéniables.",
    rating: 5,
    source: "LinkedIn"
  },
  {
    name: "Ismael", 
    role: "QA developer",
    company: "April",
    content: "J'ai eu le privilège de collaborer avec Stéphane sur un projet d'automatisation des tests avec Cypress. Outre sa maîtrise technique de cette technologie, il se distingue par son sens du service, sa bienveillance et son organisation. Il possède une solide compréhension des principes de la qualité logicielle et des différents aspects de l'automatisation des tests. Stéphane a été d'une aide précieuse dans de nombreuses situations, proposant des solutions efficaces et pérennes. Son code est rigoureusement structuré. Je n'hésiterais pas une seconde à collaborer à nouveau avec Stéphane sur un futur projet, et je le recommande vivement.",
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
            Rejoignez plus de 10 clients satisfaits qui m'ont font confiance pour leurs projets QA
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;