import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import MainWrapper from "../src/components/Layout/MainWrapper/MainWrapper";
import Menu from "./components/Layout/Menu/Menu";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <MainWrapper>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainWrapper>
    </Router>
  );
}

export default App;
