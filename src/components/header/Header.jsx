import "../header/Header.css";

const Header = () => {
  return (
    <>
      <div className="banner-wrapper"></div>
      <div className="menu-section">
        <img src="/portfolio-bg.webp" alt="potfolio background" />
        <div className="menu-container">
          <img src="/portfolio-title.webp" alt="portfolio" />
          <div className="menu-buttons">
            <button>Contacts</button>
            <button>Projects</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
