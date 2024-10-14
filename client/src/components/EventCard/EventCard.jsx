import "./EventCard.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import { AnimatePresence, motion } from "framer-motion"
import GroupAvatars from "./GroupAvatars/GroupAvatars";

const EventCard = (
  {
    title,
    miniTitle,
    description,
    imageVariant,
    AvatarSampleData,
    TagsList,
    sideDetails1,
    sideDetails2
  }
) => {

  //taking sample values for datas which we willl get via props


  let percentageValue;

  console.log(title)
  const AvatarLen = AvatarSampleData.length;
  if (AvatarLen <= 3) percentageValue = 100;
  else percentageValue = Math.floor(parseFloat(3 / AvatarLen) * 100);

  return (
    <motion.div
      key={Math.random()*1000}
      initial={{opacity: 0.5, y: -10}}
      animate={{opacity: 1, y: 0}}
      transition={{ duration: 0.4 }}
      className="parentDiv">
        <div className="image-container" >
        <img src={`/assets/thumbnail/${imageVariant}.png`} />
        </div>
      
      <div className="EventCard-wrapper">
        <div className="section1">
          <div className="title">
            <h1>{title}</h1>
            <h4>{miniTitle}</h4>
          </div>
        </div>

        <div className="section2">
          <div className="upper">
            <div className="left">
              <div className="TagWrapper">
                {TagsList.map((tag, tagIndex) => (
                  <Tags key={tagIndex} content={tag} />
                ))}
              </div>
              <div className="description">
                <p>{description}</p>
              </div>
            </div>
            <motion.div 
            initial={{x:10}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
            className="right">
              <Detail {...sideDetails1} />
              <Detail {...sideDetails2} />
            </motion.div>
          </div>
          <div className="lower">
            <div className="lower-left">
              <motion.button 
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              className="know-more" >
                Know more
              </motion.button>
            </div>
            <div className="lower-right">
              <GroupAvatars peopleDataArray={AvatarSampleData} />
              <div className="progressDiv">
                <ProgressBar total={Math.min(AvatarLen, 6)} progress={3} size="small" />
                <motion.p
                initial={{opacity: 0.6, y: -20}}
                animate={{opacity:1, y: 0}}
                transition={{duration: 0.3}}
                >{percentageValue}%</motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
 
  );
};

const Detail = ({ text1, text2, text3 }) => {
  return (
    <div className="detail">
      <h5 className="label" >{text1}</h5>
      <h4>{text2}</h4>
      {text3 && <h5 className="label" >{text3}</h5>}
    </div>
  );
};

const Tags = ({ content }) => {
  return <div className="tag">{content}</div>;
};

export default EventCard;
