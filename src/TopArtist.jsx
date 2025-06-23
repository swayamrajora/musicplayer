import React, { useState } from 'react';
import './TopArtist.css';

const TopArtists = () => {
  const [showAll, setShowAll] = useState(false);

  const artists = [
    { name: 'Billie Eilish', image: 'https://1187604958.rsc.cdn77.org/data/images/full/301369/billie-eilish.jpg' },
    { name: 'Justin Bieber', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9quGXGGKC-lDjdFOojZKb6PYx2lOHI4_qmIE3D1AVLJedcCuuvPU7AZJLnnEN_Au_r_sq9vCZ78EG8EzzdlH3Q' },
    { name: 'Adele', image: 'https://rollingout.com/wp-content/uploads/2024/05/shutterstock_2120521604.jpg' },
    { name: 'Taylor Swift', image: 'https://th.bing.com/th/id/OIP.azA2p3hyzskta7VsAKW4AAHaLf?rs=1&pid=ImgDetMain' },
    { name: 'The Weeknd', image: 'https://www.rollingstone.com/wp-content/uploads/2024/04/The-Weeknd-gaza-fund.jpg?w=1581&h=1054&crop=1' },
    { name: 'Drake', image: 'https://th.bing.com/th/id/OIP.pTFF6Lv2D3-TxIQn6G-oMgHaHa?o=7rm=3&rs=1&pid=ImgDetMain' },
    { name: 'Ariana Grande', image: 'https://cdn.britannica.com/92/211792-050-E764F875/American-singer-Ariana-Grande-2018.jpg' },
    { name: 'Ed Sheeran', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPhhNF4EfvcadpieVxxhsrSexVKkDSL_Clfo7syENSnwMLgwlhejaunSx1uUFCz0dShDNv0CzT4x3Wjafv17TDi4VQ995X2W5ZsKb1aE8-Q' },
    { name: 'Dua Lipa', image: 'https://i2-prod.liverpoolecho.co.uk/article31845086.ece/ALTERNATES/s1200/1_Dua-Lipa.jpg' },
    { name: 'Bruno Mars', image: 'https://wallpapers.com/images/hd/afro-bruno-mars-dbgva1116dsrjj4q.jpg' }
  ];

  const visibleArtists = showAll ? artists : artists.slice(0, 5);

  return (
    <div className="top-artists-container">
      <div className="top-artists-header">
        <h2>Top Artists</h2>
        <button className="toggle-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'See Less' : 'See All'}
        </button>
      </div>

      <div className={`artist-grid ${showAll ? 'expanded' : 'collapsed'}`}>
        {visibleArtists.map((artist, index) => (
          <div className="artist-card" key={index}>
            <img src={artist.image} alt={artist.name} />
            <span>{artist.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
