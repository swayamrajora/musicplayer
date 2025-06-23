import React, { useState } from "react";
import "./GenresBox.css";

const genres = [
  "Pop", "Hip-Hop", "Rock", "Jazz",
  "Electronic", "Classical", "R&B", "Reggae",
  "Blues", "Country", "Metal", "Folk"
];

const GenresBox = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleGenres = showAll ? genres : genres.slice(0, 8);

  return (
    <div className="genres-container">
      <div className="genres-header">
        <h3>Genres</h3>
        <button className="see-all-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "See Less" : "See All"}
        </button>
      </div>
      <div className="genres-tags">
        {visibleGenres.map((genre, index) => (
          <button key={index} className="genre-tag">
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenresBox;
