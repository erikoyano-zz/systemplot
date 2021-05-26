import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <h1>Hello World</h1>
      <Footer />
    </>
  );
}

export default App;
