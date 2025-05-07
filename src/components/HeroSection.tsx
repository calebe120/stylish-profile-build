
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-10 text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent),0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4">
        <h1 className="animate-fade-in text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Olá, eu sou</span>
          <span className="mt-2 block text-gradient-gold">Calebe Jovair</span>
        </h1>
        
        <p className="animate-fade-in animation-delay-200 mx-auto mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl">
          Desenvolvedor Fullstack apaixonado por criar experiências digitais incríveis
        </p>
        
        <div className="animate-fade-in animation-delay-300 mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button asChild className="group h-12 border-2 border-gold bg-transparent px-8 font-medium text-gold hover:bg-gold hover:text-background">
            <a href="#projetos">
              Ver projetos
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:-rotate-90" />
            </a>
          </Button>
          
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full border border-border hover:bg-accent/10 hover:text-accent">
              <a href="https://github.com/calebe120" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            
            <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full border border-border hover:bg-accent/10 hover:text-accent">
              <a href="https://www.linkedin.com/in/calebe-jovair-720332215/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild className="h-12 w-12 rounded-full text-muted-foreground hover:text-accent">
          <a href="#sobre">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll para baixo</span>
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
