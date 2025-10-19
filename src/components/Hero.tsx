import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import MatrixRain from "./MatrixRain";
import TerminalTyping from "./TerminalTyping";
import FloatingAchievement from "./FloatingAchievement";
import CodeBlock3D from "./CodeBlock3D";
import GlitchText from "./GlitchText";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background pointer-events-none" />

      {/* 3D Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6 text-center space-y-12">
        {/* Terminal Header */}
        <div className="animate-slide-blur flex justify-center">
          <TerminalTyping />
        </div>

        {/* Main Title with Glitch */}
        <div className="space-y-6">
          <div className="animate-fade-in">
            <GlitchText 
              text="THRISHA KANNAN" 
              className="text-3xl md:text-4xl font-bold text-primary"
            />
          </div>

          <div className="perspective-1000" style={{ perspective: '1000px', animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-gradient inline-block transform-gpu transition-transform duration-500 hover:scale-105">
              SOFTWARE
              <br />
              ENGINEER
            </h1>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-foreground font-semibold">
              Building the future, one line of code at a time
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-lg text-muted-foreground">
              <span className="text-primary font-bold">Shopify Product Corner Cart</span>
              <span className="hidden md:inline">•</span>
              <span className="text-accent font-bold">Cravings CTO</span>
              <span className="hidden md:inline">•</span>
              <span>BTech CUSAT 2024</span>
            </div>
          </div>
        </div>

        {/* 3D Code Block */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <CodeBlock3D />
        </div>

        {/* Floating Achievement Cards */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <FloatingAchievement />
        </div>

        {/* CTA Button */}
        <div className="pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="relative group bg-gradient-primary hover:shadow-glow transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 px-8 py-6 text-lg overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
            
            <span className="relative z-10 flex items-center gap-2">
              Explore My Universe
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </Button>
        </div>

        {/* Error/Success Notifications */}
        <div className="fixed top-4 right-4 space-y-2 pointer-events-none z-50">
          {[
            { text: '✓ System initialized', delay: '2s' },
            { text: '⚡ Performance optimized', delay: '4s' },
            { text: '🚀 Ready to deploy', delay: '6s' },
          ].map((notification, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-lg bg-card/90 backdrop-blur-sm border border-primary/30 text-sm font-mono text-primary shadow-glow animate-slide-blur"
              style={{
                animationDelay: notification.delay,
                animationFillMode: 'backwards',
              }}
            >
              {notification.text}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary drop-shadow-glow" />
      </div>
    </section>
  );
};

export default Hero;
