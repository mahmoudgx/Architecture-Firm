const servicesData = [
  {
    id: 1,
    title: "Architectural Design",
    description:
      "Innovative and sustainable architectural solutions tailored to your needs.",
    icon: "🏛️",
  },
  {
    id: 2,
    title: "Interior Design",
    description:
      "Creating beautiful and functional interior spaces that reflect your style.",
    icon: "🛋️",
  },
  {
    id: 3,
    title: "Urban Planning",
    description:
      "Comprehensive urban planning services to develop sustainable and livable cities.",
    icon: "🌆",
  },
  {
    id: 4,
    title: "Consulting Services",
    description:
      "Expert consulting to guide your project from concept to completion.",
    icon: "📝",
  },
];
const Services = () => {
  return (
    <div
      id="Services"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-white  ">
          <span className="relative">
            <span className="relative z-10">Our</span>
            <span className="absolute inset-0 border-b-4 border-yellow-500 transform translate-y-3"></span>
          </span>{" "}
          <span className="text-yellow-500">Services</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="relative rounded-lg overflow-hidden p-6 bg-transparent border border-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-center">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300">
          Show All Services
        </button>
      </div>
    </div>
  );
};

export default Services;
