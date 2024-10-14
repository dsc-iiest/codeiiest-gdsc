import PropTypes from "prop-types";
import "./ProgressBar.css";

const Slots = ({ filled, total, size="normal"}) => {

	const slots = [];
	const backgroundSize = (total * 30 + 10) + 50;

	let i = 1;
	while (i <= filled) {
		slots.push(
			<div
				className="slot"
				style={{
					backgroundSize,
					backgroundPosition: 10 + 30 * i + 25 + "px", 
					height: `${size === "small" ? "20px" : "30px"}`,
					width: `${size === "small" ? "12px" : "20px"}`
				}}
			></div>
		);
		i++;
	}
	while (i <= total) {
		slots.push(
			<div
				
				className="slot outlined"
				style={{
					backgroundSize,
					backgroundPosition: 10 + 30 * i + "px",
					height: `${size==="small"? "20px" : "30px"}`,
					width: `${size === "small" ? "12px" : "20px"}`
				}}
			></div>
		);
		i++;
	}
	return slots;
};

const ProgressBar = ({ total, progress, size="normal" }) => {
	return (
		<div
			className="progress-bar"
			style={{
				height: `${size==="small"? 30 : 40}px`,
				width: `${size==="small"? total*22 + 8 : total*30 + 10}px`
				
			}}
		>
			<Slots filled={progress} total={total} size={size} ></Slots>
		</div>
	);
};

ProgressBar.propTypes = {
	total: PropTypes.number,
	progress: PropTypes.number
}

export default ProgressBar;
