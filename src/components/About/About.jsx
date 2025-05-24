import { useState } from "react";
import "./About.css";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped((prev) => !prev);
  };
  return (
    <div className="about-container">
      <h1>About me</h1>
      <div className="about-me">
        <div className="left-panel">
          <div className="typing">
            <p>Hi, I'm Murti Lad.</p>
          </div>
          <div className="typing">
            <p>
              A Fine Arts student from Surat, Gujarat, India. Passionate about
              exploring the world of design. My interests lie in character
              design, illustration, 3D modeling, rigging, animation, and
              environment design. Additonally, I have a keen interest in graphic
              design. Particularly in crafting compelling brand identities.
            </p>
          </div>
        </div>
        <div className="right-panel">
          <img src="/character.webp" alt="character" />
        </div>
      </div>
      <div className="card-container" onClick={handleClick}>
        <p className="card_title">Click on the Card to Rotate</p>
        <div className={`card ${flipped ? "is-flipped" : ""}`}>
          <div className="card__face card__face--front">
            <img src="/card-front.webp" alt="ID Front" />
          </div>
          <div className="card__face card__face--back">
            <img src="/card-back.webp" alt="ID Back" />
          </div>
        </div>
      </div>
      <hr />
      <div className="project-section">
        <div className="project-sp-img">
          <img src="projects-tag.webp" alt="Projects Header Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
