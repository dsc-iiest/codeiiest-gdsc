import React from "react";
import "./namecard.css";
import { IconButton } from "@mui/material";

function ProfilePic({ path }) {
    return <img className={"nm-profile-pic-pic "} src={`/assets/profilepic/${path}.png`} alt="" />;
}

function ExtLink() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            height="16px"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>{" "}
            </g>
        </svg>
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
        <div style={customCSS} className="namecard-horz">
            <div className="profile">
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
            <div className="profile">
                <div className="profile-info">
                    <div className="profile-name">
                        {name.map((word, i) => {
                            return <div className="fullname" key={i}>{word}</div>;
                        })}
                        
                        <IconButton
                            sx={{
                                m: 0,
                                p: 0,
                                outline: 0,
                            }}
                        >
                            <ExtLink />
                        </IconButton>
                    </div>
                    <div className="profile-codeiiest">{codeiiest}</div>
                    <div className="profile-gdsc">{gdsc}</div>
                </div>
            </div>
            <div className="descrip">{descrip}</div>
        </div>
    );
}

export function NameCard() {
    return (
        <div className="bugfixer page">
            <NamecardMini
                name={"Nafis Adnan Mondal Amazing"}
                post={"Development Lead & Treasurer"}
                profilepic={"profilepic"}
            />
            <NamecardHorizontal
                name={"R"}
                codeiiest={"Development Lead & Treasurer"}
                gdsc={"Development Lead & Treasurer"}
                profilepic={"profilepic"}
                descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
            />
            <NamecardHorizontal
                name={"Rishab Rishabbb Dugar"}
                codeiiest={"Development Lead & Treasurer"}
                gdsc={"Development Lead & Treasurer"}
                profilepic={"profilepic"}
                descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
            />
            <NamecardVertical
                name={"Nafis Adnan Mondal"}
                codeiiest={"Development Lead"}
                gdsc={"Development Lead"}
                profilepic={"profilepic"}
                descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
            />
            <NamecardVertical
                name={"Na"}
                codeiiest={"Development Lead"}
                gdsc={"Development Lead"}
                profilepic={"profilepic"}
                descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
            />
        </div>
    );
}
