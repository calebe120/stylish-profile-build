
import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-10 text-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mb-8 rounded-full border-2 border-gold bg-transparent p-3 text-gold hover:bg-gold hover:text-background"
            size="icon"
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Voltar ao topo</span>
          </Button>
          
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gradient-gold">Seu Nome</h2>
            <p className="text-sm text-muted-foreground">Desenvolvedor Fullstack</p>
          </div>
          
          <div className="mb-8 flex items-center space-x-4">
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-accent/10 hover:text-accent">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-accent/10 hover:text-accent">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-accent/10 hover:text-accent">
              <a href="mailto:youremail@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Seu Nome. Todos os direitos reservados.</p>
            <p className="mt-1">Feito com ❤️ e React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
