const Footer = () => {
  return (
    <footer className="bg-black py-5 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
          <p className="text-md text-center sm:text-left">
            &copy; 2024 Architecture Firm. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-md mr-4 hover:text-yellow-500">
              Privacy Policy
            </a>
            <a href="#" className="text-md hover:text-yellow-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
