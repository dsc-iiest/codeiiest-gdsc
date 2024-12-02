import React from "react";
import "./ChapterContent.css";
import { motion } from "framer-motion";
import { duration } from "@mui/material";
import { del, i } from "framer-motion/client";
const delay = 0;
const iconVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
            mass: 1,
            stiffness: 200,
        },
    },
};


const Icon = ({ iconName, byline }) => {
  
    return (
        <motion.div
            variants={iconVariants}
            className="icon-wrapper">
            <img src={`/assets/icons/${iconName}.png`} />
            <p>{byline}</p>
        </motion.div>
    );
};

const ChapterContent = ({ data }) => {
    // console.log("Yahoo");

    // console.log(data);
    const Content = data.chapterContent
    // console.log(Content);
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,

            transition: {
                delay:delay,
                delayChildren: delay,
                staggerChildren: 0.2,
            },
        },
    };
    const containerVariants2 = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,

            transition: {
                delay: delay+0.7,
                delayChildren: delay+0.7,
                staggerChildren: 0.2,
            },
        },
    };
    const containerVariants3 = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,

            transition: {
                delay: delay + 0.7,
                delayChildren: delay + 1,
                staggerChildren: 0.2,
            },
        },
    };


    const width = Content.title === "FUSION FORCE" ? 9 : 4.5;
    return (
        <motion.div
            className="chapter-content">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="section-1">
                <Icon iconName={Content.iconset[0].icon} byline={Content.iconset[0].byline} />
                <Icon iconName={Content.iconset[1].icon} byline={Content.iconset[1].byline} />
                <Icon iconName={Content.iconset[2].icon} byline={Content.iconset[2].byline} />
                <Icon iconName={Content.iconset[3].icon} byline={Content.iconset[3].byline} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                    opacity: 1, y: 0,
                    transition: {
                        delay:delay+0.5,
                        duration: 2.8, 
                        type: "spring",
                        damping: 10,
                        mass: 1,
                        stiffness: 200,
                    }
                }}
                className="section-2">{Content.title}</motion.div>
            <motion.div 
            variants={containerVariants2}
            initial="hidden"
            animate="visible"
            className="section-3">
                <motion.div 
                variants={iconVariants}
                className="typography">
                    <div className="heading">{Content.highlight.heading}</div>
                    <p style={Content.highlight.bylineProps}>{Content.highlight.byline}</p>
                </motion.div>
                <div className="image">
                    <motion.img 
                    variants={iconVariants}
                    style={{ width: width + "em" }} src={`/assets/icons/${Content.highlight.icon}.png`} />
                    <div className="image-label">{Content.highlight.iconheading}</div>
                    <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    >{Content.highlight.iconbyline}</motion.p>
                </div>
            </motion.div>
            <motion.div 
                variants={containerVariants3}
                initial="hidden"
                animate="visible"
                className="section-4">
                <motion.p
                variants={iconVariants}
                >{Content.description}</motion.p>
                <motion.p
                variants={iconVariants}
                >{Content.byline}</motion.p>
            </motion.div>
            <motion.div 
            className="image">
                <img style={{ width: width + "em" }} src={`/assets/icons/${Content.highlight.icon}.png`} />
                <div className="image-label">{Content.highlight.iconheading}</div>
                <p>{Content.highlight.iconbyline}</p>
            </motion.div>
        </motion.div>
    );
};

export default ChapterContent;
