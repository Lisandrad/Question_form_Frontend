import React, { FC, useState } from "react";
import { FaStar } from "react-icons/fa";

const Estrellas: FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  
  return (
    <div className="starComponent">
      {[...Array(5)].map((_, index) => {
        const currentlyRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentlyRating}
              onClick={() => setRating(currentlyRating)}
            />
            <FaStar
              className="star"
              size={60}
              color={
                currentlyRating <= (hover ?? rating ?? 0) ? "#ffc107" : "#e4e5e9"
              }
              onMouseEnter={() => setHover(currentlyRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Estrellas;
