import "../header/Header.css";

const Header = ({ sectionRefs }) => {
  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="banner-wrapper"></div>
      <div className="menu-section">
        <img src="/portfolio-bg.webp" alt="potfolio background" />
        <div className="menu-container">
          <img src="/portfolio-title.webp" alt="portfolio" />
          <div className="menu-buttons">
            <button>Contacts</button>
            <button onClick={() => scrollToSection("Branding")}>
              Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
