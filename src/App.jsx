import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";


function App() {
  return (
    <>
      <Navbar />

      <div className="pt-20"> {/* Top padding for fixed navbar */}
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  );
}

export default App;
