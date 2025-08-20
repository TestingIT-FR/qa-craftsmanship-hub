import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TestTube2, 
  Cog, 
  Users, 
  Target, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const services = [
  {
    icon: TestTube2,
    title: "Stratégie de Test",
    description: "Conception et mise en place de stratégies de test adaptées à vos besoins métier",
    features: ["Audit de l'existant", "Plan de test complet", "Processus optimisés"],
    color: "text-blue-500"
  },
  {
    icon: Cog,
    title: "Automatisation",
    description: "Développement de tests automatisés avec Cypress, Playwright et autres outils modernes",
    features: ["Tests end-to-end", "Tests d'API", "CI/CD intégration"],
    color: "text-purple-500"
  },
  {
    icon: Users,
    title: "Coaching d'équipe",
    description: "Formation et accompagnement de vos équipes de testeurs",
    features: ["Formation pratique", "Bonnes pratiques", "Montée en compétences"],
    color: "text-green-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4">Mes Services</Badge>
          <h2 className="text-4xl font-bold mb-6">Comment je peux vous aider</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fort de plus de 20 ans d'expérience, je vous accompagne dans tous vos projets 
            de qualité logicielle et d'automatisation des tests.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-2 bg-card-gradient border border-primary/10">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-tech-gradient-soft rounded-2xl p-8 text-center">
          <Target className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Un projet spécifique en tête ?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Que ce soit pour une mission courte ou longue, en équipe ou en solo, 
            discutons de votre projet pour trouver la meilleure approche.
          </p>
          <Button size="lg" className="shadow-tech" asChild>
            <a href="mailto:stephane-testingit@pm.me" target="_blank" rel="noopener noreferrer">
              Discuter de votre projet
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;