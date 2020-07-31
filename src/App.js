import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import RecommendedVideos from "./components/recommended-videos/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/search/Search";



function App() {
  return (
    <div className="app">
      <Router>
      <Header />

        <Switch>
          <Route exact path="/search/:searchTerm">
            <div class="app__page">
              <Sidebar />
              <Search />
            </div>
          </Route>
          <Route path="/">
            <div class="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
