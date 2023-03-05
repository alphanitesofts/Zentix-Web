import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./Components/Homepage/Hero";
import Navbar from "./Components/Body/Navbar";
import PreLoader from "./Components/Body/PreLoader";
import Main from "./Components/Main";
import Facts from "./Components/Homepage/Facts";
import Services from "./Components/Homepage/Services";
import Pricing from "./Components/Homepage/Pricing";
import Quotes from "./Components/Homepage/Quotes";
import Team from "./Components/Homepage/Team";
import Footer from "./Components/Body/Footer";
import Testimonial from "./Components/Homepage/Testimonial";
import About from "./Components/Homepage/About";
import Adress from "./Components/Homepage/Adress";
import NewsLetter from "./Components/Homepage/NewsLetter";
import Members from "./Components/Members";
import MarketingTool from "./Components/MarketingTool";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";
import BuyItem from "./Components/BuyItem";
import Form from "./Components/Form";

function App() {
  return (
    <div>
      {/* <PreLoader/> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<Members />} />
          <Route path="/marketing-tool" element={<MarketingTool />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/buy-item" element={<BuyItem />} />
          <Route path="/buy-form" element={<Form />} />
        </Routes>
        <Footer />
      </Router>
      {/* <Main /> */}
      {/* <Features/> */}
      {/* 
      <Facts/>
      <Services/>
      <Pricing/>
      <Quotes/> */}
    </div>
  );
}

export default App;
