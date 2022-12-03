import React from "react";
import Navbar from "./Components/Navbar";
import DTS from "./Sections/DTS";
import Hero from "./Sections/Hero";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DTS />
    </>
  );
}

export default Home;
