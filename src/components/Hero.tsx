import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center center',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6 text-center">
        <div className="space-y-8">
          {/* Glitch Effect Name */}
          <div className="animate-slide-blur">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code2 className="h-8 w-8 text-primary animate-scale-pulse" />
              <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground">
                Thrisha Kannan
              </h2>
              <Sparkles className="h-8 w-8 text-accent animate-scale-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* 3D Rotating Title */}
          <div className="perspective-1000" style={{ perspective: '1000px' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-gradient inline-block transform-gpu hover:scale-110 transition-transform duration-500">
              Software Engineer
            </h1>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-semibold">
              Building exceptional digital experiences
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Currently crafting innovative solutions at <span className="text-primary font-semibold">Shopify Product Corner Cart</span>
            </p>

            <div className="flex flex-col items-center gap-2">
              <p className="text-lg md:text-xl text-muted-foreground">
                Founder & CTO of <span className="text-accent font-semibold">Cravings</span>
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                A food discovery platform trusted by <span className="font-bold text-accent">50,000+ users</span>
              </p>
            </div>

            <div className="pt-4 animate-slide-blur" style={{ animationDelay: '0.6s' }}>
              <p className="text-base md:text-lg text-muted-foreground">
                🎓 BTech 2024 Graduate
              </p>
              <p className="text-base md:text-lg text-primary font-semibold">
                Cochin University of Science and Technology
              </p>
            </div>
          </div>

          {/* CTA Button with 3D Effect */}
          <div className="pt-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Tech Stack Indicators */}
          <div className="flex justify-center gap-4 pt-8 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            {['React', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech, index) => (
              <div 
                key={tech}
                className="px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 cursor-default"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <span className="text-sm font-mono text-primary">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
