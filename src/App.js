import "./App.css";
import { useEffect } from "react";
import MainContent from "./components/mainContent/MainContent";
import About from "./components/about/About";
import Interests from "./components/interests/Interests";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    document.title = "Seif Nageh";
  }, []);
  return (
    <div className="card">
      <MainContent />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
