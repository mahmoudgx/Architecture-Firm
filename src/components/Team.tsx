const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "Manager Director",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "John Doe",
      position: "Technical Director",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://images.unsplash.com/photo-1548946526-f69e2424cf45?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Jane Doe",
      position: "Creative Director",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "John Doe",
      position: "Chief Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://images.unsplash.com/photo-1621905252472-943afaa20e20?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Jane Doe",
      position: "Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://images.unsplash.com/photo-1554727242-741c14fa561c?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "John Doe",
      position: "Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Jane Doe",
      position: "Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661411365454-da1984968fc8?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "John Doe",
      position: "Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://images.unsplash.com/photo-1599566147214-ce487862ea4f?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div
      id="Team"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-white">
          <span className="relative">
            <span className="relative z-10">Our</span>
            <span className="absolute inset-0 border-b-4 border-yellow-500 transform translate-y-3"></span>
          </span>{" "}
          <span className="text-yellow-500">Team</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-center">
            <div className="mr-8 ">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 rounded-md object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl text-white font-semibold">
                {member.name}
              </h3>
              <p className="text-white mb-2">{member.position}</p>
              <p className="text-white">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
