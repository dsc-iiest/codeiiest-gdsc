import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./ProjectCard.css";
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

const ProjectCard = ({ name }) => {

    var filename = "";
    for (let i of name) {
        if (i != " " && i != "/" && i != "&") {
            filename += i.toLowerCase();
        }
    }

    return (
        <Box
            className="projectcard-wrapper"
        >
            <Box className="banner" style={styles(filename)}></Box>
            <Box className="name">{name}</Box>
        </Box>
    );
};

ProjectCard.propTypes = {
    name: PropTypes.string,
};

export default ProjectCard;
