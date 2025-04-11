import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import MainWrapper from "../src/components/Layout/MainWrapper/MainWrapper";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import Services from "./pages/Services/Services"
import Stack from "./pages/Stack/Stack"

function App() {
  return (
    <Router>
      <GlobalStyles />
      <MainWrapper>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
           <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </MainWrapper>
    </Router>
  );
}

export default App;
