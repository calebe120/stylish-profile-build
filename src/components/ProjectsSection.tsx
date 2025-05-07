
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

// Sample projects data - you can replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Um site de portfólio responsivo construído com HTML, CSS e JavaScript Puro.",
    image: "public/perfil2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/calebe120/projeto-devlinks",
    liveUrl: "https://calebe120.github.io/projeto-devlinks/"
  
  },
  /*{
    id: 2,
    title: "E-commerce Platform",
    description: "Uma plataforma de comércio eletrônico completa com sistema de pagamento.",
    image: "/placeholder.svg",
    tags: ["Next.js", "MongoDB", "Stripe", "TypeScript"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://yourecommerce.com"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com arrastar e soltar para organização fácil.",
    image: "/placeholder.svg",
    tags: ["React", "Firebase", "Tailwind", "DnD"],
    githubUrl: "https://github.com/yourusername/taskapp",
    liveUrl: "https://yourtaskapp.com"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Dashboard que mostra previsões do tempo em tempo real usando a API OpenWeather.",
    image: "/placeholder.svg",
    tags: ["JavaScript", "API", "CSS", "Chart.js"],
    githubUrl: "https://github.com/yourusername/weather",
    liveUrl: "https://yourweatherapp.com"
  }*/
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-20">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-gradient-gold">Projetos</span>
        </h2>
        
        <p className="section-subtitle mx-auto max-w-3xl text-center">
          Aqui estão alguns dos projetos que desenvolvi. Uma mistura de trabalhos comerciais e pessoais que demonstram minhas habilidades técnicas.
        </p>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project) => (
            <Card 
              key={project.id}
              className={`group relative overflow-hidden border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 ${
                hoveredProject === project.id ? "scale-[1.02]" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gold/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-md text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-secondary/30 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-gold">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </a>
                </Button>
                
                <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-gold">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button asChild className="border-2 border-gold bg-transparent px-8 font-medium text-gold hover:bg-gold hover:text-background">
            <a href="https://github.com/calebe120" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Ver mais no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
