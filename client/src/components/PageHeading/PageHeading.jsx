import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const PageHeading = ({ text }) => {
	return (
		<Box
			sx={{
				fontSize: "4.4vh",
				color: "var(--white)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "5px",
				// background: "#242424",
				padding: "5px",
				width: 'max-content',
				// borderRadius: "5px",
				// border: "1px solid rgba(217, 217, 217, 0.5)",
				// alignSelf: "start",
				// justifySelf: "center"
			}}
			className="top-left"
		>
			<Box sx={{ color: "var(--red)" }}>{"<"}</Box>
			{text}
			<Box sx={{ color: "var(--red)" }}>{">"}</Box>
		</Box>
	);
};

PageHeading.propTypes = {
	text: PropTypes.string.isRequired,
};

export default PageHeading;
