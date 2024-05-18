import { iconButtonClasses } from "@mui/material";
import "./Button.css";

const Button = ({ id, innerHtml, className, variant, onClick, disabled, color, size, startIcon, endIcon, loading, type }) => {
	return (
		<button
			id={id}
			className={`button ${className} ${size} ${variant} ${color} ${
				disabled && "disabled"
			}`}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{loading && <span className="loading material-icons">sync</span>}
			{!loading && startIcon && (
				<div className="start-icon">{startIcon}</div>
			)}
			{!loading && innerHtml}
			{!loading && endIcon && <div className="start-icon">{endIcon}</div>}
		</button>
	);
};

export default Button;
