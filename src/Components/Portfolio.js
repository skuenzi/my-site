import { useState, useEffect } from "react";
import PreviewCard from "./PreviewCard";
import projects from "../projects";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ProjectModal from "./ProjectModal";

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const [showProjectPage, setShowProjectPage] = useState(false);

  useEffect(() => {
    if (showProjectPage) {
      document.body.addEventListener("click", onOutsideClick, true);
    }
  }, [showProjectPage]);

  // Event handlers
  const onOutsideClick = (e) => {
    if (
      e.target.parentElement.className.includes("project-page") ||
      e.target.className.includes("project-page")
    ) {
      return;
    } else {
      setShowProjectPage(false);
    }
  };
  const handleSlideChange = (dir) => {
    if (showProjectPage) {
      setShowProjectPage(false);
    }

    const lastIndex = projects.length - 1;
    let currIndex = dir === "next" ? index + 1 : index - 1;
    if (currIndex < 0) {
      currIndex = lastIndex;
    } else if (currIndex > lastIndex) {
      currIndex = 0;
    }
    setIndex(currIndex);
  };

  const gallery = projects.map((project, projectIndex) => {
    let position = "nextSlide";

    if (projectIndex === index) {
      position = "activeSlide";
    }
    if (projectIndex === index - 1) {
      position = "prevSlide";
    }

    return (
      <PreviewCard
        key={project.id}
        className={position}
        setShowProjectPage={setShowProjectPage}
        {...project}
      />
    );
  });

  return (
    <section className="gallery">
      <ProjectModal
        showProjectPage={showProjectPage}
        setShowProjectPage={setShowProjectPage}
        {...projects[index]}
      />
      <h2 className="section-title">projects</h2>

      <div className="container">
        {gallery}

        <button
          className="prev-button"
          onClick={() => handleSlideChange("prev")}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next-button"
          onClick={() => handleSlideChange("next")}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
