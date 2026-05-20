const AboutUs = () => {
    return (
        <>
        <section className="max-w-6xl mx-auto px-5 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          About Us
        </h1>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Welcome to <span className="font-semibold">Miteri Home Decor</span> -
          where creativity, comfort, and craftsmanship come together to
          transform houses into homes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl shadow-sm border p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At Miteri Home Decor, we believe every space tells a story. Our
            mission is to bring warmth, style, and personality into your home
            through thoughtfully selected décor pieces inspired by modern
            living, timeless aesthetics, and artistic design.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Whether you are refreshing your home, decorating a new space, or
            searching for the perfect statement piece, we aim to make your
            experience inspiring and enjoyable.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our vision is to create a destination where beautiful décor meets
            affordability and quality. We want every customer to feel connected
            to their living space through products that reflect comfort,
            creativity, and individuality.
          </p>
        </div>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-sm border p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Quality Craftsmanship",
            "Modern & Elegant Designs",
            "Customer Satisfaction",
            "Carefully Curated Collections",
          ].map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-5 text-center hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Commitment
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are committed to providing décor that helps you create a home you
          truly love. Every product is selected with care to ensure it brings
          beauty, comfort, and inspiration into your daily life.
        </p>

        <p className="mt-6 text-gray-800 font-medium">
          Thank you for choosing Miteri Home Decor to be part of your home
          journey.
        </p>
      </div>
    </section>
        </>
      );
}
 
export default AboutUs;