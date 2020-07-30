import React from 'react'
import './Sidebar.css'
import SideRow from '../../siderow/SideRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <SideRow selected Icon={HomeIcon} title="Home" />
            <SideRow Icon={WhatshotIcon} title="Trending"/>
            <SideRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr />
            <SideRow Icon={VideoLibraryIcon} title="Library" />
            <SideRow Icon={HistoryIcon} title="History" />
            <SideRow Icon={OndemandVideoIcon} title="Your videos" />
            <SideRow Icon={WatchLaterIcon} title="Watch Later" />
            <SideRow Icon={ThumbUpAltIcon} title="Liked videos" />
            <SideRow Icon={ExpandMoreIcon} title="Show more" />
            <hr />
        </div>
        
    )
}

export default Sidebar
