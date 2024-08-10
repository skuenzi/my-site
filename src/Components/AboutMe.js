import { useState, useEffect } from "react";
import { FaRegWindowClose } from "react-icons/fa";
const aboutMeInfo = `
I’m a software engineer by day and an adventurer by every other hour. When I’m not coding or studying, you’ll find me scaling cliffs, wandering mountain trails, or booking my next travel adventure. My passion for problem-solving extends beyond the screen—I’m dedicated to sustainability and environmentalism and I'm always seeking ways to make a positive impact. I'm especially interested in the intersection of tech, sustainability, and human interest. I know there are countless way that we can use new technologies to help the natural world and the people who live here, and I'm excited to find them.\


Mental health and personal improvement are at the core of everything I do. I believe in the balance of pushing my abilities while staying aware of limitations, whether it’s sending a challenging route in rock climbing or finding new ways to grow personally and professionally. Currently I'm back in school to complete a Bachelors in Computer Science, training for a trail marathon, projecting some 5.12s in the gym, working through "The Upward Spiral" by Alex Korb, and fostering kittens. In between is a healthy amount of Netflix, podcasts, kitten cuddles, and naps. It's all about balance! 

Life is an ongoing project, and I’m here to code, climb, care, and create the best version of myself.
  `;

export default function AboutMe() {
  const [readMore, setReadMore] = useState(false);

  const onOutsideClick = (e) => {
    if (
      e.target.parentElement.className.includes("read-more-modal") ||
      e.target.className.includes("read-more-modal")
    ) {
      return;
    } else {
      setReadMore(false);
    }
  };

  useEffect(() => {
    if (readMore) {
      document.body.addEventListener("click", onOutsideClick, true);
    }
  }, [readMore]);

  return (
    <section className="about-me-section">
      <div className="about-me-content">
        <h2 className="section-title">hi</h2>
        <h4 className="subtitle">Here's a bit more about me</h4>
        <div className="blurb">
          {`${aboutMeInfo.substring(0, 453)}...`}
          <button
            className="read-more-button"
            onClick={() => setReadMore(true)}
          >
            read more
          </button>
        </div>
        <img
          src={"../../Images/climbing.jpg"}
          className="photo"
          alt="author in climbing gear celebrating with arms up on a ledge"
        />
      </div>
      <div className={`read-more-modal ${readMore ? "show" : "hidden"}`}>
        {aboutMeInfo}
        <button
          className="close-icon-button"
          onClick={() => setReadMore(false)}
        >
          <FaRegWindowClose className="close-icon" />
        </button>
      </div>
    </section>
  );
}
