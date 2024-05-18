import React from "react";
import "./namecard.css";

function ProfilePic({ path }) {
  return <img className={"nm-profile-pic-pic "} src={`/assets/profilepic/${path}.png`} alt="" />;
}

function ExtLink() {
  return (
    <a href="#">
      <div className="ext-link">
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V14M11 13L20 4M20 4V9M20 4H15"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
}

export function NamecardMini({ name, post, profilepic }) {
  return (
    <div className="namecard-mini">
      <ProfilePic path={profilepic} />
      <div className="profile-info">
        <div className="profile-name">
          {name}
          <ExtLink />
        </div>
        <div className="profile-post">{post}</div>
      </div>
    </div>
  );
}

export function NamecardHorizontal({ profilepic, name, codeiiest, gdsc, descrip, customCSS = {} }) {
  return (
    <div style = {customCSS} className="namecard-horz">
      <div className="profile-horz">
        <div className="hex-mask">
          <ProfilePic path={profilepic} />
        </div>
        <div className="profile-info">
          <div className="profile-name" style={{ fontSize: "1.5rem" }}>
            {name}
            <ExtLink />
          </div>
          <div className="profile-codeiiest">{codeiiest}</div>
          <div className="profile-gdsc">{gdsc}</div>
        </div>
      </div>
      <div className="descrip">{descrip}</div>
    </div>
  );
}

export function NamecardVertical({ profilepic, name, codeiiest, gdsc, descrip }) {
  name = name.split(" ");
  return (
    <div className="namecard-vert">
      <div className="hex-mask">
        <ProfilePic path={profilepic} />
      </div>
      <div className="profile-horz">
        <div className="profile-info">
          <div className="profile-name" style={{ fontSize: "1.5rem" }}>
            {name.map((x) => {
              return <span>{x} </span>;
            })}
            <ExtLink />
          </div>
          <div className="profile-codeiiest">{codeiiest}</div>
          <div className="profile-gdsc">{gdsc}</div>
        </div>
      </div>
      <div className="descrip">{descrip}</div>
    </div>
  );
}

function NameCard() {
  return (
    <>
      <NamecardMini name={"Rishab Dugar"} post={"Development Lead & Treasurer"} profilepic={"profilepic"} />
      <div className="space" style={{ margin: "3rem" }}></div>
      <NamecardHorizontal
        name={"Rishab Dugar"}
        codeiiest={"Development Lead & Treasurer"}
        gdsc={"Development Lead & Treasurer"}
        profilepic={"profilepic"}
        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
      />
      <div className="space" style={{ margin: "8rem" }}></div>
      <NamecardVertical
        name={"Nafis Adnan Mondal"}
        codeiiest={"Development Lead"}
        gdsc={"Development Lead"}
        profilepic={"profilepic"}
        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
      />
    </>
  );
}
