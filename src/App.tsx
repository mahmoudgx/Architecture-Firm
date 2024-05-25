import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import Carousel from "./components/Carousel";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Team from "./components/Team";

const App = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <AboutUs />
      <Projects />
      <Services />
      <Team />
      <Blog />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
