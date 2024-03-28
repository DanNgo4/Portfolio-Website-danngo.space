import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import FeedbackPage from "./pages/FeedbackPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import ActivePage from "./components/ActivePage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ActivePage />
        <NavBar />

        <Routes>
          <Route path="/"           element={<HomePage />} />
          <Route path="/about"      element={<AboutPage />} />
          <Route path="/portfolio"  element={<PortfolioPage />} />
          <Route path="/feedback"   element={<FeedbackPage />} />
          <Route path="*"           element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
