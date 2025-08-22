import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Github,
  Linkedin,
  MessageCircle,
  FileText,
  Calendar
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "La meilleure façon de me contacter",
    action: "M'écrire",
    link: "mailto:stephane-testingit@pm.me",
    primary: true
  },
  {
    icon: Calendar,
    title: "Calendly",
    description: "Programmer un rendez-vous directement",
    action: "Réserver un créneau",
    link: "https://calendly.com/stephane-colson/30min",
    primary: true
  },
  {
    icon: MessageCircle,
    title: "Malt",
    description: "Profil vérifié avec recommandations",
    action: "Voir le profil",
    link: "https://www.malt.fr/profile/stephanecolson",
    primary: false
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Réseau professionnel et parcours détaillé",
    action: "Se connecter",
    link: "https://www.linkedin.com/in/stephanecolson/",
    primary: false
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4">Contact</Badge>
          <h2 className="text-4xl font-bold mb-6">Discutons de votre projet</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vous avez un projet de test ou d'automatisation ? Je suis là pour vous aider. 
            Contactez-moi pour discuter de vos besoins.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-tech transition-all duration-300 hover:-translate-y-1 ${
                  method.primary ? 'bg-tech-gradient-soft border-primary/30' : 'bg-card-gradient border-primary/10'
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                    method.primary ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                  }`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <Button 
                    className={`w-full ${method.primary ? '' : 'variant-outline'}`}
                    onClick={() => window.open(method.link, '_blank')}
                  >
                    {method.action}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card-gradient border border-primary/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Zones d'intervention
                </h3>
                <div className="space-y-3">
                  {[
                    "Lyon",
                    "Paris", 
                    "Genève",
                    "Marseille",
                    "Nantes",
                    "Timezone CEST -/+1h",
                  ].map((zone, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">{zone}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    💻 <strong>Télétravail</strong> si en dehors de Lyon
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card-gradient border border-primary/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Disponibilité
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-sm font-medium">Statut actuel</span>
                    <Badge className="bg-green-500 text-white">
                      ✅ Disponible
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium">Temps de réponse</span>
                    <Badge variant="outline">
                      ⚡ 4h en moyenne
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium">Tarif moyen</span>
                    <Badge variant="outline">
                      💰 600€/jour
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Card className="bg-tech-gradient text-white border-0 shadow-tech">
              <CardContent className="p-8">
                <Github className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-4">Code & Projets</h3>
                <p className="text-white/90 mb-6">
                  Consultez mes contributions sur GitHub
                </p>
                <div className="flex justify-center gap-6 text-sm text-white/80 mb-6">
                  <div>
                    <div className="font-semibold text-white">19</div>
                    <div>Repositories</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">8</div>
                    <div>Followers</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">0</div>
                    <div>Gists</div>
                  </div>
                </div>
                <Button 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => window.open('https://github.com/StephaneColson', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Voir GitHub
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;