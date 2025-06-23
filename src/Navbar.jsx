import React from "react";
import { FaBell, FaCog, FaSearch } from "react-icons/fa";
import profilePic from "./assets/profilepic.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <a href="/" className="nav-link">MUSIC</a>
        <a href="/" className="nav-link">PODCAST</a>
        <a href="/" className="nav-link">LIVE</a>
      </div>

      <div className="search-bar">
        <FaSearch style={{ marginRight: 8 }} />
        <input
          type="text"
          placeholder="Type here to search"
          className="search-input"
        />
      </div>

      <div className="right-section">
        <FaBell className="icon" />
        <FaCog className="icon" />
        <div className="profile">
          <img src={profilePic} alt="Profile" className="profile-img" />
          <span className="profile-name">Swayam Rajora</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
