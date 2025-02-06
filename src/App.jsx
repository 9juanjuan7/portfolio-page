import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <section id="home"><Home /></section>
      <hr className="section-divider" /> {/* Divider */}
      <section id="about"><About /></section>
      <hr className="section-divider" /> {/* Divider */}
      <section id="projects"><Projects /></section>
      <hr className="section-divider" /> {/* Divider */}
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer /></section>
    </div>
  );
};

export default App;
