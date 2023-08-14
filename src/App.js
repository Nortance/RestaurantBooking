import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Hero from "./components/hero";
import Highlights from "./components/highlights";
import Testamonials from "./components/testamonials";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Main className="main-container">
        <Hero />
        <Highlights />
        <Testamonials />
        <About />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
