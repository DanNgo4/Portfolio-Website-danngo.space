import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/navigation/NavBar";
import MainPage from "./pages/MainPage";
import Footer from "./components/navigation/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="m-0 text-[#212124] bg-[#D3FFB3] text-[120%]">
        <NavBar />
        <MainPage />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;