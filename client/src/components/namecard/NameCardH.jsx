import React from "react";
import "./NameCardH.css";

export default function NamecardH({ profilepic, name, codeiiest, gdsc, descrip }) {
    return (
        <div className="namecard-h">
            <div className="intro">
                <div className="profile-pic">
                    <img className="fakeborder" src="/assets/mask.svg" />
                    <img className={"hexagon"} src={`/assets/profile-pics/${profilepic}`} alt="" />
                </div>
                <div className="details">
                    <div className="name">{name}</div>
                    <div className="post">
                        <img src="/assets/logo/codeiiest-logo.png" alt="codeiiest" className="post-icon" />
                        {codeiiest}
                    </div>
                    {gdsc && (<div className="post">
                        <img src="/assets/logo/gdsc-logo.png" alt="gdsc" className="post-icon" />
                        {gdsc}
                    </div>)}
                    <div className="divider"></div>
                </div>
            </div>
            <div className="desc">{descrip}</div>
        </div>
    );
}
