import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Hero from "./components/hero";
import Highlights from "./components/highlights";
import Testamonials from "./components/testamonials";
import About from "./components/about";
import Footer from "./components/footer";
import AboutPage from "./components/aboutPage";
import MenuPage from "./components/menuPage";
import BookingPage from "./components/bookingPage";
import OrderOnlinePage from "./components/orderOnlinePage";
import LoginModal from "./components/loginModal";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container">
      <Header toggleModal={toggleModal} />
      {isModalOpen && <LoginModal onClose={toggleModal} />}
      <Main className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Highlights />
                <Testamonials />
                <About />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservation" element={<BookingPage />} />
          <Route path="/orderonline" element={<OrderOnlinePage />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
