import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Educators", href: "#educators" },
  { label: "Courses", href: "#courses" },
  { label: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-8 right-8 z-50 animate-fade-in">
        <div className="bg-card/95 backdrop-blur-md rounded-full px-8 py-4 shadow-[var(--shadow-3d)] border border-border/50">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="font-inter font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 right-4 z-50 animate-fade-in">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-card/95 backdrop-blur-md rounded-full p-4 shadow-[var(--shadow-3d)] border border-border/50 hover:scale-110 transition-transform"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-0 bg-card/98 backdrop-blur-md rounded-2xl shadow-[var(--shadow-3d)] border border-border/50 overflow-hidden animate-scale-in min-w-[200px]">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left px-6 py-3 font-inter font-medium text-foreground hover:bg-muted/50 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};
