import { Trophy, Users, Rocket, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Users,
    title: "50K+ Users",
    subtitle: "Cravings Platform",
    color: "text-accent",
    delay: "0s",
  },
  {
    icon: Code2,
    title: "Software Engineer",
    subtitle: "Product Corner Cart",
    color: "text-primary",
    delay: "0.5s",
  },
  {
    icon: Trophy,
    title: "CTO & Founder",
    subtitle: "Food Discovery",
    color: "text-accent",
    delay: "1s",
  },
  {
    icon: Rocket,
    title: "BTech 2024",
    subtitle: "CUSAT Graduate with 9.45 cgpa",
    color: "text-primary",
    delay: "1.5s",
  },
];

const FloatingAchievement = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto mt-12">
      {achievements.map((achievement, index) => {
        const Icon = achievement.icon;
        return (
          <Card
            key={index}
            className="relative p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 group overflow-hidden"
            style={{
              animation: "scale-in 0.5s ease-out",
              animationDelay: achievement.delay,
              animationFillMode: "backwards",
            }}
          >
            {/* Holographic effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* 3D rotating background ok*/}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(45deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
                transform: "translateZ(-10px)",
              }}
            />

            <div className="relative z-10 flex flex-col items-center text-center gap-2">
              <div
                className={`p-3 rounded-lg bg-background/80 ${achievement.color} animate-scale-pulse`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-sm">{achievement.title}</p>
                <p className="text-xs text-muted-foreground">
                  {achievement.subtitle}
                </p>
              </div>
            </div>

            {/* Animated border */}
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 3s ease infinite",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                padding: "2px",
              }}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default FloatingAchievement;
