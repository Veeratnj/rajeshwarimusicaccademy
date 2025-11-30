import { Music, Music2, Sparkles, Calendar, Palette } from "lucide-react";

const courses = [
  {
    title: "Carnatic Vocal",
    icon: Music,
    description: "Master the art of Carnatic vocal music with a focus on technique, improvisation, and traditional ragas.",
    color: "from-primary to-secondary"
  },
  {
    title: "Classical Music Instrumentals",
    icon: Music2,
    description: "Learn traditional instruments like Veena, Mridangam, and more with expert guidance.",
    color: "from-secondary to-gold"
  },
  {
    title: "Bharatanatyam",
    icon: Sparkles,
    description: "Discover the ancient dance form known for its grace, expressive storytelling, and intricate footwork. Focus on abhinaya (expression), nritta (pure dance), and rhythmical aspects.",
    color: "from-accent to-primary"
  },
  {
    title: "Professional Event Programmes",
    icon: Calendar,
    description: "Showcase your talent in professionally organized cultural events and performances.",
    color: "from-gold to-accent"
  },
  {
    title: "Drawing",
    icon: Palette,
    description: "Complement your artistic journey with visual arts and traditional Indian art forms.",
    color: "from-primary to-accent"
  }
];

export const Courses = () => {
  return (
    <section id="courses" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-5xl font-playfair font-bold text-center mb-16 text-gradient">
          Our Courses
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-3d)] transition-all duration-500 hover:-translate-y-2 border border-border/50">
                  {/* 3D Icon container */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 float-3d group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">
                    {course.title}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* Hover effect line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${course.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special highlight section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-gold/10 rounded-3xl p-12 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-3xl font-playfair font-bold text-center mb-6 text-foreground">
              Carnatic Vocal & Instruments
            </h3>
            <p className="font-inter text-lg text-center text-muted-foreground leading-relaxed mb-8">
              Master the art of playing the Carnatic Instrumentals with a focus on technique, improvisation, and blending the instrument's unique sound with traditional ragas.
            </p>
            
            <h3 className="text-3xl font-playfair font-bold text-center mb-6 text-foreground">
              Bharatanatyam
            </h3>
            <p className="font-inter text-lg text-center text-muted-foreground leading-relaxed">
              Discover the ancient dance form of Bharatanatyam, known for its grace, expressive storytelling, and intricate footwork. Our lessons focus on abhinaya (expression), nritta (pure dance), and the rhythmical aspects of the dance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
