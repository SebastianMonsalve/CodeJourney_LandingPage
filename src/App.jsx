import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import { InformationApp } from "./components/Details/Data";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Details
        image={InformationApp.image}
        title={InformationApp.title}
        text={InformationApp.text}
      />
    </div>
  );
}

export default App;
