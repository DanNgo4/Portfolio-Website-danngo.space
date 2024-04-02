import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";

function App() {
  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
      <div className="App">
        <NavBar />
        <Pages />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;