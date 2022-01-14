import "./App.css";
import FootBox from "./footBox";
import GeekyWeatherPCard from "./GeekyWeatherPCard";
import SShinePCard from "./SShinePCard";
import AboutMeCard from "./AboutMeCard";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";


function App() {
  return (
    <div className="">
      <h1>Terra Claycamp</h1>

      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <h3>Projects</h3>
      <GeekyWeatherPCard />
      <SShinePCard />

      <br />
      <a href="https://github.com/invaderZimm77/Little_Butler">Lil Butler</a>

      <h3>About Me</h3>
      <AboutMeCard />
      <h3>Contact</h3>
      <FootBox />
    </div>
  );
}

export default App;
