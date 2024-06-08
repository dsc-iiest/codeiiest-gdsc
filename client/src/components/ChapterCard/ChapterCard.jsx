import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./ChapterCard.css";
import { Box } from "@mui/material";

const styles = (variant) => ({
    background: `url("/assets/thumbnail/${variant}.png")`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    position: `absolute`,
    top: `0`,
    width: `100%`,
    height: `100%`,
    // border: "1px solid white"
});

const ChapterCard = ({ name }) => {

    var filename = "";
    for (let i of name) {
        if (i != " " && i != "/" && i != "&") {
            filename += i.toLowerCase();
        }
    }

    return (
        <Box
            className="chaptercard-wrapper"
        >
            <Box className="banner" style={styles(filename)}></Box>
            <Box className="name">{name}</Box>
        </Box>
    );
};

ChapterCard.propTypes = {
    name: PropTypes.string,
};

export default ChapterCard;
