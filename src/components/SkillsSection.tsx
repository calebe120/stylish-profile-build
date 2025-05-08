
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample skills data - replace with your actual skills
const skills = {
  frontend: [
    { name: "HTML & CSS", level: 50 },
    { name: "JavaScript", level: 50 },
    { name: "TypeScript", level: 50 },
    { name: "React", level: 30 },
    { name: "Next.js", level: 30 },
    { name: "Tailwind CSS", level: 50 }
  ],
  backend: [
    { name: "Node.js", level: 50 },
    { name: "PostgreSQL", level: 65 },
    { name: "JAVA", level: 65 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Docker", level: 20 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 30 },

  ]
};

const SkillBar = ({ name, }: { name: string;  }) => {
  return (
    <div className="mb-4">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm">{name}</span>
        
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/30">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
          
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="habilidades" className="bg-secondary/5 py-20">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-gradient-gold">Habilidades</span>
        </h2>
        
        <p className="section-subtitle mx-auto max-w-3xl text-center">
          Minhas habilidades técnicas e ferramentas que uso diariamente para criar aplicações web modernas e eficientes.
        </p>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          <Card className="border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
            <CardHeader>
              <CardTitle className="text-xl">Frontend</CardTitle>
              <CardDescription>Tecnologias para interfaces</CardDescription>
            </CardHeader>
            <CardContent>
              {skills.frontend.map((skill) => (
                <SkillBar key={skill.name} name={skill.name}  />
              ))}
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
            <CardHeader>
              <CardTitle className="text-xl">Backend</CardTitle>
              <CardDescription>Tecnologias para servidores</CardDescription>
            </CardHeader>
            <CardContent>
              {skills.backend.map((skill) => (
                <SkillBar key={skill.name} name={skill.name}  />
              ))}
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
            <CardHeader>
              <CardTitle className="text-xl">Ferramentas</CardTitle>
              <CardDescription>DevOps e Produtividade</CardDescription>
            </CardHeader>
            <CardContent>
              {skills.tools.map((skill) => (
                <SkillBar key={skill.name} name={skill.name}  />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
