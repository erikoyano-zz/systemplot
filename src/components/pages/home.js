import React from "react";
import Access from "../Access/Access";
import Message from "../Message/Message";
import Jobs from "../Jobs/Jobs";
import About from "../About/About.js";
import HeroSection from "../HeroSection/HeroSection";
import Gaiyo from "../Gaiyo/Gaiyo";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Message />
      <Jobs />
      <Gaiyo />
      <Access />
    </div>
  );
}

export default Home;
