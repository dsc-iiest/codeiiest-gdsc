import React from "react";
import "./about.css";
import NamecardV from "../../components/namecard/NameCardV";
import Carousel from "../../components/Carousel/Carousel";
import PageHeading from "../../components/PageHeading/PageHeading";
import chaptersData from '../../assets/data/chapters.json';

const members = chaptersData.chapters[0].chapterContent.coreMembers.map((member) => (
  <NamecardV
    key={member.name} 
    name={member.name}
    codeiiest={member.role_in_codeiiest}
    gdsc={member.role_in_gdg}
    profilepic={member.image}
    descrip={member.tagline}
  />
));

const About = () => {
  return (
    <div className="about-wrapper page">
      <div className="bg">
        <img src="/assets/bg/home_bg.png" alt="" />
      </div>
      <PageHeading text="THE TEAM" />
      <Carousel items={members} />
    </div>
  );
};

export default About;
