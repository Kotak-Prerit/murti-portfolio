import React, { forwardRef } from "react";
import "./Projects.css";

const Projects = forwardRef(({ refs }) => {
  return (
    <div>
      <div className="project-container">
        <img className="branding" src="Branding.webp" alt="Branding section" />

        <div className="seven-eleven" ref={refs.brandingRef}>
          <h1 className="top-left-number kanit">01</h1>
          <div className="seven-el-header">
            <div className="seven-el-desc">
              <h1 className="brand-heading">Seven Elven :</h1>
              <p className="explaination">
                Redesign and rebranding of Seven Eleven A convenience store.
                It’s seen in america besids gas station and often people come by
                for a quick or simply for grab and go. I have represented that
                phenomenon by minimalist bold line based logo
              </p>
            </div>
            <div className="software-used">
              <img src="7-11-softwares.png" alt="softwares Icon" />
            </div>
          </div>
          <div className="redesigned-showcase">
            <img src="redesigned.png" alt="redesign" />
          </div>
          <div className="banner-showcase">
            <img src="7-11-banner.png" alt="redesign" />
          </div>
          <div className="seven-el-draw">
            <div className="canvas-container">
              <img
                src="logo-animation.gif"
                alt="logo-animation"
                className="logo-animation"
              />
              <img className="cap" src="7-11-cap.png" alt="7-11" />
              <img className="cards" src="7-11-cards.png" alt="7-11" />
              <img className="colors" src="7-11-colors.png" alt="7-11" />
              <img className="bag" src="7-11-bag.png" alt="7-11" />
            </div>
          </div>
          <div className="signages">
            <li>Signages</li>
            <img src="signages.png" alt="signs" />
          </div>
          <div className="signages">
            <div className="mockups">
              <img src="mockup.png" alt="mockup" />
            </div>
            <img src="7-11-ads.png" alt="ads" />
          </div>
        </div>
        <div className="seven-eleven">
          <h1 className="top-left-number kanit">02</h1>
          <div className="seven-el-header">
            <div className="seven-el-desc">
              <h1 className="brand-heading">Arlo :</h1>
              <p className="explaination">
                Freelance branding project for "Arlo," an interior design
                startup based in Surat — included logo design and social media
                content creation.
              </p>
            </div>
            <div className="software-used">
              <img src="7-11-softwares.png" alt="softwares Icon" />
            </div>
          </div>
          <div className="redesigned-showcase">
            <img src="arlo-logo.png" alt="redesign" />
          </div>
          <div className="banner-showcase arlo-insta">
            <img src="arlo-insta.png" alt="redesign" />
          </div>
          <div className="arlo-showcase">
            <img src="arlo-post.png" alt="redesign" />
          </div>
          <div className="arlo-magazine">
            <img src="arlo-magazine.png" alt="redesign" />
          </div>
        </div>
        <div className="seven-eleven">
          <h1 className="top-left-number kanit">03</h1>
          <div className="seven-el-header">
            <div className="seven-el-desc">
              <h1 className="brand-heading">The Brown Quarters :</h1>
              <p className="explaination">
                Crafted a distinctive logo and packaging design for a
                Surat-based coffee cart, known for serving high-quality
                specialty coffee.
              </p>
            </div>
            <div className="software-used">
              <img src="7-11-softwares.png" alt="softwares Icon" />
            </div>
          </div>
          <div className="redesigned-showcase">
            <img src="tbq-logo.png" alt="redesign" />
          </div>
          <div className="banner-showcase arlo-insta">
            <img src="tbq-cart.png" alt="redesign" />
          </div>
          <div className="tbq-showcase">
            <img src="tbq-packing.png" alt="redesign" />
          </div>
          <div className="tbq-showcase">
            <img src="tbq-branding.png" alt="redesign" />
          </div>
        </div>
        <img className="branding" src="3d.webp" alt="Branding section" />
        <div className="seven-eleven" ref={refs.modelingRef}>
          <div className="tbq-showcase" style={{ paddingInline: "5%" }}>
            <img src="3d2.webp" alt="redesign" />
          </div>
          <div className="redesigned-showcase">
            <img src="3d1.webp" alt="redesign" />
          </div>
        </div>
        <img className="branding" src="poster.webp" alt="Branding section" />
        <div className="seven-eleven" ref={refs.posterRef}>
          <h1 className="top-left-number kanit">01</h1>
          <div className="seven-el-header">
            <div className="seven-el-desc">
              <h1 className="brand-heading">Event Poster</h1>
            </div>
          </div>
          <div className="redesigned-showcase">
            <img src="Ganesh.webp" alt="redesign" />
          </div>
        </div>
        <div className="seven-eleven">
          <h1 className="top-left-number kanit">02</h1>
          <div className="seven-el-header">
            <div className="seven-el-desc">
              <h1 className="brand-heading">Minimal Move Poster</h1>
            </div>
          </div>
          <div className="redesigned-showcase">
            <img src="movie.webp" alt="redesign" />
          </div>
        </div>
        <div className="seven-eleven">
          <h1 className="top-left-number kanit">03</h1>
          <div className="seven-el-header">
            <div className="seven-el-desc">
              <h1 className="brand-heading">Campaign Poster</h1>
            </div>
          </div>
          <div className="redesigned-showcase">
            <img src="campaign.webp" alt="redesign" />
          </div>
          <div className="redesigned-showcase">
            <img src="crossant.webp" alt="redesign" />
          </div>
        </div>
        <div className="seven-eleven">
          <h1 className="top-left-number kanit">04</h1>
          <div className="seven-el-header">
            <div className="seven-el-desc">
              <h1 className="brand-heading">Coming Soon Poster</h1>
            </div>
          </div>
          <div className="redesigned-showcase">
            <img src="10days.webp" alt="redesign" />
          </div>
        </div>
        <img className="branding" src="typeface.png" alt="Branding section" />
        <div className="seven-eleven" ref={refs.typefaceRef}>
          <div className="redesigned-showcase">
            <img src="spider.webp" alt="redesign" />
          </div>
          <div className="redesigned-showcase spider-showcase">
            <img src="chars.webp" alt="redesign" />
            <img
              src="spider-logo.png"
              alt="spider logo"
              className="spider-logo"
            />
          </div>
          <div className="redesigned-showcase" style={{ marginTop: "7vh" }}>
            <img src="spider-mockup.webp" alt="redesign" />
          </div>
          <div className="redesigned-showcase" style={{ marginTop: "7vh" }}>
            <img src="lof.webp" alt="redesign" />
          </div>
        </div>
        <img
          className="branding"
          src="photography.webp"
          alt="Branding section"
        />
        <div className="seven-eleven" ref={refs.photoRef}>
          <div className="redesigned-showcase">
            <img src="photo1.webp" alt="redesign" />
          </div>
          <div className="redesigned-showcase ">
            <img src="photo2.webp" alt="redesign" />
          </div>
        </div>
        <img
          className="branding"
          src="story-book.webp"
          alt="Branding section"
        />
        <div className="seven-eleven" ref={refs.storybookRef}>
          <div className="redesigned-showcase">
            <img src="story-page2.webp" alt="redesign" />
          </div>
          <div className="redesigned-showcase ">
            <img src="story-page1.webp" alt="redesign" />
          </div>
        </div>
        <img
          className="branding"
          src="Illustration.webp"
          alt="Branding section"
        />
        <div className="seven-eleven" ref={refs.illustrationRef}>
          <div className="redesigned-showcase">
            <img src="il-1.webp" alt="redesign" />
          </div>
          <div className="redesigned-showcase ">
            <img src="il-2.webp" alt="redesign" />
          </div>
          <div className="redesigned-showcase ">
            <img src="il-3.webp" alt="redesign" />
          </div>
          <div className="redesigned-showcase ">
            <img src="il-4.webp" alt="redesign" />
          </div>
          <div className="redesigned-showcase ">
            <img src="il-5.webp" alt="redesign" />
          </div>
          <div className="redesigned-showcase ">
            <img src="il-6.webp" alt="redesign" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
