import "./Contact.css";
import {
  FaInstagramSquare,
  FaBehanceSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Contact = ({ sectionRefs }) => {
  const handleScroll = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div className="footer-child">
        <div className="flexbox">
          <div className="connect-wrapper">
            <div className="connect">
              <h1 className="connect-heading">Let's Connect</h1>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST">
              <div className="form-flex">
                <input
                  type="hidden"
                  name="access_key"
                  value="d90f1c15-f043-4a05-a475-ab26625fb220"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                />

                <textarea
                  name="message"
                  placeholder="Write me a message"
                  rows={2}
                  cols={100}
                />

                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>

          <div className="socials">
            <h1 className="socials-link connect-heading">Works</h1>
            {Object.keys(sectionRefs).map((key) => (
              <p
                className="subDirect"
                key={key}
                style={{ cursor: "pointer" }}
                onClick={() => handleScroll(key)}
              >
                {key}
              </p>
            ))}
          </div>
          <div className="socials">
            <h1 className="socials-link connect-heading">Socials</h1>
            <p className="insta">
              <a
                href="https://www.instagram.com/the_crucified_/"
                target="_blank"
              >
                <FaInstagramSquare />
                Instagram
              </a>
            </p>
            <p className="behance">
              <a href="https://www.behance.net/Murti_lad" target="_blank">
                <FaBehanceSquare />
                Behance
              </a>
            </p>
            <p className="whatsapp">
              <a
                href="https://wa.me/919512091059?text=Hi%20there%2C%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsappSquare />
                WhatsApp
              </a>
            </p>
          </div>
        </div>
        <h1 className="footer-name">Murti Lad</h1>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Murti Lad. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
