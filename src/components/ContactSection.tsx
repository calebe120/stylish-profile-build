
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="bg-secondary/5 py-20">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-gradient-gold">Contato</span>
        </h2>
        
        <p className="section-subtitle mx-auto max-w-3xl text-center">
          Estou sempre aberto a novas oportunidades. Entre em contato comigo para conversar sobre projetos, colaborações ou apenas para dar um oi!
        </p>
        
        <div className="mt-12 grid gap-8 md:grid-cols-5">
          <Card className="border-border bg-card/30 md:col-span-2">
            <CardContent className="flex flex-col space-y-8 p-6">
              <div className="flex flex-col items-center space-y-3 text-center">
                <h3 className="text-2xl font-bold">Informações de Contato</h3>
                <p className="text-sm text-muted-foreground">
                  Prefere entrar em contato diretamente? Aqui estão minhas informações.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:calebe_lemos@hotmail.com" className="text-sm text-muted-foreground hover:text-accent">
                      calebe_lemos@hotmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Telefone</h4>
                    <a href="tel:+5562982737832" className="text-sm text-muted-foreground hover:text-accent">
                      +55 (62) 98273-7832
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Localização</h4>
                    <p className="text-sm text-muted-foreground">
                      Aparecida de Goiânia, Goiás - Brasil
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-border bg-transparent hover:bg-accent/10 hover:text-accent">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
                
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-border bg-transparent hover:bg-accent/10 hover:text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Button>
                
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-border bg-transparent hover:bg-accent/10 hover:text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <form onSubmit={handleSubmit} className="md:col-span-3">
            <Card className="border-border bg-card/30">
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-secondary/20 backdrop-blur-sm"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Digite seu email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-secondary/20 backdrop-blur-sm"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Digite o assunto da mensagem"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-secondary/20 backdrop-blur-sm"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Digite sua mensagem"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[150px] resize-none bg-secondary/20 backdrop-blur-sm"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full border-2 border-gold bg-transparent font-medium text-gold hover:bg-gold hover:text-background"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                      {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
