import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Pages />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;