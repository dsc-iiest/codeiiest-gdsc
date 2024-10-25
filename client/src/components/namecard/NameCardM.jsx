import { Avatar } from "@mui/material";
import './NameCardM.css'
import React from "react";

const NameCardM = ({name, post}) => {
    return (
        <div className="namecard-m">
            <div className="fakeborder"></div>
            <Avatar alt={name} src="/assets/profilepic/profilepic.png" sx={{ width: 40, height: 40 }} />
            <div className="intro">
                <div className="name">{name}</div>
                <div className="post">{post}</div>
            </div>
        </div>
    );
};

export default NameCardM;
