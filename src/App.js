import "./App.css";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header/Header";
import Reserve from "./Components/Reserve/Reserve";
import Services from "./Components/Services/Services";
import Story from "./Components/Story/Story";
function App() {
  return (
    <div className="App">
      <Header />
      <Story />
      <Services />
      <Reserve />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
