
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-secondary/5 py-20">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-gradient-gold">Sobre mim</span>
        </h2>
        
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-lg leading-relaxed">
              Olá! Sou um desenvolvedor fullstack apaixonado por criar aplicações web modernas e eficientes. Com experiência em diversas tecnologias do ecossistema JavaScript, incluindo React, Node.js e TypeScript.
            </p>
            
            <p className="mb-6 text-lg leading-relaxed">
              Minha jornada na programação começou quando [sua história pessoal aqui]. Desde então, tenho trabalhado em diversos projetos que unem funcionalidade e design.
            </p>
            
            <p className="mb-8 text-lg leading-relaxed">
              Além de codificar, sou apaixonado por [seus hobbies ou interesses]. Acredito que um bom desenvolvedor precisa estar constantemente aprendendo e evoluindo.
            </p>
            
            <Button asChild className="w-fit border-2 border-gold bg-transparent px-8 font-medium text-gold hover:bg-gold hover:text-background">
              <a href="/caminho-para-seu-cv.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-accent/30 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/30 to-gold-light/10 opacity-50"></div>
              <div className="h-full w-full rounded-full bg-secondary/30 p-2">
                <div className="h-full w-full overflow-hidden rounded-full border-2 border-gold/20">
                  {/* Placeholder for profile image */}
                  <div className="flex h-full w-full items-center justify-center bg-secondary text-5xl font-bold text-gold">
                    SN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
