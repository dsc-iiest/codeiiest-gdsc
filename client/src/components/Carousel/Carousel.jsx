import React, { useState } from "react";
import "./Carousel.css";
import { Box, ButtonGroup, IconButton } from "@mui/material";
import PropTypes from "prop-types";


const Nexticon = () => {
    return (
        <svg
            fill="#fff"
            className="button-icon"
            height="30px"
            width="30px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                    {" "}
                    <g>
                        {" "}
                        <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M269.043,389.286V283.429 H109.714v-54.857h159.329V122.704l133.242,133.307L269.043,389.286z"></path>{" "}
                    </g>{" "}
                </g>{" "}
            </g>
        </svg>
    );
};

const Previousicon = () => {
    return (
        <svg
            className="button-icon"
            fill="#fff"
            height="30px"
            width="30px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                    {" "}
                    <g>
                        {" "}
                        <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M402.286,283.429H242.957 v105.867L109.714,255.989l133.242-133.275v105.858h159.329V283.429z"></path>{" "}
                    </g>{" "}
                </g>{" "}
            </g>
        </svg>
    );
};

const Carousel = ({ Margin, setMargin, items, show, cardWidth }) => {
    // const [Margin, setMargin] = useState(0)
    const gap = 32;
    const delta = cardWidth+gap;
    const CarouselWidth = gap*show + (show*cardWidth);

    const maxNext = delta * (items.length - show)

    const handleNext = ()=>{
        if(Margin===-maxNext)return
        setMargin(Margin-delta)
    }
    const handlePrev = ()=>{
        if(Margin===0)return
        setMargin(Margin+delta)
    }

    const getVisibilityClass = (index) => {
        const position = Margin + delta * index;
        if (position < 0 || position > (delta*show - 2)) {
            return ' fade-out';
        }
        return '';
    };

    return (
        <Box sx = {{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "min-content",
            gap: "1rem"
        }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: `${CarouselWidth}px`,
                    overflowX: "hidden",
                }}
            >
                <Box
                    className="items-banner"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: `${gap}px`,
                        marginLeft: `${Margin}px`,
                        transition: "all ease 0.5s",
                        padding: "1rem"
                    }}
                >
                    {items.map(((item, index)=>{
                        return (
                            <Box key={index} className={"carousel-items"+getVisibilityClass(index)}>
                                {item}
                            </Box>
                        )
                    }))}
                </Box>
            </Box>
            <ButtonGroup sx = {{
                position: "absolute",
                bottom: "22px",
                right: "30px"
            }}>
                <IconButton onClick={handlePrev}>
                    <Previousicon />
                </IconButton>
                <IconButton onClick={handleNext}>
                    <Nexticon />
                </IconButton>
            
            </ButtonGroup>
        </Box>
    );
};

Carousel.propTypes = {
    items: PropTypes.array,
    show: PropTypes.number,
    cardWidth: PropTypes.number
};

export default Carousel;
