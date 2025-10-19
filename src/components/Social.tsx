import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Thrisha1",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/thrishakannan/",
    color: "hover:text-primary",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/Thrishakannan1",
    color: "hover:text-accent",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:thrishakannan25@gmail.com",
    color: "hover:text-destructive",
  },
];

const Social = () => {
  return (
    <section className="py-24 px-6">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities,
          collaborations, or just having a chat about technology and innovation.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.name}
                size="lg"
                variant="outline"
                asChild
                className={`group ${social.color} transition-colors border-border/50 hover:border-current`}
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5 mr-2" />
                  {social.name}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Social;
