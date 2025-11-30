import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-playfair font-bold text-gradient">
            Rajarajeshwari School of Music & Dance
          </h3>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="font-inter font-medium">Instagram</span>
            </a>
          </div>
          
          <div className="pt-8 border-t border-border/50">
            <p className="font-inter text-sm text-muted-foreground">
              COPYRIGHT ©2024, Owned by Rajarajeshwari Music Academy
            </p>
            <p className="font-inter text-xs text-muted-foreground mt-2">
              Thanjavur, Tamil Nadu
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
};
