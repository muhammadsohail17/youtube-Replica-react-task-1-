import React from 'react';
import "./VideoRow.css";

function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className='VideoRow'>
            <img src={image} alt=''/>
            <div className='VideoRowText'>
                <h3>{title}</h3>
                <p className='VideoRowHeadline'>
                    {channel} . {' '}
                    <span className='VideoRowSubs'>
                        <span className='VideoRowSubno'>{subs}</span>
                         subscribers </span>{' '}
                    {views} views .{timestamp}</p>
                <p className='VideoRowDescription'>{description}</p>
            </div>
        </div>
    )
}

export default VideoRow;
