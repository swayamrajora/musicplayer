import React from "react"; 
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TrendingSection from "./TrendingSection";
import TopArtists from "./TopArtist";
import TopCharts from "./Topchart";
import GenresBox from "./GenresBox";
import MusicCard from "./MusicCard";
import trynewimage from "./assets/trynew1.png";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
        <Navbar />
        <TrendingSection />

        {/* Image in top right corner */}
        <div style={{
          position: "absolute",
          top: "110px",
          right: "150px",
          width: "260px",
          height: "auto",
          zIndex: 10
        }}>
          <img
            src={trynewimage}
            alt="Try New"
            style={{
              width: "150%",
              height: "auto",
              borderRadius: "12px",
              objectFit: "cover"
            }}
          />
        </div>

        <div style={{ backgroundColor: "#121212", minHeight: "100vh", padding: "5px" }}>
          <TopArtists />

          {/* Charts and Genre box side by side */}
          <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
            <div style={{ flex: 1 }}>
              <TopCharts />
            </div>
            <div style={{ flex: 1 }}>
              <GenresBox />
            </div>
          </div>

          {/* Music Card below that */}
          <div style={{ marginTop: "-614px", marginLeft: "71%" }}>
            <MusicCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
