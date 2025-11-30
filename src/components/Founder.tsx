import { Award } from "lucide-react";
import data from "../../trainer.json";

export const Founder = () => {
  const { founder } = data;

  return (
    <section id="founder" className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-playfair font-bold text-center mb-16 text-gradient">
          Our Founder
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-3d)]">
              <img
                src={founder.img_path}
                alt={founder.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl font-playfair font-bold text-foreground mb-2">
                {founder.name}
              </h3>
              <p className="text-xl font-semibold text-primary mb-2">
                {founder.Specialization}
              </p>
              <p className="text-lg text-muted-foreground italic mb-3">
                {founder.nickname}
              </p>
              <p className="text-base text-foreground/80">
                {founder.Qualification}
              </p>
              <p className="text-base font-medium text-secondary mt-2">
                Founder - Rajarajeshwari School of Music & Dance, Thanjavur
              </p>
            </div>

            {/* Achievements */}
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h4 className="text-2xl font-playfair font-bold text-foreground">
                  Achievements
                </h4>
              </div>

              <div className="space-y-3">
                {founder.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover/item:scale-150 transition-transform"></div>
                    <p className="text-foreground/90 group-hover/item:text-foreground transition-colors">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
