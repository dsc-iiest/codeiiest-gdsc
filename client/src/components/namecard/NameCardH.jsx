import React from "react";
import "./NameCardH.css";
import { motion } from "framer-motion";


export default function NamecardH({ profilepic, name, codeiiest, gdsc, descrip }) {
    return (
        <div className="namecard-h">
            <div className="intro">
                <div className="profile-pic">
                    <img className="fakeborder" 
                    
                    src="/assets/mask.svg" />
                    <motion.img 
                    initial={{ scale:1.02 }}
                    animate={{ scale:1 }}
                    transition={{duration: 1, type:"spring", mass:1, damping:10, stiffness:200 }}
                    className={"hexagon"} src={`/assets/profile-pics/${profilepic}`} alt="" />
                </div>
                <motion.div 
                
                className="details">
                    <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="name">{name}</motion.div>
                    <div className="post">
                        <motion.img 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay:0.5, type:"spring", mass:1, damping:10, stiffness:200 }}
                        src="/assets/logo/codeiiest-logo.png" alt="codeiiest" className="post-icon" />
                        <motion.span
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2+0.5, type:"spring", mass:1, damping:10, stiffness:200 }}
                        >
                            {codeiiest}
                        </motion.span>
                    </div>
                    {gdsc && (<div
                    className="post">
                        <motion.img 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5,delay:0.5 }}
                        src="/assets/logo/gdsc-logo.png" alt="gdsc" className="post-icon" />
                        <motion.span
                        initial={{ opacity: 0, x:-30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay:0.2 + 0.5 }}
                        >{gdsc}</motion.span>
                    </div>)}
                    <motion.div 
                    initial={{scaleX: 0}}
                    animate={{scaleX: 1, transition: { delay:0.5,duration: 0.5, type:"tween"}}}
                    style={{ transformOrigin: 'center' }}
                    className="divider"></motion.div>
                </motion.div>
            </div>
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + 0.5, type:"spring", mass:1, damping:10, stiffness:200 }}
            className="desc">{descrip}</motion.div>
        </div>
    );
}


