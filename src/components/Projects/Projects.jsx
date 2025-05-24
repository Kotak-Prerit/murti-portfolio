import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
    setContext(ctx);

    const getOffset = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (e.touches) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
      return {
        x: e.offsetX,
        y: e.offsetY,
      };
    };

    const handleTouchStart = (e) => {
      e.preventDefault();
      const { x, y } = getOffset(e);
      ctx.beginPath();
      ctx.moveTo(x, y);
      setIsDrawing(true);
    };

    const handleTouchMove = (e) => {
      if (!isDrawing) return;
      e.preventDefault();
      const { x, y } = getOffset(e);
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const handleTouchEnd = () => {
      ctx.closePath();
      setIsDrawing(false);
    };

    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd);

    return () => {
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDrawing]);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    if (!context) return;
    context.closePath();
    setIsDrawing(false);
  };

  return (
    <div>
      <div className="project-container">
        <img className="branding" src="Branding.webp" alt="Branding section" />

        <div className="seven-eleven">
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
              <canvas
                ref={canvasRef}
                width={400}
                height={400}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  cursor: "crosshair",
                  backgroundColor: "white",
                  touchAction: "none",
                }}
              />
              <p className="draw">Draw anything</p>
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
        <div className="seven-eleven">
          <div className="tbq-showcase" style={{ paddingInline: "5%" }}>
            <img src="3d2.webp" alt="redesign" />
          </div>
          <div className="redesigned-showcase">
            <img src="3d1.webp" alt="redesign" />
          </div>
        </div>
        <img className="branding" src="poster.webp" alt="Branding section" />
        <div className="seven-eleven">
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
              <h1 className="brand-heading">Event Poster</h1>
            </div>
          </div>
          <div className="redesigned-showcase">
            <img src="Ganesh.webp" alt="redesign" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
