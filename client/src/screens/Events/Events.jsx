import { React, useState } from "react";

import PageHeading from "../../components/PageHeading/PageHeading";
import EventCard from "../../components/EventCard/EventCard";
import EventTabLabels from "../../components/EventTabLabels/EventTabLabels";

import "./Events.css"
import EventTabSlider from "../../components/EventTabLabels/EventTabSlider/EventTabSlider";
const Events = ({
    //eventArr,

}) => {

    const [clickedImage, setClickedImage] = useState(1)

    const EventArr = [
        
           {
            title: "Dev Meetup",
            miniTitle: "Meet our best web developers",
            description:
                "gear up for an exciting full stack web development meetup, featuring some of the best web developers of our college kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk k k k k k k   ",
            imageVariant : "uiux",
            AvatarSampleData: [
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
            ],
            TagsList: ["shadcn/aceternity", "bootstrap", "guidelines",],

            sideDetails1: {
                text1: "date & time",
                text2: "10th june",
                text3: "06:00-07:45 pm",
            },

            sideDetails2: {
                text1: "venue",
                text2: "ONLINE",
                text3: null,
            },
        },
           {
            title: "Blockchain",
            miniTitle: "Complete Rust Bootcamp",
            description:
                "gear up for an exciting full stack web development bootcamp, featuring some of the best web developers of our college  ",
            imageVariant : "uiux",
            AvatarSampleData: [
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
            ],
            TagsList: ["blockchain", "rust", "smart contracts",],

            sideDetails1: {
                text1: "date & time",
                text2: "10th june",
                text3: "06:00-07:45 pm",
            },

            sideDetails2: {
                text1: "venue",
                text2: "ONLINE",
                text3: null,
            }
        },
        {
            title: "Blockchain",
            miniTitle: "Complete Rust Bootcamp",
            description:
                "gear up for an exciting full stack web development bootcamp, featuring some of the best web developers of our college  ",
            imageVariant: "uiux",
            AvatarSampleData: [
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
            ],
            TagsList: ["blockchain", "rust", "smart contracts",],

            sideDetails1: {
                text1: "date & time",
                text2: "10th june",
                text3: "06:00-07:45 pm",
            },

            sideDetails2: {
                text1: "venue",
                text2: "ONLINE",
                text3: null,
            }
        },
        {
            title: "Blockchain",
            miniTitle: "Complete Rust Bootcamp",
            description:
                "gear up for an exciting full stack web development bootcamp, featuring some of the best web developers of our college  ",
            imageVariant: "uiux",
            AvatarSampleData: [
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
            ],
            TagsList: ["blockchain", "rust", "smart contracts",],

            sideDetails1: {
                text1: "date & time",
                text2: "10th june",
                text3: "06:00-07:45 pm",
            },

            sideDetails2: {
                text1: "venue",
                text2: "ONLINE",
                text3: null,
            }
        },
        {
            title: "Blockchain",
            miniTitle: "Complete Rust Bootcamp",
            description:
                "gear up for an exciting full stack web development bootcamp, featuring some of the best web developers of our college  ",
            imageVariant: "uiux",
            AvatarSampleData: [
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
            ],
            TagsList: ["blockchain", "rust", "smart contracts",],

            sideDetails1: {
                text1: "date & time",
                text2: "10th june",
                text3: "06:00-07:45 pm",
            },

            sideDetails2: {
                text1: "venue",
                text2: "ONLINE",
                text3: null,
            }
        },
        {
            title: "Blockchain",
            miniTitle: "Complete Rust Bootcamp",
            description:
                "gear up for an exciting full stack web development bootcamp, featuring some of the best web developers of our college  ",
            imageVariant: "uiux",
            AvatarSampleData: [
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
                { name: "Rishab dugar bhaiya", img: "profile.jpg" },
            ],
            TagsList: ["blockchain", "rust", "smart contracts",],

            sideDetails1: {
                text1: "date & time",
                text2: "10th june",
                text3: "06:00-07:45 pm",
            },

            sideDetails2: {
                text1: "venue",
                text2: "ONLINE",
                text3: null,
            }
        }
    ]

    const handleClick = (val) => {
        setClickedImage(val)
    }

    return (<div className="Event-wrapper page">
        <div className="bg">
            <img src="/assets/bg/home_bg.png" alt="" />
        </div>
        <div className="eventsBox" >

            <div className="eventCard">
                <div className="event-header">
                    <PageHeading text={"EVENTS"} />
                </div>
                <EventCard
                    {...EventArr[clickedImage - 1]}
                />
                
            </div>

            <div className="eventLabels" >
                <div className="eventLabelsBoxes" >
                    {EventArr.map((e, i) =>
                        < EventTabLabels key={i}
                            title={e.title}
                            miniTitle={e.miniTitle}
                            isClicked={clickedImage === i + 1}
                            onClick={() => setClickedImage(i + 1)}
                        />
                    )}
                </div>

                <div className="eventLabelsSlider" >
                    <EventTabSlider onClick={handleClick} imageNumber={clickedImage} totalImages={EventArr.length} />
                </div>


            </div>
        </div>

    </div>)
};

export default Events;
