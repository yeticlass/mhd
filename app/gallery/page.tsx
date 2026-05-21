export default function GalleryPage() {
  const images = [
    {
      src: "images/gallery/1.jpg",
      alt: "Modern living room interior",
    },
    {
      src: "images/gallery/2.jpg",
      alt: "Luxury sofa decor",
    },
    {
      src: "image/gallery/63.jpg",
      alt: "Elegant curtain setup",
    },
    {
      src: "images/gallery/40.jpg",
      alt: "Minimal bedroom styling",
    },
    {
      src: "images/gallery/5.jpg",
      alt: "Wooden dining decor",
    },
    {
      src: "images/gallery/6.jpg",
      alt: "Decorative wall setup",
    },
    {
      src: "images/gallery/7.jpg",
      alt: "Home furnishing showcase",
    },
    {
      src: "images/gallery/8.jpg",
      alt: "Stylish interior arrangement",
    },
        {
      src: "images/gallery/24.jpg",
      alt: "Stylish interior arrangement",
    },
        {
      src: "images/gallery/10.jpg",
      alt: "Stylish interior arrangement",
    },
        {
      src: "images/gallery/11.jpg",
      alt: "Stylish interior arrangement",
    },
    
        {
      src: "images/gallery/61.jpg",
      alt: "Stylish interior arrangement",
    },
    
        {
      src: "images/gallery/13.jpg",
      alt: "Stylish interior arrangement",
    },
    
        {
      src: "images/gallery/14.jpg",
      alt: "Stylish interior arrangement",
    },
    
        {
      src: "images/gallery/15.jpg",
      alt: "Stylish interior arrangement",
    },
    
        {
      src: "images/gallery/16.jpg",
      alt: "Stylish interior arrangement",
    },
  ];

   return (
    <main className="bg-[#faf8f5] min-h-screen py-14 px-5 md:px-10">
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-3">
            Miteri Home Decor
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold text-neutral-900 leading-tight">
            Our Gallery
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-neutral-600 text-base md:text-lg leading-8">
            Explore our completed false ceiling projects featuring modern designs, elegant finishes, and customized ceiling solutions crafted to enhance residential and commercial spaces.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm break-inside-avoid"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition duration-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
            Premium False Ceiling Solutions
          </h2>

          <p className="text-neutral-600 max-w-2xl mx-auto leading-8">
            Miteri Home Decor specializes in stylish and durable false ceiling designs that bring depth, elegance, and a refined finish to every interior space.
          </p>
        </div>
      </section>
    </main>
  );
}

