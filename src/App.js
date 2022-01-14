import './App.css';
import FootBox from './footBox';
import GeekyWeatherPCard from './GeekyWeatherPCard';
import SShinePCard from './SShinePCard';
import AboutMeCard from './AboutMeCard';

function App() {
  return (
    <div className="">
      <h1>Terra Claycamp</h1>

      <h3>Projects</h3>
      <GeekyWeatherPCard/>
      <SShinePCard/>
      
      <br />
      <a href="https://github.com/invaderZimm77/Little_Butler">Lil Butler</a>

      <h3>About Me</h3>
      <AboutMeCard/>
      <h3>Contact</h3>
      <FootBox />
    </div>
  );
}

export default App;
