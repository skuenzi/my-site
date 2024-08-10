import { useState, useEffect } from "react";
import PreviewCard from "./PreviewCard";
import projects from "../projects";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ProjectModal from "./ProjectModal";

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [showProjectPage, setShowProjectPage] = useState(false);

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

  useEffect(() => {
    if (showProjectPage) {
      document.body.addEventListener("click", onOutsideClick, true);
    }
  }, [showProjectPage]);

  useEffect(() => {
    const lastIndex = projects.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  const handlePreviewClick = (id) => {
    setActiveProject(projects[id - 1]);
    setShowProjectPage(true);
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
        id={project.id}
        className={position}
        handlePreviewClick={handlePreviewClick}
        {...project}
      />
    );
  });

  return (
    <section className="gallery">
      <ProjectModal
        showProjectPage={showProjectPage}
        setShowProjectPage={setShowProjectPage}
        {...activeProject}
      />
      <h2 className="section-title">projects</h2>

      <div className="container">
        {gallery}

        <button
          className="prev-button"
          onClick={() => {
            if (showProjectPage) {
              setShowProjectPage(false);
            }
            setIndex((prevIndex) => prevIndex - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next-button"
          onClick={() => {
            if (showProjectPage) {
              setShowProjectPage(false);
            }
            setIndex((prevIndex) => prevIndex + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
