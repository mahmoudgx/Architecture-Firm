import AboutUs from "./components/AboutUs";
import Carousel from "./components/Carousel";
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
    </>
  );
};

export default App;
