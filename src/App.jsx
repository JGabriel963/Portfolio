import Container from "./components";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Works from "./components/Works";
import NavArrowUp from "./components/Nav/arrowUp";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

export default function App() {
  const [nav, setNav] = useState(false);

  const values = {
    nav: nav,
    setNav: setNav
  }

  return (
    <UserContext.Provider value={values}>
      <Container>
        <Header />
        {!nav ? <Nav /> : <NavArrowUp />}
        <About />
        <Works />
        <Contact />
      </Container>
    </UserContext.Provider>
  );
}
