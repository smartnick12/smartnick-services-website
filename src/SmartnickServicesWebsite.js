export default function SmartnickServicesWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Smartnick Services
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-100">
              Professional Painting & Home Improvement Services
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Transforming homes with quality craftsmanship, reliable service, and attention to detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-white text-red-600 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Get a Free Estimate
              </a>
              <a
                href="#services"
                className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-red-600 transition"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="bg-white rounded-3xl p-8 text-center text-gray-800">
              <div className="text-6xl font-bold text-red-600 mb-4">S</div>
              <h2 className="text-3xl font-bold mb-2">Smartnick Services</h2>
              <p className="text-gray-600 text-lg">
                Painting • Staining • Pressure Washing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Trusted Home Improvement Experts
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Smartnick Services provides high-quality residential painting and exterior home improvement solutions. From painting and staining to landscaping and driveway sealing, we help homeowners improve the beauty and value of their property.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We focus on reliability, craftsmanship, and customer satisfaction on every project.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-xl mb-2">Painting</h3>
              <p className="text-gray-600">Interior and exterior professional painting services.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <div className="text-4xl mb-3">🪵</div>
              <h3 className="font-bold text-xl mb-2">Staining</h3>
              <p className="text-gray-600">Deck, fence, and wood staining solutions.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-bold text-xl mb-2">Driveway Sealing</h3>
              <p className="text-gray-600">Protect and extend the life of your driveway.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="font-bold text-xl mb-2">Landscaping</h3>
              <p className="text-gray-600">Clean, attractive landscaping and yard improvements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional services designed to improve and protect your home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Painting',
                description: 'Professional interior and exterior painting services for homes and businesses.',
              },
              {
                title: 'Staining',
                description: 'Deck, fence, and wood staining to protect and enhance surfaces.',
              },
              {
                title: 'Driveway Sealing',
                description: 'Durable driveway sealing services to prevent cracking and wear.',
              },
              {
                title: 'Landscaping',
                description: 'Property cleanup, landscaping, and curb appeal improvements.',
              },
              {
                title: 'Pressure Washing',
                description: 'Powerful exterior cleaning for siding, decks, driveways, and patios.',
              },
              {
                title: 'General Home Improvement',
                description: 'Reliable improvement services tailored to your property needs.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-bold mb-4 text-red-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Customers Say</h2>
            <p className="text-lg text-gray-600">
              Quality work and dependable service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Amazing painting work and very professional from start to finish.',
              'Our driveway and landscaping project turned out amazing. Highly recommend!',
              'Fast, reliable, and affordable home improvement services.',
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "{review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-red-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Your Free Estimate</h2>
          <p className="text-xl mb-10 text-red-100">
            Contact Smartnick Services today for professional painting and home improvement solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 p-6 rounded-2xl">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-xl mb-2">Phone</h3>
              <p>(724) 205-3545</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <p>smartnickservices@gmail.com</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-xl mb-2">Service Area</h3>
              <p>Westmoreland, Allegheny, and Fayette County</p>
            </div>
          </div>

          <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition">
            Request a Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p className="text-lg">
          © 2026 Smartnick Services. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
