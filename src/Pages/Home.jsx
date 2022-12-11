import React from "react";
import History from "./Components/History";
import Navbar from "./Components/Navbar";
import DTS from "./Sections/DTS";
import Hero from "./Sections/Hero";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DTS />
      <History />
    </>
  );
}

export default Home;
