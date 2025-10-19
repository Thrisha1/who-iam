import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cravings",
    description: "A food discovery platform helping users find their next favorite restaurant. Built with React, Node.js, and PostgreSQL. Serving 50,000+ active users.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    featured: true,
  },
  {
    title: "Shopify Corner Cart",
    description: "Enhanced cart experience for Shopify merchants with real-time updates, inventory management, and seamless checkout integration.",
    tags: ["React", "TypeScript", "Shopify API"],
  },
  {
    title: "E-commerce Analytics Dashboard",
    description: "Real-time analytics and insights dashboard for e-commerce businesses with interactive visualizations and custom reporting.",
    tags: ["React", "D3.js", "Firebase"],
  },
  {
    title: "Restaurant Management System",
    description: "Complete POS and management solution for restaurants including order management, inventory tracking, and staff scheduling.",
    tags: ["React Native", "Express", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${
                project.featured ? 'md:col-span-2 border-accent/50 shadow-glow' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" className="hover:text-primary">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:text-primary">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
