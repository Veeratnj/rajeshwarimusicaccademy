import { Instagram } from "lucide-react";
import data from "../../trainer.json";

export const Educators = () => {
  const { trainers } = data;

  return (
    <section id="educators" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-playfair font-bold text-center mb-16 text-gradient">
          Our Educators
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {trainers.map((educator, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* 3D Card effect */}
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-3d)] transition-all duration-500 hover:-translate-y-2">
                {/* Image container with 3D effect */}
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10"></div>
                  <img
                    src={educator.img_path}
                    alt={educator.trainer_name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-3">
                  <h3 className="text-2xl font-playfair font-bold text-foreground">
                    {educator.trainer_name}
                  </h3>
                  <p className="text-lg font-semibold text-primary">
                    {educator.Specialization} Guru
                  </p>
                  {educator.nickname && (
                    <p className="text-sm italic text-muted-foreground">
                      {educator.nickname}
                    </p>
                  )}
                  <p className="text-sm text-foreground/80">
                    {educator.Qualification}
                  </p>
                  <p className="text-sm font-medium text-secondary pt-2">
                    {educator.Specialization} Instructor
                  </p>

                  {educator.instagram && (
                    <a
                      href={educator.instagram}
                      className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors pt-4"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="font-inter font-medium">Instagram</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
