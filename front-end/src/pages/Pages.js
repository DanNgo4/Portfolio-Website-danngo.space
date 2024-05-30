import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import PortfolioPage from "./PortfolioPage";
import FeedbackPage from "./FeedbackPage";
import NotFoundPage from "./NotFoundPage";

const Pages = () => {
    return (
        <Routes>
          <Route path="/"           element={<HomePage />} />
          <Route path="/about"      element={<AboutPage />} />
          <Route path="/portfolio"  element={<PortfolioPage />} />
          <Route path="/feedback"   element={<FeedbackPage />} />
          <Route path="/*"          element={<NotFoundPage />} />
        </Routes>
    );
};

export default Pages;