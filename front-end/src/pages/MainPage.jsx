import { Routes, Route } from "react-router-dom";

import HomePage from "./sub-pages/HomePage";
import AboutPage from "./sub-pages/AboutPage";
import PortfolioPage from "./sub-pages/PortfolioPage";
import ProjectPage from "./sub-pages/ProjectPage";
import SignUpPage from "./sub-pages/SignUpPage";
import EmailVerificationLandingPage from "./sub-pages/EmailVerificationLandingPage";
import CheckEmailVerificationPage from "./sub-pages/CheckEmailVerificationPage";
import EmailVerificationSuccessPage from "./sub-pages/EmailVerificationSuccessPage";
import EmailVerificationFailPage from "./sub-pages/EmailVerificationFailPage";
import LogInPage from "./sub-pages/LogInPage";
import GoogleSignInSuccessPage from "./sub-pages/GoogleSignInSuccessPage";
import GoogleSignInFailPage from "./sub-pages/GoogleSignInFailPage";
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
          <Route path="/google-sign-in-success" element={<GoogleSignInSuccessPage />} />
          <Route path="/google-sign-in-fail"    element={<GoogleSignInFailPage />} />
          <Route path="/*"                      element={<NotFoundPage />} />
        </Routes>
      </>
    );
};

export default MainPage;