
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
            Olá! Me chamo Calebe Jovair e sou um Desenvolvedor FullStack apaixonado por tecnologia, inovação e resolução de problemas. Ao longo da minha jornada como estudante de programação, venho construindo projetos que unem criatividade e funcionalidade, sempre buscando aprimorar minhas habilidades com as ferramentas mais modernas do mercado, como React e Tailwind CSS.
            </p>
            
            <p className="mb-6 text-lg leading-relaxed">
            Tenho experiência no desenvolvimento de interfaces responsivas, integrações com APIs e aplicações web completas. Estou sempre em busca de novos desafios e aprendizados, com o objetivo de me tornar um profissional cada vez mais completo.
            </p>
            
            <p className="mb-8 text-lg leading-relaxed">
            Seja bem-vindo ao meu portfólio! Aqui você encontrará alguns dos meus projetos, minhas habilidades e formas de entrar em contato comigo.
            </p>
            
            <Button asChild className="w-fit border-2 border-gold bg-transparent px-8 font-medium text-gold hover:bg-gold hover:text-background">
              <a href="https://drive.google.com/file/d/1q9Eqcm3Wgwz7FaF6rwE77WWpTmiim5Vm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
                    <img src="/public/avatar2.png" alt="Calebe jovair" />
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
