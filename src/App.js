import "./App.css";
import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Posts from "./Components/Posts";
import PostSection from "./Components/PostSection";
import Map from "./Components/Map";

function App() {
  return (
    <div className="app">
      <Header />;
      <HeroSection />;
      <Filter />;
      <PostSection />;
      <Footer />;
    </div>
  );
}

export default App;
