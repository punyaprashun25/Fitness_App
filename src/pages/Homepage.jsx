import React from 'react';
import { Navbar, Footer, Hero_section,Features, About, Contact} from '../components';
const Homepage = () => {
return (
    <>
      <Navbar/>
      <Hero_section/>
      <About/>
      <Features/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Homepage;
