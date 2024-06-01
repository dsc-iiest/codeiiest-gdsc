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
        alignSelf: "start",
        marginLeft: "5rem"
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

export default PageHeading