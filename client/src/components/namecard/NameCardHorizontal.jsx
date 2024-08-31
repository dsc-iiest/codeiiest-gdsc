import React from "react";
import { ExtLink } from "./namecard";
import { ProfilePic } from "./namecard";
import "./NameCardHorizontal.css";
import { IconButton } from "@mui/material";

export default function NameCardHorizontal({ profilepic, name, codeiiest, gdsc, descrip, customCSS = {} }) {
    return (
        <div style={customCSS} className="namecard-horz">
            <div className="hex-mask">
                <ProfilePic path={profilepic} />
            </div>
            <div className="profile">
                <div className="profile-info">
                    <div className="profile-name" style={{ fontSize: "1.5rem" }}>
                        {name}
                        <IconButton sx = {{
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            right: 0,
                        }}><ExtLink /></IconButton>
                        
                    </div>
                    <div className="role">
                        <img src="/assets/logo/codeiiest.png" />
                        <div className="label">{codeiiest}</div>
                    </div>
                    <div className="role">
                        <img src="/assets/logo/gdsc.png" />
                        <div className="label">{gdsc}</div>
                    </div>
                </div>
            </div>
            <div className="descrip">{descrip}</div>
        </div>
    );
}
