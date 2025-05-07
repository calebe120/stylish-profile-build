
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { School, Calendar } from "lucide-react";

// Sample education data - replace with your actual education
const educationData = [
  {
    id: 1,
    institution: "Universidade Federal de Exemplo",
    degree: "Bacharelado em Ciência da Computação",
    period: "2018 - 2022",
    description: "Formação com ênfase em desenvolvimento de software e sistemas computacionais.",
    topics: ["Algoritmos", "Estruturas de Dados", "Banco de Dados", "Inteligência Artificial", "Engenharia de Software"]
  },
  {
    id: 2,
    institution: "Instituto Técnico de Tecnologia",
    degree: "Curso Técnico em Desenvolvimento Web",
    period: "2016 - 2018",
    description: "Formação técnica focada em tecnologias web e design de interfaces.",
    topics: ["HTML & CSS", "JavaScript", "Design Responsivo", "UX/UI", "PHP Básico"]
  }
];

// Sample certification data - replace with your actual certifications
const certificationData = [
  {
    id: 1,
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2022",
    credentialId: "AWS-DEV-12345"
  },
  {
    id: 2,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    date: "2021",
    credentialId: "META-FE-67890"
  },
  {
    id: 3,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2020",
    credentialId: "FCC-JSALGO-54321"
  }
];

const EducationSection = () => {
  return (
    <section id="educacao" className="py-20">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-gradient-gold">Educação</span>
        </h2>
        
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Formação Acadêmica</h3>
            
            <div className="space-y-8">
              {educationData.map((education) => (
                <Card key={education.id} className="border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <School className="h-5 w-5 text-gold" />
                      <CardTitle className="text-xl">{education.institution}</CardTitle>
                    </div>
                    <CardDescription className="flex items-center space-x-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{education.period}</span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-primary">{education.degree}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{education.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {education.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="bg-secondary/30 text-primary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Certificações</h3>
            
            <div className="space-y-6">
              {certificationData.map((cert) => (
                <Card key={cert.id} className="border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>
                      {cert.issuer} • {cert.date}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      ID da Credencial: {cert.credentialId}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
