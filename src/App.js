import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Access from "./components/Access/Access";
import Message from "./components/Message/Message";
import Jobs from "./components/Jobs/Jobs";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Message />
      <Jobs />
      <Access />
      <Footer />
    </>
  );
}

export default App;
