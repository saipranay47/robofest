import Events from "./components/Events";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Hero from "./Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Events />
      {/* <Timeline/> */}
      <Footer />
    </div>
  );
}

export default App;
