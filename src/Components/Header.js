import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Contact from "./Contact";

export default function Header() {
  const [hidden, setHidden] = useState(true);
  const [hiddenContact, setHiddenContact] = useState(true);

  function goTo(e) {
    if (!hiddenContact) {
      setHiddenContact(true);
    }

    let button = e.target.id;
    switch (button) {
      case "portfolio":
        document
          .getElementsByClassName("gallery")[0]
          .scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "about":
        document
          .getElementsByClassName("about-me-section")[0]
          .scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "name":
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        break;
      default:
        break;
    }

    setHidden(true);
  }

  return (
    <header className="header">
      <div className="title">
        <div>
          <h3 className="name" id="name" onClick={goTo}>
            Sara Kuenzi
          </h3>
          <small className="job-title">software engineer</small>
        </div>
        <GiHamburgerMenu
          className="menu-icon"
          onClick={() => setHidden((prevState) => !prevState)}
        />
      </div>

      <ul className={`nav ${hidden ? "hidden" : "show"}`}>
        <li className="page-link">
          <button className="portfolio" id="portfolio" onClick={goTo}>
            portfolio
          </button>
        </li>
        <li className="page-link">
          <button className="about" id="about" onClick={goTo}>
            about me
          </button>
        </li>
        <li className="page-link">
          <button
            className="contact"
            onClick={() => setHiddenContact((prevState) => !prevState)}
          >
            contact
          </button>

          {!hiddenContact && <Contact />}
        </li>
      </ul>
    </header>
  );
}
