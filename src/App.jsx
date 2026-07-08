import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import MainWrapper from "../src/components/Layout/MainWrapper/MainWrapper";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import ScrollToTop from "./utils/scrollToTop";
import { LenisProvider } from "./context/LenisContext";

const About = lazy(() => import("./pages/About/About"));
const Works = lazy(() => import("./pages/Works/Works"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Services = lazy(() => import("./pages/Services/Services"));
const Stack = lazy(() => import("./pages/Stack/Stack"));
const Documentation = lazy(() => import("./pages/Documentation/Documentation"));
const SpeedInsights = lazy(() =>
  import("@vercel/speed-insights/react").then((module) => ({
    default: module.SpeedInsights,
  }))
);

function App() {
  const [loadInsights, setLoadInsights] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setLoadInsights(true), {
        timeout: 2000,
      });

      return () => window.cancelIdleCallback(id);
    }

    const id = window.setTimeout(() => setLoadInsights(true), 2000);

    return () => window.clearTimeout(id);
  }, []);

  return (
    <LenisProvider>
      <Router>
        <ScrollToTop />
        <GlobalStyles />
        <MainWrapper>
          <Menu />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/stack" element={<Stack />} />
              <Route path="/documentation/:id" element={<Documentation />} />
            </Routes>
          </Suspense>
        </MainWrapper>
      </Router>
      {loadInsights && (
        <Suspense fallback={null}>
          <SpeedInsights />
        </Suspense>
      )}
    </LenisProvider>
  );
}

export default App;
