import React from "react";
import "./style.css";

const Icon = ({ iconName, byline }) => {
  return (
    <div className="icon-wrapper">
      <img src= {`./assets/icons/${iconName}.png`} />
      <p>{byline}</p>
    </div>
  );
};

const ChapterContent = ({Content}) => {
  return (
    <div className="wrapper">
      <div className="section-1">
        <Icon iconName={Content.iconset[0].icon} byline={Content.iconset[0].byline} />
        <Icon iconName={Content.iconset[1].icon} byline={Content.iconset[1].byline} />
        <Icon iconName={Content.iconset[2].icon} byline={Content.iconset[2].byline} />
        <Icon iconName={Content.iconset[3].icon} byline={Content.iconset[3].byline} />
      </div>
      <div className="section-2">{Content.title}</div>
      <div className="section-3">
        <div className="typography">
          <div className="heading">{Content.highlight.heading}</div>
          <p>{Content.highlight.byline}</p>
        </div>
        <div className="image">
          <img src={`./assets/icons/${Content.highlight.icon}.png`} />
          <h5>{Content.highlight.iconheading}</h5>
          <p>{Content.highlight.iconbyline}</p>
        </div>
      </div>
      <div className="section-4">
        <p>{Content.description}</p>
        <p>{Content.byline}</p>
      </div>
    </div>
  );
};

export default ChapterContent;
