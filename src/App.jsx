import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products';
import Categories from './components/Categories';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100
    }, []);
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Categories />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
