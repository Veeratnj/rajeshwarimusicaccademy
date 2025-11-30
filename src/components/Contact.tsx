import { MapPin, Phone, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-playfair font-bold text-center mb-16 text-gradient">
          Contact & Location
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Address Card */}
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-3d)] transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-3 text-foreground">
                  Location
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  Rajarajeshwari School of Music & Dance<br />
                  Thanjavur, Tamil Nadu<br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-3d)] transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-gold flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-3 text-foreground">
                  Get In Touch
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                  For inquiries about admissions, courses, or performances, please reach out through our social media.
                </p>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
                >
                  Connect on Instagram →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border/50">
          <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="w-12 h-12 text-primary mx-auto" />
              <p className="font-inter text-muted-foreground">
                Visit us in Thanjavur, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
