import PropTypes from "prop-types";
import "./ProgressBar.css";

const Slots = ({ filled, total }) => {
	const slots = [];
	const backgroundSize = (total * 30 + 10) + 50;

	let i = 1;
	while (i <= filled) {
		slots.push(
			<div
				key={i}
				className="slot"
				style={{
					backgroundSize,
					backgroundPosition: 10 + 30 * i + 25 + "px", 
				}}
			></div>
		);
		i++;
	}
	while (i <= total) {
		slots.push(
			<div
				key={i}
				className="slot outlined"
				style={{
					backgroundSize,
					backgroundPosition: 10 + 30 * i + "px",
				}}
			></div>
		);
		i++;
	}
	return slots;
};

const ProgressBar = ({ total, progress }) => {
	return (
		<div
			className="progress-bar"
			style={{
				width: total * 30 + 10 + "px",
			}}
		>
			<Slots filled={progress} total={total}></Slots>
		</div>
	);
};

ProgressBar.propTypes = {
	total: PropTypes.number,
	progress: PropTypes.number
}

export default ProgressBar;
