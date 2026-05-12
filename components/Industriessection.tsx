export default function IndustriesSection() {

  return (
    <section className="relative bg-white bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/industries.jpg')" }}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h4 className="text-white font-semibold uppercase tracking-wide">
            Industries
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Addressing tomorrow’s challenges whatever your industry
          </h2>
          <button className="mt-4 px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-teal-600 transition text-white">
            See Our Industries →
          </button>
        </div>

      </div>
    </section>
  );
}
