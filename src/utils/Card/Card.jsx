import { useState } from "react";
import "./Card.css";

const Card = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${flipped ? "is-flipped" : ""}`}>
        <div className="card__face card__face--front">
          <img src="/card-front.png" alt="ID Front" />
        </div>
        <div className="card__face card__face--back">
          <img src="/card-back.png" alt="ID Back" />
        </div>
      </div>
    </div>
  );
};

export default Card;
