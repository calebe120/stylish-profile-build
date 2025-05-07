
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  User, 
  Code, 
  GraduationCap, 
  Award, 
  Mail 
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "Sobre mim", icon: User, href: "#sobre" },
  { label: "Projetos", icon: Code, href: "#projetos" },
  { label: "Habilidades", icon: Award, href: "#habilidades" },
  { label: "Educação", icon: GraduationCap, href: "#educacao" },
  { label: "Contato", icon: Mail, href: "#contato" }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change on scroll
      setScrolled(window.scrollY > 50);
      
      // Handle active section highlighting
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`group flex items-center space-x-2 rounded-md px-3 py-2 transition-colors hover:bg-accent/10 hover:text-accent ${
                    activeSection === item.href.substring(1) ? "text-accent" : "text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="ghost" className="md:hidden">
          <span className="sr-only">Menu</span>
          <Home className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Mobile navigation */}
      <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-md md:hidden">
        <ul className="flex items-center space-x-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent/10 hover:text-accent ${
                  activeSection === item.href.substring(1) ? "text-accent" : "text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
