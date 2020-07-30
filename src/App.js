import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import RecommendedVideos from "./components/recommended-videos/RecommendedVideos";

function App() {
  return (
    <div className="app">
      <Header />
      <div class="app__page">
        {/* Sidebar */}
        <Sidebar />
        {/* App page */}
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
