import { Routes, Route } from "react-router-dom";

import HomePage from "./sub_pages/HomePage";
import AboutPage from "./sub_pages/AboutPage";
import PortfolioPage from "./sub_pages/PortfolioPage";
import ProjectPage from "./sub_pages/ProjectPage";
import FeedbackPage from "./sub_pages/FeedbackPage";
import NotFoundPage from "./sub_pages/NotFoundPage";

const MainPage = () => {
    return (
        <Routes>
          <Route path="/"                       element={<HomePage />} />
          <Route path="/about"                  element={<AboutPage />} />
          <Route path="/portfolio"              element={<PortfolioPage />} />
          <Route path="/portfolio/:projectName" element={<ProjectPage />} />
          <Route path="/feedback"               element={<FeedbackPage />} />
          <Route path="/*"                      element={<NotFoundPage />} />
        </Routes>
    );
};

export default MainPage;