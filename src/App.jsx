import Carousel from "./components/Carousel/Carousel";
import { InformationApp } from "./components/Details/Data";
import Details from "./components/Details/Details";
import Features from "./components/Features/Features";
import Features_Long from "./components/Features_Long/Features_Long";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";
import Testimonial from "./components/Tertimonial/Testimonial";

function App() {
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
    </div>
  );
}

export default App;
