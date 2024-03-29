import "./PrjCard.css";

export default function GeekyWeatherPCard() {
  return (
    <div className="project-card">
      <h4 className="project-title">Geeky Weather</h4>
      <div className="gkyWeather-thumbnail-container">
        <img
          src="/gkyWeatherThumb.png"
          alt="Geeky Weather App Thumbnail missing"
          className="pCard-thumbnail-gkyWeather"
        />
      </div>
      <div className="project-description">
        Geeky weather is an app that takes a city location input and gives a
        visual feed back of the requested city's current weather and a geeky
        planet that has similar weather and gives a quip.
      </div>
      <div className="project-links">
        <a href="https://github.com/invaderZimm77/Project_01-gkyWeather">
          Geeky Weather - GitHub
        </a>
      </div>
      <div className="project-links">
        <a href="https://invaderzimm77.github.io/Project_01-gkyWeather/">
          Geeky Weather - Deployed site
        </a>
      </div>
      <h4 className="project-title-re">Re Geeky Weather</h4>
      <div className="project-description">
        With this take of Geeky Weather, I have rebuilt the app with a more
        modern approach using React.js.
      </div>
      <div className="project-links">
        <a href="https://github.com/invaderZimm77/ReGeekyWeather">
          ReGeeky Weather - GitHub
        </a>
      </div>
      <div className="project-links">
        <a href="https://invaderzimm77.github.io/ReGeekyWeather/">
          ReGeeky Weather - Deployed site
        </a>
      </div>
    </div>
  );
}
