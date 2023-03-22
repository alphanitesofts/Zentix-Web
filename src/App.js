import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Body/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Body/Footer";
import Members from "./Components/Members";
import MarketingTool from "./Components/MarketingTool";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

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

          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
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
