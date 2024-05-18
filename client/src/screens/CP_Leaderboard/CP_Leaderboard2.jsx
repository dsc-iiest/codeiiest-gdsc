import React from 'react';
import {Link} from 'react-router-dom';
import Leaderboard from '../../components/leaderboard/leaderboard';
import Codercard from '../../components/Codercard/Codercard';
import arrow from '/assets/arrow-right.png'
import './CP_Leaderboard2.css';

const CP_Leaderboard2 = () => {
  return (
    <>
      <div className="title">
        <div className="title-container">
            <h1 className='title-angle-bracket'>&lt;</h1>
            <h1 className='title-container'>CP Leaderboard</h1>
            <h1 className='title-angle-bracket'>&gt;</h1>
        </div>
      </div>
      <div className="content-container">
        <div className="grid-container">
          <div className="grid-card">
              <Codercard coderData={{
                name: "Rishabh Dugar",
                questionsSolved: 500, 
                highestRating: 2303, 
                changeInRating: -8, 
                contestsGiven: 97, 
                experience: "Senior"
              }}/>
          </div>
          <div className="grid-card">
              <Codercard coderData={{
                name: "Rishabh Dugar",
                questionsSolved: 500, 
                highestRating: 2303, 
                changeInRating: -8, 
                contestsGiven: 97, 
                experience: "Senior"
              }}/>
          </div>
          <div className="grid-card">
              <Codercard coderData={{
                name: "Rishabh Dugar",
                questionsSolved: 500, 
                highestRating: 2303, 
                changeInRating: -8, 
                contestsGiven: 97, 
                experience: "Senior"
              }}/>
          </div>
          <div className="grid-card">
              <Codercard coderData={{
                name: "Rishabh Dugar",
                questionsSolved: 500, 
                highestRating: 2303, 
                changeInRating: -8, 
                contestsGiven: 97, 
                experience: "Senior"
              }}/>
          </div>
        </div>
        <div className="leaderboard">
          <div className="leaderboard-component">
            <Leaderboard className="leaderboard-component"/>
          </div>
          <Link to="/leaderboard"className="view-full-leaderboard">
              <div>View full ranklist</div>
              <img src={arrow} alt="arrow-right"/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CP_Leaderboard2