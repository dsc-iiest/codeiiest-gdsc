import { React, useEffect, useRef, useState } from "react";

import PageHeading from "../../components/PageHeading/PageHeading";
import EventCard from "../../components/EventCard/EventCard";
import EventTabLabels from "../../components/EventTabLabels/EventTabLabels";

import EventsData from "../../assets/data/events.json"

import "./Events.css";
import EventTabSlider from "../../components/EventTabLabels/EventTabSlider/EventTabSlider";
const Events = () => {
    const [clickedImage, setClickedImage] = useState(1);

    const [tabNum, setTabNum] = useState(0);
    const [tabDelta, setTabDelta] = useState(0);

    const [indicators, setIndicators] = useState(0);
    const handleClick = (val) => {
        setClickedImage(val);
    };

    const containerRef = useRef(null);

    useEffect(() => {
        const available = containerRef.current.offsetHeight;
        setTabNum(() => Math.floor(available / 96));
        console.log(tabNum);
    }, [containerRef.current]);

    useEffect(()=>{
        setIndicators(() => Math.ceil(EventsData.length / tabNum));
        console.log(indicators);
    }, [tabNum, containerRef.current])

    return (
        <div className="Event-wrapper page">
            <div className="bg">
                <img src="/assets/bg/home_bg.png" alt="" />
            </div>
            <PageHeading text={"EVENTS"} />

            <div className="eventsBox inner-content">
                <div className="eventCard">
                    <EventCard {...EventsData[clickedImage - 1]} />
                </div>
                <div ref={containerRef} className="eventLabels">
                    <div
                        className="eventLabelsBoxes"
                        style={
                            {
                                // height: `${tabNum*16}px`
                            }
                        }
                    >
                        {EventsData.slice(0 + tabDelta, tabNum + tabDelta).map((e, i) => (
                            <EventTabLabels
                                key={i}
                                title={e.title}
                                miniTitle={e.miniTitle}
                                isClicked={clickedImage === i + 1}
                                onClick={() => setClickedImage(i + 1)}
                            />
                        ))}
                    </div>
                    <div className="eventLabelsSlider">
                        {/* <EventTabSlider
                            onClick={handleClick}
                            imageNumber={clickedImage}
                            totalImages={EventsData.length}
                        /> */}
                        {tabNum!==0 && [...Array(Math.ceil(EventsData.length / tabNum))].map((_, index) => (
                            <div className={"indicator-bar" + (Math.floor(tabDelta/tabNum)===index?" selected":"")} onClick = {()=>setTabDelta(index*tabNum)} key={index}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
