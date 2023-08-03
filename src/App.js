import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Main from "./components/main";
import Hero from "./components/hero";
import Highlights from "./components/highlights";
import Testamonials from "./components/testamonials";
import About from "./components/about";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header>
        <Nav></Nav>
      </Header>
      <Main>
        <Hero />
        <Highlights />
        <Testamonials />
        <About />
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
