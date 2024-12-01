import React, { useEffect } from 'react'
import "./IconLoader.css"
export let delayForLeaderBoardsPage = 3;

const IconLoader = () => {

    useEffect(() => {
        setTimeout(() => {
            delayForLeaderBoardsPage = 0;
        }, 3000);
    }, []);
    
    return (
        <div className="logo-wrapper">
            <svg width="257.58" height="300" viewBox="0 0 425 495" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 120">
                    <rect id="r-46" width="425" height="40" fill="#F60000" />
                    <rect id="r-48" x="110" y="60" width="315" height="40" fill="#FF0000" />
                    <rect id="r-49" x="165" y="400" width="260" height="40" fill="#F60000" />
                    <rect id="r-49_2" x="55" y="455" width="370" height="40" fill="#671616" />
                    <rect id="r-126" x="55" y="60" width="40" height="435" fill="#671616" />
                    <rect id="r-129" x="110" y="60" width="40" height="380" fill="#FF0000" />
                    <rect id="r-123" width="40" height="495" fill="#F60000" />
                </g>
            </svg>
            <svg width="91" height="300" viewBox="0 0 151 495" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 121">
                    <rect id="ri-121" width="37" height="495" fill="#A6A6A6" />
                    <rect id="ri-122" x="57" width="37" height="495" fill="#D9D9D9" />
                    <rect id="ri-123" x="114" width="37" height="495" fill="#D9D9D9" />
                </g>
            </svg>
        </div>
    );
};


export default IconLoader