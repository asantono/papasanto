import { useRef } from "react";
import CarouselOne from "./components/carousel/CarouselOne";
import Contact from "./components/contact/Contact";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import "./css/main.css";
const App = () => {
  const ref = useRef(null);

  const socialRef = useRef(null);

  const goToRef = () => {
    ref.current.scrollIntoView({
      block: "start",
      inline: "center",
      behavior: "smooth",
    });
  };

  const goToSocialRef = () => {
    socialRef.current.scrollIntoView({
      block: "start",
      inline: "center",
      behavior: "smooth",
    });
  };

  return (
    <div>
      <CarouselOne func={goToRef} funcTwo={goToSocialRef} />
      <Portfolio ref={ref} />
      <Courses />
      <Contact ref={socialRef} />
      <Footer />
    </div>
  );
};

export default App;
