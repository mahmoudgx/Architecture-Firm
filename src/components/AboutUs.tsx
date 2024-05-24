import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="AboutUs"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-white">
          <span className="relative">
            <span className="relative z-10">About</span>
            <span className="absolute inset-0 border-b-4 border-yellow-500 transform translate-y-3"></span>
          </span>{" "}
          <span className="text-yellow-500">Us</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <p className="text-white text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
            velit a quam tincidunt dapibus. Integer ut mi vel dui malesuada
            cursus. Nullam quis arcu non nisi vestibulum gravida. Vivamus
            bibendum, est id vestibulum lacinia, enim orci viverra risus, et
            venenatis libero velit ac ipsum. Phasellus vel urna in urna
            hendrerit ultrices.
          </p>
          <p className="text-white text-lg">
            Praesent ut mauris vel metus lacinia facilisis. Duis consequat
            tortor nec velit molestie, eget mollis justo suscipit. Phasellus
            porttitor, nulla a bibendum posuere, nisi sem iaculis elit, id
            consequat risus urna nec nisl. Sed sit amet dignissim lacus, et
            tempus sem. Sed et ligula eu justo ullamcorper aliquet.
          </p>
        </div>
      </div>
      <div
        ref={ref}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        <div className="text-white">
          <h3 className="text-4xl font-extrabold">
            {inView ? <CountUp end={100} duration={5} /> : null}+
          </h3>
          <p className="text-lg">Projects Completed</p>
        </div>
        <div className="text-white">
          <h3 className="text-4xl font-extrabold">
            {inView ? <CountUp end={200} duration={5} /> : null}+
          </h3>
          <p className="text-lg">Satisfied Clients</p>
        </div>
        <div className="text-white">
          <h3 className="text-4xl font-extrabold">
            {inView ? <CountUp end={50} duration={5} /> : null}+
          </h3>
          <p className="text-lg">Awards Won</p>
        </div>
        <div className="text-white">
          <h3 className="text-4xl font-extrabold">
            {inView ? <CountUp end={10} duration={5} /> : null}+
          </h3>
          <p className="text-lg">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
