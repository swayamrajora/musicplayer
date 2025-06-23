import React, { useState } from 'react';
import './Topchart.css';
import { FaPlay, FaPlus } from 'react-icons/fa';

const topCharts = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    image: "https://th.bing.com/th/id/OIP.ixGAHrJZ4Yl_2vPYNSI2ogHaHa?rs=1&pid=ImgDetMain",
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    image: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e406c545-2ff1-4c83-ae0b-fdac1dd62a8d/dfu483b-e23f518f-f3ae-42c5-b886-ce70d57c40ed.jpg/v1/fill/w_894,h_894,q_70,strp/cover_art_for_levitating_by_dua_lipa_by_studiorinagraphic_dfu483b-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U0MDZjNTQ1LTJmZjEtNGM4My1hZTBiLWZkYWMxZGQ2MmE4ZFwvZGZ1NDgzYi1lMjNmNTE4Zi1mM2FlLTQyYzUtYjg4Ni1jZTcwZDU3YzQwZWQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KoA_7EMfnfFAl_fI_-QiCx6eWurRYLvtugQp8HFg16M",
  },
  { 
    title: "Peaches",
    artist: "Justin Bieber",
    image: "https://i.ytimg.com/vi/BXegBwEvIrg/maxresdefault.jpg",
  },
  {
    title: "Hello",
    artist: "Adele",
    image: "https://th.bing.com/th/id/OIP.kUydYS-HP6MBV-YcimuUBAHaD4?o=7rm=3&rs=1&pid=ImgDetMain",
  }
];

const TopCharts = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleTracks = showMore ? topCharts : topCharts.slice(0, 3);

  return (
    <div className={`top-charts-container ${showMore ? 'expanded' : ''}`}>
      <h2 className="top-charts-title">Top Charts</h2>
      {visibleTracks.map((track, index) => (
        <div className="chart-item" key={index}>
          <img src={track.image} alt={track.title} className="chart-image" />
          <div className="chart-details">
            <div className="chart-song">{track.title}</div>
            <div className="chart-artist">{track.artist}</div>
          </div>
          <div className="chart-actions">
            <button className="icon-btn play-btn">
              <FaPlay />
            </button>
            <button className="icon-btn add-btn">
              <FaPlus />
            </button>
          </div>
        </div>
      ))}
      <button className="see-more-btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

export default TopCharts;
