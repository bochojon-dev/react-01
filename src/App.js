import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Featured from "./components/featured/Featured";
import Explore from "./components/explore/Explore";
import Xiaomi from "./components/xiaomi/Xiaomi";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Featured />
      <Explore />
      <Xiaomi />
      <Footer />
    </div>
  );
}

export default App;
