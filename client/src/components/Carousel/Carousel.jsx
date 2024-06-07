import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import { Box, ButtonGroup, IconButton, Stack } from "@mui/material";
import PropTypes from "prop-types";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

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
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
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
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
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

const Carousel = ({ items }) => {
	const carouselRef = useRef();
	const [carouselWidth, setCarouselWidth] = useState(0);

	const childRef = useRef();
	const [cardWidth, setCardWidth] = useState(0);

	const [margin, setMargin] = useState(0);
	const gap = 32;
	const delta = cardWidth + gap;

	const numOfCards = Math.floor(carouselWidth / delta);
	console.log(carouselWidth, cardWidth, numOfCards);

	const maxNext = delta * (items.length - numOfCards);

	const [containerWidth, setContainerWidth] = useState(delta * numOfCards);

	const handleNext = () => {
		if (margin === -maxNext) return;
		setMargin(margin - delta);
	};
	const handlePrev = () => {
		if (margin === 0) return;
		setMargin(margin + delta);
	};

	const getVisibilityClass = (index) => {
		const position = margin + delta * index;
		if (position < 0 || position > delta * numOfCards - 1) {
			return " fade-out";
		}
		return "";
	};

	useEffect(() => {
		if (carouselRef.current) {
			setCarouselWidth(carouselRef.current.offsetWidth);
		}
	}, [carouselRef]);

    useEffect(() => {
        if (childRef.current && childRef.current.children) {
            setCardWidth(childRef.current.children[0].offsetWidth);
        }
    }, [childRef]);

	useEffect(() => {
		setContainerWidth(delta * numOfCards);
	}, [delta, numOfCards]);

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				// width: "min-content",
				gap: "1rem",
				height: "100%",
			}}
			className="carousel-container"
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "start",
					// width: `${CarouselWidth}px`,
					overflowX: "hidden",
					border: "1px solid red",
					height: "100%",
					width: containerWidth || "100%",
				}}
				className="carousel"
				ref={carouselRef}
			>
				<Box
					className="items-banner"
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: `${gap}px`,
						marginLeft: `${margin}px`,
						transition: "all ease 0.5s",
						padding: "1rem",

						border: "1px solid pink",
					}}
					ref={childRef}
				>
					{items.map((item, index) => {
						return (
							<Box
								key={index}
								className={
									"carousel-items" + getVisibilityClass(index)
								}
							>
								{item}
							</Box>
						);
					})}
				</Box>
			</Box>
			<Stack className="bottom-right" direction={"row"} gap="20px">
				<Stack className="progress-container" direction="column">
					<ProgressBar
						progress={numOfCards - margin / delta}
						total={items.length}
					/>
					<Stack className="text" direction={"row"} alignItems={"center"} gap="10px">
						showing
						<div className="progress">
							{numOfCards - margin / delta} of {items.length}
						</div>
					</Stack>
				</Stack>

				<ButtonGroup>
					<IconButton onClick={handlePrev}>
						<Previousicon />
					</IconButton>
					<IconButton onClick={handleNext}>
						<Nexticon />
					</IconButton>
				</ButtonGroup>
			</Stack>
		</Box>
	);
};

Carousel.propTypes = {
	items: PropTypes.array,
	show: PropTypes.number,
	cardWidth: PropTypes.number,
};

export default Carousel;
