import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "../src/components/pages/Home";
import Career from "../src/components/pages/Career";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/career" component={Career} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
