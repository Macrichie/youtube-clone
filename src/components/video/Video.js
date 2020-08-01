import React from "react";
import "./Video.css";
import Avatar from "@material-ui/core/Avatar";
import {truncate} from '../../helper'


function Video({ image, title, channel, views, timestamp, avatar }) {
                    
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div class="videoCard__info">
        <Avatar className="videoCard__avatar" alt={channel} src={avatar} />
        <div class="videoCard__text">
          <h4>{truncate(title, 60)}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
