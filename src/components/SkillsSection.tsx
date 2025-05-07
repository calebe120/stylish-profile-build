
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample skills data - replace with your actual skills
const skills = {
  frontend: [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 90 }
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 65 },
    { name: "Firebase", level: 70 },
    { name: "REST API", level: 85 }
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Docker", level: 60 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 65 },
    { name: "Jest", level: 70 },
    { name: "CI/CD", level: 65 }
  ]
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/30">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
          style={{ width: `${level}%`, transition: "width 1s ease-in-out" }}
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
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
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
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
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
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
