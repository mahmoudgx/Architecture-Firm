const projectsData = [
  {
    id: 1,
    title: "Glass Building",
    description: "Madrid",
    imageUrl:
      "https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Three Multicolored Buildings",
    description: "Istanbul",
    imageUrl:
      "https://images.unsplash.com/photo-1568878801942-6fc477a748db?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Blue and Yellow Curtain Wall Building",
    description: "London",
    imageUrl:
      "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Blue and Gray Concrete Building",
    description: "Cambridge",
    imageUrl:
      "https://images.unsplash.com/photo-1560131653-63257db002c8?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const Projects = () => {
  return (
    <div
      id="Projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-white">
          <span className="relative">
            <span className="relative z-10">Our</span>
            <span className="absolute inset-0 border-b-4 border-yellow-500 transform translate-y-3"></span>
          </span>{" "}
          <span className="text-yellow-500">Projects</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="relative rounded-lg overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-[400px] rounded-md transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 text-white bg-yellow-500 bg-opacity-50 hover:opacity-100">
              <h3 className="text-lg font-semibold text-center ">
                {project.title}
              </h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300">
          Show All Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
