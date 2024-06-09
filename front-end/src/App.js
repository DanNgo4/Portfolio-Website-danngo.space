import { HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import NavBar from "./components/NavBar";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";

function App() {
  const history = createBrowserHistory();

  return (
    <HashRouter history={history}>
      <div className="m-0 text-[#212124] bg-[#D3FFB3] text-[120%]">
        <NavBar />
        <Pages />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;