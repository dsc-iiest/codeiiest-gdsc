import React from "react";
import "./NameCardV.css";

export default function NamecardV({ profilepic, name, codeiiest, gdsc, descrip }) {
    return (
        <div className="namecard-v">
            <div className="intro">
                <div className="profile-pic">
                    <img className="fakeborder" src="/assets/mask.svg" />
                    <img className={"hexagon"} src={`/assets/profilepic/${profilepic}.png`} alt="" />
                </div>
                <div className="details">
                    <div className="name">{name}</div>
                    <div className="post">
                        <img src="/assets/logo/codeiiest-logo.png" alt="codeiiest" className="post-icon" />
                        {codeiiest}
                    </div>
                    <div className="post">
                        <img src="/assets/logo/gdsc-logo.png" alt="gdsc" className="post-icon" />
                        {gdsc}
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="desc">{descrip}</div>
        </div>
    );
}
