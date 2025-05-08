import Card from "../../utils/Card/Card";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About me</h1>
      <div className="about-me">
        <div className="left-panel">
          <p className="intro-name">Hi, I'm Murti Lad</p>
          <p className="intro-name">
            A Fine Arts student from Surat, passionate about exploring the world
            of design. My interests lie in character design, illustra on, 3D
            modeling, rigging, anima on, and environment design. Addi onally, I
            have a keen interest in graphic design, par cularly in cra ing
            compelling brand iden es.
          </p>
        </div>
        <div className="right-panel">
          <img src="/character.png" alt="character" />
        </div>
      </div>
      <Card />
    </div>
  );
};

export default About;
