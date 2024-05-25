const PostsData = [
  {
    id: 1,
    title: "Hello World",
    author: "John Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Hello World",
    author: "John Doe",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1677105821967-2783da64db3b?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Hello World",
    author: "Jane Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1496564203457-11bb12075d90?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Blog = () => {
  return (
    <div
      id="Blog"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-white">
          <span className="relative">
            <span className="relative z-10">Our</span>
            <span className="absolute inset-0 border-b-4 border-yellow-500 transform translate-y-3"></span>
          </span>{" "}
          <span className="text-yellow-500">Blog</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {PostsData.map((post) => (
          <div
            key={post.id}
            className="relative flex h-[30rem] w-full max-w-[28rem] flex-col items-center justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 cursor-pointer"
            style={{
              backgroundImage: `url(${post.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-yellow-500/80 via-black/50"></div>
            </div>
            <div className="relative flex flex-col items-center p-6 px-6 py-14 md:px-12">
              <h2 className="mb-6 block  text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                {post.title}
              </h2>
              <h5 className="block mb-4  text-xl antialiased font-semibold leading-snug tracking-normal text-yellow-500">
                {post.author}
              </h5>
              <img
                alt={post.title}
                src={post.avatar}
                className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
