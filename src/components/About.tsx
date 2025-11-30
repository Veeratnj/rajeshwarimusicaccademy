export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          {/* 3D decorative elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-gold/10 to-secondary/10 rounded-full blur-3xl rotate-3d opacity-50"></div>
          
          <div className="relative bg-card rounded-3xl p-12 shadow-[var(--shadow-card)] backdrop-blur-sm border border-border/50 hover:shadow-[var(--shadow-3d)] transition-shadow duration-500">
            <h2 className="text-5xl font-playfair font-bold text-center mb-8 text-gradient">
              About Us
            </h2>
            
            <div className="space-y-6 font-inter text-lg leading-relaxed text-foreground/90">
              <p>
                Rajarajeshwari Music Academy was founded by <span className="font-semibold text-primary">Ms. Rajarajeshwari</span> to promote and preserve the rich traditions of Carnatic music, instrumental music, and Bharatanatyam. Our academy offers specialized training for students of all ages and skill levels, helping them explore and master these classical art forms.
              </p>
              
              <p>
                Under the expert guidance of Ms. Rajarajeshwari, we provide a nurturing environment where students not only develop technical proficiency but also a deep cultural appreciation. Whether you are interested in vocal or instrumental music, or Bharatanatyam, we offer personalized instruction that fosters creativity, discipline, and confidence.
              </p>
              
              <p className="text-center text-xl font-semibold text-primary pt-4">
                Join us at Rajarajeshwari Music Academy and begin your journey into the world of classical music and dance!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
