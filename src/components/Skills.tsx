import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Outils d'automatisation",
    skills: [
      { name: "Cypress", level: 95, color: "bg-green-500" },
      { name: "Playwright", level: 85, color: "bg-blue-500" },
      { name: "Postman/Newman", level: 85, color: "bg-orange-500" }
    ]
  },
  {
    title: "Technologies Web",
    skills: [
      { name: "JavaScript", level: 90, color: "bg-yellow-500" },
      { name: "TypeScript", level: 85, color: "bg-blue-600" },
      { name: "Node.js", level: 80, color: "bg-green-600" }
    ]
  },
  {
    title: "Méthodologies",
    skills: [
      { name: "Test Strategy", level: 98, color: "bg-primary" },
      { name: "CI/CD", level: 85, color: "bg-red-500" },
      { name: "Quality Assurance", level: 98, color: "bg-primary" },
      { name: "Scrum", level: 95, color: "bg-indigo-500" }
    ]
  },
  {
    title: "Langues",
    skills: [
      { name: "Français", level: 100, color: "bg-blue-600" },
      { name: "Anglais", level: 85, color: "bg-red-500" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4">Compétences</Badge>
          <h2 className="text-4xl font-bold mb-6">Expertise technique</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des compétences techniques solides acquises au fil de 20+ années d'expérience 
            dans le domaine de la qualité logicielle.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card-gradient border border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card-gradient border border-primary/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Secteurs d'activité</h3>
              <div className="space-y-3">
                {[
                  "Assurance ",
                  "E-commerce",
                  "Culture & Éducation", 
                  "Mobilité & Transport",
                  "Édition de logiciels",
                  "Administration publique",
                  "Cybersécurité"
                ].map((sector, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{sector}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12 p-8 bg-tech-gradient-soft rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Prêt à collaborer ?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Mes compétences correspondent à vos besoins ? Discutons de votre projet 
            et voyons comment je peux vous aider à atteindre vos objectifs qualité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge className="bg-primary/20 text-primary border-primary/30 p-2">
              📍 Lyon, Paris, Europe, Monde en remote...
            </Badge>
            <Badge className="bg-primary/20 text-primary border-primary/30 p-2">
              💰 600€/jour
            </Badge>
            <Badge className="bg-green-500/20 text-green-700 border-green-500/30 p-2">
              ✅ Disponible
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;