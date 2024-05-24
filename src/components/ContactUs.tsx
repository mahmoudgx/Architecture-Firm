const ContactUs = () => {
  return (
    <div
      id="ContactUs"
      className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 bg-gray-900"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-white">
          <span className="relative">
            <span className="relative z-10">Contact</span>
            <span className="absolute inset-0 border-b-4 border-yellow-500 transform translate-y-3"></span>
          </span>{" "}
          <span className="text-yellow-500">Us</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 text-white">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Send us a Message</h3>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-yellow-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-yellow-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-last-name"
                  type="email"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
                  id="grid-password"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="w-full px-3 mt-6">
                <button
                  className="bg-white hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
