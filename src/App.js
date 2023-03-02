import './App.css';
import Hero from './Components/Homepage/Hero';
import Navbar from './Components/Homepage/Navbar';
import PreLoader from './Components/Homepage/PreLoader';
import Main from './Components/Main';
import Facts from './Components/Homepage/Facts';
import Services from './Components/Homepage/Services';
import Features from './Components/Homepage/Features';
import Pricing from './Components/Homepage/Pricing';
import Quotes from './Components/Homepage/Quotes';
import Team from './Components/Homepage/Team';
import Footer from './Components/Homepage/Footer';
import Testimonial from './Components/Homepage/Testimonial';
import About from './Components/Homepage/About';
import Adress from './Components/Homepage/Adress';

function App() {
  return (
    <div>
      {/* <PreLoader/> */}
      <Navbar/>
      <Adress/>
      <Hero/>
      <About/>
      <Facts/>
      <Services/>
      <Features/>
      <Pricing/>
      <Testimonial/>
      <Quotes/>
      <Team/>
      <Footer/>
      <Main/>

    </div>
  );
}

export default App;
