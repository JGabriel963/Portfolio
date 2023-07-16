import Container from "./components";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Works from "./components/Works";


export default function App() {
  return (
    <Container>
      <Header />
      <Nav />
      <About />
      <Works />
      <Contact />
    </Container>
  )
}