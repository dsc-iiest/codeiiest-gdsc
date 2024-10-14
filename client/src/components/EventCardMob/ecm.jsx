import intersect from "./assets/Intersect.svg";
import calendar from "./assets/Calendar.png";
import clock from "./assets/Wall Clock.png";
import loader from "./assets/load.png";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="content-container">
        <img
          className="intersect-image"
          src={intersect}
          alt="Intersect"
        />

        <div className="text-section">
          <div className="percentage-text">50%</div>

          <div className="title-text">Dev Camp</div>
          <div className="divider"></div>

          <img
            className="loader-image"
            src={loader}
            alt="load"
          />

          {/* Clock */}
          <div className="icon-text-container">
            <img
              className="icon"
              src={clock}
              alt="clock-icon"
            />
            <div className="info-text">06:00-07:45 pm</div>
          </div>

          {/* Calendar */}
          <div className="icon-text-container calendar">
            <img
              className="icon calendar-icon"
              src={calendar}
              alt="calendar-icon"
            />
            <div className="info-text">10th June</div>
          </div>

          {/* Know More Button */}
          <div className="know-more-button">
            <div className="button-text">Know more</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;