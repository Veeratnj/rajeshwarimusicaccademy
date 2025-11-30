import { Instagram } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>

      {/* 3D Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl float-3d"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-secondary/20 to-gold/20 rounded-full blur-3xl float-3d" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl float-3d" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-gradient drop-shadow-2xl">
            Rajarajeshwari
          </h1>
          <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-foreground">
            School of Music & Dance
          </h2>
          <p className="text-xl md:text-2xl font-inter text-muted-foreground max-w-2xl mx-auto italic">
            "Crafting Talent, Celebrating Culture."
          </p>
          
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-full font-inter font-semibold hover:scale-105 transition-transform duration-300 shadow-[var(--shadow-3d)]"
            >
              <Instagram className="w-5 h-5" />
              Follow Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
