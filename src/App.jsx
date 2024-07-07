import React from "react";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <Main/>
      <Footer/>
    </>
  );
}
