import PropTypes from "prop-types";
import "./ProjectCard.css";
import { Box } from "@mui/material";

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
  const displayTitle = title || name;
  const dateText = publishedDate instanceof Date
    ? publishedDate.toLocaleDateString(undefined, { day: "numeric", month: "short" })
    : publishedDate;

  return (
    <Box className="projectcard-detailed">
      {media && (
        <div className="projectcard-media">
          <img src={media} alt={displayTitle + " preview"} loading="lazy" />
        </div>
      )}
      <div className="projectcard-body">
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
            {liveUrl && (
              <a
                className="projectcard-tag projectcard-tag-live"
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            )}
            {repoUrl && (
              <a
                className="projectcard-tag projectcard-tag-repo"
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
