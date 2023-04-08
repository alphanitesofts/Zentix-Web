import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Body/Navbar";
import Footer from "./Components/Body/Footer";
import Main from './Components/Maincomponents/Main'
import Members from './Components/Maincomponents/Members'
import MarketingTool from './Components/Maincomponents/MarketingTool'
import FAQ from './Components/Maincomponents/FAQ'
import Contact from './Components/Maincomponents/Contact'
import Shop from './Components/Maincomponents/Shop'

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
        </Routes>
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
