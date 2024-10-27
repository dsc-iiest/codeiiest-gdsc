import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "../Button/Button";
import "./EventCardMobile.css";

const intersect = "/assets/thumbnail/uiux.png";
const calendar = "/assets/icons/Calendar.png";
const clock = "/assets/icons/Time.png";

const EventCardMobile = () => {
    const handleSubmit = () => {
        console.log("Button clicked");
    };

    return (
        <div className="event-card-container">
            <div className="content-container">
                {/* Intersect Image */}
                <img className="intersect-image" src={intersect} alt="Intersect" />

                <div className="text-section">
                    <div className="progress-container">
                        <ProgressBar total={5} progress={2} size="small" className="progress-bar" />
                        <div className="percentage-text">30%</div>
                    </div>

                    <div className="title-text">AI/ML Bootcamp</div>
                    {/* <div className="divider"></div> */}

                    {/* Clock Icon */}
                    <div className="icon-text-container clock">
                        <img className="icon clock-icon" src={clock} alt="clock-icon" />
                        <div className="info-text">06:00-07:45 pm</div>
                    </div>

                    {/* Calendar Icon */}
                    <div className="icon-text-container calendar">
                        <img className="icon calendar-icon" src={calendar} alt="calendar-icon" />
                        <div className="info-text">10th June</div>
                    </div>

                    {/* Know More Button */}
                    <Button
                        variant="outlined"
                        size="small"
                        innerHtml="Know More"
                        onClick={handleSubmit}
                        className="know-more-button"
                    />
                </div>
            </div>
        </div>
    );
};

export default EventCardMobile;
