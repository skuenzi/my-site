import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

export default function ProjectModal(props) {
  const {
    showProjectPage,
    setShowProjectPage,
    title,
    img,
    techList,
    deployedSite,
    moreInfo,
    sourceCode,
  } = props;
  return (
    <div
      className={`project-page ${
        showProjectPage ? "show" : "hidden"
      } ignore-outside-click`}
    >
      <button
        className="close-icon-button ignore-outside-click"
        onClick={(e) => setShowProjectPage(false)}
      >
        <FaRegWindowClose className="close-icon" />
      </button>
      <img src={img} alt="portfolio" className="project-page-img" />
      <h3 className="project-page-title">{title}</h3>
      <h4 className="project-page-tech">
        <span className="project-page-tech-span">built with:</span> {techList}
      </h4>
      {deployedSite && (
        <button
          className="project-page-button deployedsite-button"
          onClick={() => window.open(deployedSite)}
        >
          try it out
        </button>
      )}

      <p className="project-page-info">{moreInfo}</p>
      <button
        className="project-page-button"
        onClick={() => window.open(sourceCode)}
      >
        source code
      </button>
    </div>
  );
}
