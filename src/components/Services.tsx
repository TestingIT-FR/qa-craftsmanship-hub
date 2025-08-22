import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TestTube2, 
  Cog, 
  Users, 
  Target, 
  ArrowRight,
  CheckCircle,
  Calendar,
  Mail
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: TestTube2,
      title: t("services.strategy.title"),
      description: t("services.strategy.description"),
      features: t("services.strategy.features").split(","),
      color: "text-blue-500"
    },
    {
      icon: Cog,
      title: t("services.automation.title"),
      description: t("services.automation.description"),
      features: t("services.automation.features").split(","),
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: t("services.coaching.title"),
      description: t("services.coaching.description"),
      features: t("services.coaching.features").split(","),
      color: "text-green-500"
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4">{t("services.badge")}</Badge>
          <h2 className="text-4xl font-bold mb-6">{t("services.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("services.description")}
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
          <h3 className="text-2xl font-bold mb-4">{t("services.cta.title")}</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t("services.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-tech" asChild>
              <a href="mailto:stephane-testingit@pm.me" target="_blank" rel="noopener noreferrer">
                <Mail className="w-4 h-4 mr-2" />
                {t("services.cta.writeMe")}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="shadow-tech" asChild>
              <a href="https://calendly.com/stephane-colson/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                {t("services.cta.scheduleCall")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;