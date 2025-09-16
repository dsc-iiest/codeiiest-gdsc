import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Socials.css";
const Socials = () => (
    <div className="socials">
        <div>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon insta" />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon linkedin" />
            </a>
        </div>
        <div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon github" />
            </a>
        </div>
        <div>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon twitter" />
            </a>
        </div>
        <div>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="icon youtube" />
            </a>
        </div>
        <div>
            
        </div>

    </div>
);

export default Socials;