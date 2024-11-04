import React from "react";
import "./ChapterContent.css";

const Icon = ({ iconName, byline }) => {
    return (
        <div className="icon-wrapper">
            <img src={`/assets/icons/${iconName}.png`} />
            <p>{byline}</p>
        </div>
    );
};

const ChapterContent = ({ data }) => {
    // console.log("Yahoo");
    
    // console.log(data);
    const Content = data.chapterContent
    // console.log(Content);
    
    const width = Content.title === "FUSION FORCE" ? 9 : 4.5;
    return (
        <div className="chapter-content">
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
                    <p style={Content.highlight.bylineProps}>{Content.highlight.byline}</p>
                </div>
                <div className="image">
                    <img style={{ width: width + "em" }} src={`/assets/icons/${Content.highlight.icon}.png`} />
                    <div className="image-label">{Content.highlight.iconheading}</div>
                    <p>{Content.highlight.iconbyline}</p>
                </div>
            </div>
            <div className="section-4">
                <p>{Content.description}</p>
                <p>{Content.byline}</p>
            </div>
            <div className="image">
                <img style={{ width: width + "em" }} src={`/assets/icons/${Content.highlight.icon}.png`} />
                <div className="image-label">{Content.highlight.iconheading}</div>
                <p>{Content.highlight.iconbyline}</p>
            </div>
        </div>
    );
};

export default ChapterContent;
