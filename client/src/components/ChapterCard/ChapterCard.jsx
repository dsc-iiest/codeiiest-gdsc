import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./ChapterCard.css";
import { Box } from "@mui/material";

const styles = (variant) => ({
    background: `url("../../../public/assets/thumbnail/${variant}.png")`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    position: `absolute`,
    top: `0`,
    width: `100%`,
    height: `100%`,
    // border: "1px solid white"
});

const ChapterCard = ({ name }) => {
    const width = window.innerWidth;
    var filename = "";
    for (let i of name) {
        if (i != " " && i != "/" && i != "&") {
            filename += i.toLowerCase();
        }
    }

    const [cardSize, setCardsize] = useState(15);

    useEffect(()=>{

        if (width < 1150) {
            setCardsize(12);
            console.log("Changed!");
        }
    }, [])

    return (
        <Box
            className="chaptercard-wrapper"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                width: `${cardSize}rem`,
                height: `${cardSize}rem`,
                textDecoration: "none",
                position: "relative",
                transition: "all ease 0.3s",
                zIndex: "4",
                borderRadius: "10px",
            }}
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
