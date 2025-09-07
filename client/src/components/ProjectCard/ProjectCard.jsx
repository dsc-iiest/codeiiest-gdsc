import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import "./ProjectCard.css";
import { Box } from "@mui/material";

// const styles = (variant) => ({
//   background: `url("/assets/thumbnail/${variant}.png")`,
//   backgroundSize: `contain`,
//   backgroundRepeat: `no-repeat`,
//   position: `absolute`,
//   top: `0`,
//   width: `100%`,
//   height: `100%`,
//   // border: "1px solid white"
// });

const ProjectCard = ({
  name,
  title,
  // subtitle,
  description,
  tags = [],
  publishedDate,
  media,
  liveUrl,
  repoUrl,
}) => {
  const bodyRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const displayTitle = title || name;
  const dateText = publishedDate instanceof Date
    ? publishedDate.toLocaleDateString(undefined, { day: "numeric", month: "short" })
    : publishedDate;

  return (
    <Box className={`projectcard-detailed ${isScrolled ? 'scrolled' : ''}`}>
      {media && (
        <div className="projectcard-media">
          <img src={media} alt={displayTitle + " preview"} loading="lazy" />
        </div>
      )}
      <div className="projectcard-body" ref={bodyRef} onMouseLeave={() => bodyRef.current?.scrollTo(0, 0)} onScroll={(e) => setIsScrolled(e.target.scrollTop > 0)}>
        <div className="projectcard-header">
        <div className="projectcard-titleblock">
            <h3 className="projectcard-title">{displayTitle}</h3>
            {/* {subtitle && <p className="projectcard-subtitle">{subtitle}</p>} */}
          </div>
          {dateText && (
            <div className="projectcard-date-badge">
              <span className="label">published date</span>
              <span className="date-value">{dateText}</span>
            </div>
          )}
        </div>
        {description && (
          <div className="projectcard-description">
            <p>{description}</p>
          </div>
        )}
        {tags.length > 0 && (
          <div className="projectcard-tags">
            {tags.map((t) => (
              <span className="projectcard-tag" key={t}>{t}</span>
            ))}
          </div>
        )}
        {(liveUrl || repoUrl) && (
          <div className="projectcard-actions">
            {liveUrl && (
              <a
                className="projectcard-btn live"
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            )}
            {repoUrl && (
              <a
                className="projectcard-btn repo"
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            )}
          </div>
        )}
      </div>
    </Box>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string, // legacy name
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  publishedDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  media: PropTypes.string,
  liveUrl: PropTypes.string,
  repoUrl: PropTypes.string,
};

export default ProjectCard;
