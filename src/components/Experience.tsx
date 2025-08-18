import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Pass Culture",
    role: "QA Automation Expert",
    period: "2023 - 2024",
    location: "Paris, France",
    type: "Mission Freelance",
    description: "Automatisation des tests pour l'application professionnelle Pass Culture (État Français)",
    achievements: [
      "Mise en place d'une stratégie de test complète",
      "Développement de tests Cypress pour l'interface pro",
      "Formation de l'équipe aux bonnes pratiques QA"
    ]
  },
  {
    company: "April",
    role: "Automaticien QA",
    period: "2022 - 2023",
    location: "Lyon, France", 
    type: "Mission Freelance",
    description: "Automatisation des parcours de courtage des offres d'assurance",
    achievements: [
      "Tests end-to-end des parcours clients",
      "Intégration CI/CD avec Jenkins",
      "Réduction de 70% du temps de regression"
    ]
  },
  {
    company: "Malt",
    role: "QA Engineer",
    period: "2021 - 2022",
    location: "Paris, France",
    type: "Mission Freelance", 
    description: "Tests de l'application de messagerie et automatisation des tests d'interface",
    achievements: [
      "Automatisation avec Cypress et Playwright",
      "Tests de performance et charge",
      "Amélioration de la couverture de test de 40%"
    ]
  },
  {
    company: "Michelin Mobility Intelligence",
    role: "Mobile QA Specialist",
    period: "2020 - 2021",
    location: "Clermont-Ferrand, France",
    type: "Mission Freelance",
    description: "Tests des applications mobiles Android et iOS pour le suivi de conduite",
    achievements: [
      "Tests automatisés sur devices réels",
      "Stratégie de test cross-platform",
      "Détection précoce de régressions critiques"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4">Expérience</Badge>
          <h2 className="text-4xl font-bold mb-6">Mes dernières missions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            J'ai eu la chance de travailler avec des startups innovantes et des grands groupes 
            sur des projets variés et stimulants.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-tech transition-all duration-300 bg-card-gradient border border-primary/10">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                      <h3 className="text-xl font-semibold text-primary">{exp.company}</h3>
                      <Badge variant="outline" className="text-xs w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <h4 className="text-lg font-medium mb-3">{exp.role}</h4>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="lg:text-right space-y-2 lg:min-w-[200px]">
                    <div className="flex items-center gap-2 lg:justify-end text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 lg:justify-end text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Voir toutes mes expériences sur</p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.malt.fr/profile/stephanecolson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Profil Malt
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-muted-foreground">|</span>
            <a 
              href="https://www.linkedin.com/in/stephanecolson/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;