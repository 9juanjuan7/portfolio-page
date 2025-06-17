import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";

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
      <section id="experience"><Experience /></section>
      <hr className="section-divider" /> {/* Divider */}
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer /></section>
    </div>
  );
};

export default App;
