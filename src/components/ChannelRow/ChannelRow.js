import React from 'react';
import "./ChannelRow.css";
import Avatar from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/Verified';

function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
    return (
        <div className='ChannelRow'>
            <Avatar className='ChannelRowLogo'
            alt={channel} src={image}/>
            <div className='channelRowText'>
                <h4>
                    {channel} {verified && <VerifiedIcon/>}
                </h4>
                <p>
                    {subs} subscribers . {noOfVideos}videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow;
