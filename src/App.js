import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Access from "./components/Access/Access";
import Message from "./components/Message/Message";
import Jobs from "./components/Jobs/Jobs";
import Career from "./components/pages/Career";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <About />
        <Message />
        <Jobs />
        <Switch>
          <Route path="/career" exact component={Career} />
        </Switch>
        <Access />
        <Footer />
      </Router>
    </>
  );
}

export default App;
