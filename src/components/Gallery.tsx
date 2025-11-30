import data from "../../trainer.json";

export const Gallery = () => {
    const { gallery } = data;

    return (
        <section id="gallery" className="py-24 px-4 bg-background">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-5xl font-playfair font-bold text-center mb-16 text-gradient">
                    Our Gallery
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gallery.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                            <img
                                src={item.img_path}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
