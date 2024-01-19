import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";
import React, { useEffect } from 'react';
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);
  return (
    <div>
      <Header />
      <div
        className="container-fluid" data-aos="fade-in"
        style={{ backgroundColor: "#ffD700"}}
      >
        <Home />
        <About />
        <Service />
      </div>
      <Footer />
    </div>
  );
}

export default App;
