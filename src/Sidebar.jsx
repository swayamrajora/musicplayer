import React from 'react';
import {
  MdExplore,
  MdLibraryMusic,
  MdAlbum,
  MdMic,
  MdRadio,
  MdAccessTime,
  MdFavoriteBorder,
  MdFolder,
  MdAddBox,
  MdPlaylistPlay
} from 'react-icons/md';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">🎵 Groovy</h2>

      <div className="section">
        <h5 className="section-title">MENU</h5>
        <ul>
          <li><MdExplore /> <span>Explore</span></li>
          <li><MdLibraryMusic /> <span>Genres</span></li>
          <li><MdAlbum /> <span>Albums</span></li>
          <li><MdMic /> <span>Artists</span></li>
          <li><MdRadio /> <span>Radio</span></li>
        </ul>
      </div>

      {/* Library Section */}
      <div className="section">
        <h5 className="section-title">LIBRARY</h5>
        <ul>
          <li><MdAccessTime /> <span>Recent</span></li>
          <li><MdAlbum /> <span>Albums</span></li>
          <li><MdFavoriteBorder /> <span>Favourites</span></li>
          <li><MdFolder /> <span>Local</span></li>
        </ul>
      </div>

      {/* Playlist Section */}
      <div className="section">
        <h5 className="section-title">PLAYLIST</h5>
        <ul>
          <li><MdAddBox /> <span>Create New</span></li>
          <li><MdPlaylistPlay /> <span>Design Flow</span></li>
          <li><MdPlaylistPlay /> <span>Best of 2020</span></li>
          <li><MdPlaylistPlay /> <span>Nigeria Jams</span></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
