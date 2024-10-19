import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutUs from "./component/AboutUs";
import Domains from "./component/Domains";
import Events from "./component/Events";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs/>
      <Domains/>
      <Events/>
      <Contact/>
    </div>
  );
};

export default App;
