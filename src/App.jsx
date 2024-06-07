import Carousel from "./components/Carousel/Carousel";
import { InformationApp } from "./components/Details/Data";
import Details from "./components/Details/Details";
import Features from "./components/Features/Features";
import Features_Long from "./components/Features_Long/Features_Long";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";
import Testimonial from "./components/Tertimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Testimonial />
      <Details />
      <Features_Long />
      <Carousel />
      <Team />
      <Footer />
      <button className="scroll-to-top" onClick={scrollToTop}>
        <i className="fa-solid fa-chevron-up" />
      </button>
    </div>
  );
}

export default App;
