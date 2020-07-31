import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutline";
import {truncate} from '../../helper'

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channel} />
      <div class="channelRow__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{truncate(description, 205)}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
