import { Routes, Route } from "react-router-dom";

import HomePage from "./sub-pages/HomePage";
import AboutPage from "./sub-pages/AboutPage";
import PortfolioPage from "./sub-pages/PortfolioPage";
import ProjectPage from "./sub-pages/ProjectPage";
/* import FeedbackPage from "./sub-pages/FeedbackPage";  */
import SignUpPage from "./sub-pages/SignUpPage";
import EmailVerificationLandingPage from "./sub-pages/EmailVerificationLandingPage";
import CheckEmailVerificationPage from "./sub-pages/CheckEmailVerificationPage";
import EmailVerificationSuccessPage from "./sub-pages/EmailVerificationSuccessPage";
import EmailVerificationFailPage from "./sub-pages/EmailVerificationFailPage";
import LogInPage from "./sub-pages/LogInPage";
import NotFoundPage from "./sub-pages/NotFoundPage";

import ScrollToTop from "../components/ScrollToTop";

const MainPage = () => {
    return (
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/"                       element={<HomePage />} />
          <Route path="/about"                  element={<AboutPage />} />
          <Route path="/portfolio"              element={<PortfolioPage />} />
          <Route path="/portfolio/:projectID"   element={<ProjectPage />} />
          <Route path="/sign-up"                element={<SignUpPage />} />
          <Route path="/verify-email-landing"   element={<EmailVerificationLandingPage />} />
          <Route path="/verify-email"           element={<CheckEmailVerificationPage />} />
          <Route path="/verify-email-success"   element={<EmailVerificationSuccessPage />} />
          <Route path="/verify-email-fail"      element={<EmailVerificationFailPage />} />
          <Route path="/log-in"                 element={<LogInPage />} />
          {/* <Route path="/feedback"               element={<FeedbackPage />} /> */}
          <Route path="/*"                      element={<NotFoundPage />} />
        </Routes>
      </>
    );
};

export default MainPage;