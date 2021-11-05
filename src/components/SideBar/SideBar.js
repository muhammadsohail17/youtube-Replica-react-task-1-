import React from 'react';
import "./SideBar.css";
import SideBarRow from './SideBarRow/SideBarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SideBar() {
    return (
        <div className='SideBar'>
            
            <SideBarRow Icon={HomeIcon} title='Home'/>
            <SideBarRow Icon={WhatshotIcon} title='Trending'/>
            <SideBarRow Icon={SubscriptionsIcon} title='Subscription'/>
            <hr/>
            <SideBarRow Icon={LibraryAddIcon} title='Library'/>
            <SideBarRow Icon={HistoryIcon} title='History'/>
            <SideBarRow Icon={WatchLaterIcon} title='Watch latter'/>
            <SideBarRow Icon={ThumbUpIcon} title='Liked videos'/>
            <SideBarRow Icon={ExpandMoreIcon} title='Expand More'/>
        </div>
    )
}

export default SideBar;
