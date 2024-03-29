import "./App.css";
import FootBox from "./footBox";
import GeekyWeatherPCard from "./PCard/GeekyWeatherPCard";
import SShinePCard from "./PCard/SShinePCard";
import LilButlerPCard from "./PCard/LilButlerPCard";
import AboutMeCard from "./AboutMeCard";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";


function App() {
  return (
    <div className="">
      <h1 id="top">Terra Claycamp</h1>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="nav-bar">
            <Nav.Link href="#about_me">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="/TerraClaycampResume.pdf">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h3 id="projects">Projects</h3>
      <GeekyWeatherPCard />
      <SShinePCard />
      <LilButlerPCard />

      <h3 id="about_me">About Me</h3>
      <AboutMeCard />
      <h3  className="contact" id="contact">Contact</h3>
      <FootBox />
    </div>
  );
}

export default App;
