import { HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import NavBar from "./components/navigation/NavBar";
import MainPage from "./pages/MainPage";
import Footer from "./components/navigation/Footer";

const App = () => {
  const history = createBrowserHistory();

  return (
    <HashRouter history={history}>
      <div className="m-0 text-[#212124] bg-[#D3FFB3] text-[120%]">
        <NavBar />
        <MainPage />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;