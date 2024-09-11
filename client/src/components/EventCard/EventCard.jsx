import "./EventCard.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "../Button/Button";
import GroupAvatars from "./GroupAvatars/GroupAvatars";

const EventCard = (
  {
    // title,
    // miniTitle,
    // description,
    // imageVariant,
    // AvatarSampleData,
    // TagsList,
    // sideDetails1,
    // sideDetails2
  }
) => {

  //taking sample values for datas which we willl get via props
  
  const title = "Dev Camp";
  const miniTitle = "Complete Development Bootcamp";
  const description =
    "gear up for an exciting full stack web development bootcamp, featuring some of the best web developers of our college";
  const imageVariant = "uiux";
  const AvatarSampleData = [
    { name: "Rishab dugar bhaiya", img: "profile.jpg" },
    { name: "Rishab dugar bhaiya", img: "profile.jpg" },
    { name: "Rishab dugar bhaiya", img: "profile.jpg" },
    { name: "Rishab dugar bhaiya", img: "profile.jpg" },
    { name: "Rishab dugar bhaiya", img: "profile.jpg" },
    { name: "Rishab dugar bhaiya", img: "profile.jpg" },
  ];
  const TagsList = ["full stack development", "ui/ux", "react"];

  const sideDetails1 = {
    text1: "date & time",
    text2: "10th june",
    text3: "06:00-07:45 pm",
  };

  const sideDetails2 = {
    text1: "venue",
    text2: "ONLINE",
    text3: null,
  };

  let percentageValue;

  const AvatarLen = AvatarSampleData.length;
  if (AvatarLen <= 3) percentageValue = 100;
  else percentageValue = Math.floor(parseFloat(3 / AvatarLen) * 100);

  return (
    <div className="complete-event-card">
      <img src={`/assets/thumbnail/${imageVariant}.png`} />
      <div className="parentDiv">
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
              <div className="right">
                <Detail {...sideDetails1} />
                <Detail {...sideDetails2} />
              </div>
            </div>
            <div className="lower">
              <div className="lower-left">
                <Button
                  innerHtml="Know More"
                  color="primary"
                  variant="filled"
                  size="small"
                />
              </div>
              <div className="lower-right">
                <GroupAvatars peopleDataArray={AvatarSampleData} />
                <div className="progressDiv">
                  <ProgressBar total={Math.min(AvatarLen, 6)} progress={3} />
                  <p>{percentageValue}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ text1, text2, text3 }) => {
  return (
    <div className="detail">
      <h5>{text1}</h5>
      <h4>{text2}</h4>
      {text3 && <h5>{text3}</h5>}
    </div>
  );
};

const Tags = ({ content }) => {
  return <div className="tag">{content}</div>;
};

export default EventCard;
