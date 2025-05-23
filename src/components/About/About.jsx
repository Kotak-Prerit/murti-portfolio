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
          <p className="intro-name">Hi, I'm Murti Lad</p>
          <p className="intro-about">
            A Fine Arts student from Surat, passionate about exploring the world
            of design. My interests lie in character design, illustra on, 3D
            modeling, rigging, anima on, and environment design. Addi onally, I
            have a keen interest in graphic design, par cularly in cra ing
            compelling brand iden es.
          </p>
        </div>
        <div className="right-panel">
          <img src="/character.webp" alt="character" />
        </div>
      </div>
      <div className="card-container" onClick={handleClick}>
        <div className={`card ${flipped ? "is-flipped" : ""}`}>
          <div className="card__face card__face--front">
            <img src="/card-front.webp" alt="ID Front" />
          </div>
          <div className="card__face card__face--back">
            <img src="/card-back.webp" alt="ID Back" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
