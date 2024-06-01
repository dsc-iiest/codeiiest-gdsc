import React from "react";
import "./about.css";
import { NamecardVertical } from "../../components/namecard/namecard";
import { Carousel } from "@trendyol-js/react-carousel";

const About = () => {
    return (
        <div className="about page">
            <div className="heading">
                <span>&lt;</span>The Team<span>&gt;</span>
            </div>
            <div className="members">
                <Carousel show={5} slide={1} transition={0.5} className="team-carousel">
                    <NamecardVertical
                        name={"Nafis Adnan Mondal"}
                        codeiiest={"Development Lead"}
                        gdsc={"Development Lead"}
                        profilepic={"profilepic"}
                        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
                    />
                    <NamecardVertical
                        name={"Nafis Adnan Mondal"}
                        codeiiest={"Development Lead"}
                        gdsc={"Development Lead"}
                        profilepic={"profilepic"}
                        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
                    />
                    <NamecardVertical
                        name={"Nafis Adnan Mondal"}
                        codeiiest={"Development Lead"}
                        gdsc={"Development Lead"}
                        profilepic={"profilepic"}
                        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
                    />
                    <NamecardVertical
                        name={"Nafis Adnan Mondal"}
                        codeiiest={"Development Lead"}
                        gdsc={"Development Lead"}
                        profilepic={"profilepic"}
                        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
                    />
                    <NamecardVertical
                        name={"Nafis Adnan Mondal"}
                        codeiiest={"Development Lead"}
                        gdsc={"Development Lead"}
                        profilepic={"profilepic"}
                        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
                    />
                    <NamecardVertical
                        name={"Nafis Adnan Mondal"}
                        codeiiest={"Development Lead"}
                        gdsc={"Development Lead"}
                        profilepic={"profilepic"}
                        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
                    />
                    <NamecardVertical
                        name={"Nafis Adnan Mondal"}
                        codeiiest={"Development Lead"}
                        gdsc={"Development Lead"}
                        profilepic={"profilepic"}
                        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
                    />
                    <NamecardVertical
                        name={"Nafis Adnan Mondal"}
                        codeiiest={"Development Lead"}
                        gdsc={"Development Lead"}
                        profilepic={"profilepic"}
                        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
                    />
                    <NamecardVertical
                        name={"Nafis Adnan Mondal"}
                        codeiiest={"Development Lead"}
                        gdsc={"Development Lead"}
                        profilepic={"profilepic"}
                        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
                    />
                    <NamecardVertical
                        name={"Nafis Adnan Mondal"}
                        codeiiest={"Development Lead"}
                        gdsc={"Development Lead"}
                        profilepic={"profilepic"}
                        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
                    />
                    <NamecardVertical
                        name={"Nafis Adnan Mondal"}
                        codeiiest={"Development Lead"}
                        gdsc={"Development Lead"}
                        profilepic={"profilepic"}
                        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
                    />
                </Carousel>
            </div>
        </div>
    );
};

export default About;
