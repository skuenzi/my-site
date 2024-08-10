import resume from "../SaraKuenziResume.pdf";

export default function Home() {
  return (
    <main className="home">
      <img src={"../../Images/headshot1.jpg"} alt="author" className="photo" />

      <div className="home-content">
        <h1 className="section-title">Kuenzi</h1>

        <h3 className="pronunciation">
          (ken - zee) <br /> <span className="italic">noun, proper</span>
        </h3>

        <p className="home-blurb">
          <span className="italic">definition</span>
          <span className="bold">1.</span>
          The last name of a developer who creates websites and apps with JS,
          TS, React, CSS, and HTML. Also,
          <span className="bold">2.</span> a person who excels at
          problem-solving and learns at near lightspeed
        </p>

        <div className="buttons">
          <div className="row1">
            <a
              className="button download-resume"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              download my resume
            </a>
            <button
              className="button see-my-work"
              onClick={() =>
                document
                  .getElementsByClassName("gallery")[0]
                  .scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              see my work
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
