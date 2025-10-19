import { Card } from "@/components/ui/card";
import { yearsToDays } from "date-fns";
import { Briefcase, Users } from "lucide-react";

const experiences = [
  {
    company: "Messengerify Labs",
    year: "2024-present",
    role: "Software Engineer",
    product: "Product Corner Cart @ shopify app store",
    description:
      "Building scalable e-commerce solutions and enhancing cart functionality for millions of shopify merchants worldwide.",
    icon: Briefcase,
  },
  {
    company: "Cravings",
    year: "2022-present",
    role: "Founder & CTO",
    product: "Food Discovery Platform",
    description:
      "Leading technical vision and product development for a platform connecting 50,000+ food enthusiasts with their next favorite meal.",
    icon: Users,
    highlight: true,
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card
                key={index}
                className={`p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${
                  exp.highlight ? "border-accent/50 shadow-glow" : ""
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-3 rounded-lg ${exp.highlight ? "bg-accent/10" : "bg-primary/10"}`}
                  >
                    <Icon
                      className={`h-6 w-6 ${exp.highlight ? "text-accent" : "text-primary"}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-muted-foreground">{exp.year}</p>
                    <p className="text-muted-foreground">{exp.role}</p>
                  </div>
                </div>
                <p className="text-sm text-primary font-semibold mb-3">
                  {exp.product}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
