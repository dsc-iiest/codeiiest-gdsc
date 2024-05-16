import Codercard from '../../components/Codercard/Codercard';
import upward from '../../../public/assets/upward-icon.png';
import { useNavigate, Link } from 'react-router-dom';
import './CP_Leaderboard.css';

const CP_Leaderboard = () => {

  const navigate = useNavigate();
  const routeToLeaderboard = () => {
    navigate('/cp_leaderboard2');
  };
  return (
    <>
        <div className='title-container'>
          <h1 className='title-angle-bracket'>&lt;</h1>
          <h1 className='title-container'>CP Leaderboard</h1>
          <h1 className='title-angle-bracket'>&gt;</h1>
        </div>
        <div className="cards-container">
            <div className="card">
              <Codercard coderData={{
                name: "Rishabh Dugar",
                questionsSolved: 500, 
                highestRating: 2303, 
                changeInRating: -8, 
                contestsGiven: 97, 
                experience: "Senior"
              }}/>
            </div>
            <div className="card"> 
              <Codercard 
                coderData={{
                  name: "Rishabh Dugar",
                  questionsSolved: 500, 
                  highestRating: 2303, 
                  changeInRating: 12, 
                  contestsGiven: 97, 
                  experience: "Senior"
                }}
              />
            </div>
            <div className="card">
              <Codercard 
                  coderData={{
                    name: "Rishabh Dugar",
                    questionsSolved: 500, 
                    highestRating: 2303, 
                    changeInRating: 43, 
                    contestsGiven: 97, 
                    experience: "Senior"
                  }}
              /> 
            </div>
            <div className="card">
              <Codercard 
                coderData={{
                  name: "Samyajit Das",
                  questionsSolved: 500, 
                  highestRating: 2303, 
                  changeInRating: 43, 
                  contestsGiven: 97, 
                  experience: "Junior"
                }}
              />
            </div>
        </div>
        <div className="transition-section">
                <Link to="/cp_leaderboard2">
                  <img src={upward} alt="up-icon" style={{width: 20, height: 20}}/>
                </Link>
                <div>leaderboard</div>
        </div>
    </>
  )
}

export default CP_Leaderboard;
