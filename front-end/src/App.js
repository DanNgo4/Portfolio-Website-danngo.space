import { HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import NavBar from "./components/NavBar";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";

function App() {
  const history = createBrowserHistory();

  return (
    <HashRouter history={history}>
      <div className="App">
        <NavBar />
        <Pages />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;