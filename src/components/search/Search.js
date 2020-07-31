import React from "react";
import "./Search.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "../channel-row/ChannelRow";
import VideoRow from "../video-row/VideoRow";

function Search() {
  return (
    <div className="search__page">
      <div class="search__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow 
        image="https://pbs.twimg.com/profile_images/1265383416436056065/xcZs0z8p_400x400.jpg"
        channel="Code with Ola"
        verified
        subs="10M"
        noOfVideos={205}
        description="This is a fully comprehensive javascript lessons channel with exercises, notes, solutions, and projects. We will cover all fundamentals of javascript programming and give you a solid understanding of things like... 🚀"
      />
      <hr />
      <VideoRow 
          views="1.4M"
          subs="10M"
          description="Do you want to master React JS & learn how to make an income with your new skills? Follow along...🚀"
          timestamp="15 mins ago"
          channel="Code With Ola"
          title="In this FREE LIVE training, I will be showing you how to build a Tik Tok Clone with REACT JS 🚀."
          image="https://mk0knowtechie1qof48y.kinstacdn.com/wp-content/uploads/2019/07/tiktok-smartphone.jpg.webp"
      />
      <VideoRow 
          views="665k"
          subs="10M"
          description="Do you want to master React JS & learn how to make an income with your new skills? Follow along...🚀"
          timestamp="1 hour ago"
          channel="Code With Ola"
          title="Let me show you how to build a Spotify Clone with REACT JS 🚀."
          image="https://miro.medium.com/max/1200/1*nwlU17J34ToIIaQW4blOsw.jpeg"
      />
      <VideoRow 
          views="6M"
          subs="10M"
          description="Do you want to master React JS & learn how to make an income with your new skills? Follow along...🚀"
          timestamp="3 days ago"
          channel="Code With Ola"
          title="Let's build a YouTube Clone with REACT JS 🚀."
          image="https://i.morioh.com/2020/04/21/f8f0181f46e1.jpg"
      />
      <VideoRow 
          views="3.5M"
          subs="10M"
          description="Do you want to master React JS & learn how to make an income with your new skills? Follow along...🚀"
          timestamp="7 days ago"
          channel="Code With Ola"
          title="Let's build Tinder Clone with REACT JS 🚀."
          image="https://miro.medium.com/max/3324/1*1HmfQhMAQL8kukiNtMZRjA.png"
      />
      <VideoRow 
          views="50M"
          subs="10M"
          description="Do you want to master React JS & learn how to make an income with your new skills? Follow along...🚀"
          timestamp="14 days ago"
          channel="Code With Ola"
          title="How to build Netflix Clone with REACT JS 🚀."
          image="https://miro.medium.com/max/5692/1*hLrWUW2mKy-GTeujcXl0NA.png"
      />
      <VideoRow 
          views="21M"
          subs="10M"
          description="Do you want to master React JS & learn how to make an income with your new skills? Follow along...🚀"
          timestamp="1 month ago"
          channel="Code With Ola"
          title="How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)"
          image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"
      />
      <VideoRow 
          views="14M"
          subs="10M"
          description="Do you want to master React JS & learn how to make an income with your new skills? Follow along...🚀"
          timestamp="6 days ago"
          channel="Code With Ola"
          title="Build a COVID-19 Tracker with REACT JS (React Hooks and Material UI)"
          image="https://i.ytimg.com/vi/cF3pIMJUZxM/maxresdefault.jpg"
      />
    </div>
  );
}

export default Search;
