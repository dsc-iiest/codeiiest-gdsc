import React from 'react'
import "./PageHeading.css"
import PropTypes from "prop-types";
import {Box, Typography} from "@mui/material"

const PageHeading = ({text}) => {
  return (
    <Box sx = {{
        fontSize: "2rem",
        color: "var(--white)",
        display: "flex",
        justifyContent: "center",
        alignItems :"center",
        gap: "5px",
        background: "#242424",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid rgba(217, 217, 217, 0.5)"
        // alignSelf: "start",
        // justifySelf: "center"
    }}>
        <Box sx = {{color :"var(--red)"}}>{"<"}</Box>
        {text}
        <Box sx = {{color :"var(--red)"}}>{">"}</Box>
    </Box>
  )
}

PageHeading.propTypes = {
    text: PropTypes.string.isRequired,
};

export default PageHeading;