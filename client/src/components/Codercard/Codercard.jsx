import React from 'react'
import './CoderCardAK.css';


const Codercard = ({ coderData }) => {
    return (
        <div className="coder-card" >
            <div className="top-section">
                <div className="left-section">
                    <h2 className='left-section-experience-text chakra-petch-regular'>{coderData.experience}</h2>
                    <div className="coder-profile-image">
                        {/* {coderData.avatar !== "" ? <img
                            src={coderData.avatar} alt='top coder image' /> :
                            <span>{coderData.name[0]}</span>
                        } */}
                    </div>
                </div>
                <div className="right-section">
                    <h1 className='right-section-text chakra-petch-regular'>Coder of the Month</h1>
                </div>
            </div>
            <div className="mid-section">
                <div className='mid-section-container'>
                    <h3 className='coder-name-text chakra-petch-regular'>{coderData.name}</h3>
                </div>
            </div>
            <div className="bottom-section chakra-petch-regular">
                <div className="contests-given chakra-petch-regular">
                    {coderData.contestsGiven}
                    <h4>contests given</h4>
                </div>
                <div className={`change-in-rating ${coderData.changeInRating < 0 ? 'red' : 'green'}`}>
                    {coderData.changeInRating}
                    <h4>change in rating</h4>
                </div>
                <div className='questions-solved chakra-petch-regular'>
                    {coderData.rating}
                    <h4>current rating</h4>
                </div>
                <div className='highest-rating chakra-petch-regular'>
                    {coderData.highestRating}
                    <h4>highest rating</h4>
                </div>
            </div>
        </div>
    )
}

export default Codercard