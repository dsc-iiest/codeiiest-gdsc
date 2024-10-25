import React from "react";
import PropTypes from "prop-types";
import "./Error.css";

const Error = ({ message, error_code }) => {
    return (
        <div className="error-container">
            <div className="error-card">
                <h1>ERROR</h1>
                <h3>Code: {error_code}</h3>
                <p>{message}</p>
            </div>
        </div>
    );
};

Error.propTypes = {
    message: PropTypes.string.isRequired,
    error_code: PropTypes.number.isRequired,
};

export default Error;
