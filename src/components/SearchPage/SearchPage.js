import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../ChannelRow/VideoRow/VideoRow';

function SearchPage() {
    return (
        <div className='SearchPage'>
            <div className='SearchPageFilter'>
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image='https://cdn.pixabay.com/photo/2016/10/29/21/02/silhouette-1781585_960_720.png'
            channel='Nova'
            verified
            subs='35k'
            noOfVideos={383}
            description='welcome to NOVA'
            />

            <hr/>
            <VideoRow
            views='1.4M'
            subs='122k'
            description='do you want a react developer'
            timestamp='2 years ago'
            channel='Rrror Boundries'
            title='Error Boundaries in React JS'
            image='https://cdn.pixabay.com/photo/2016/04/24/22/30/monitor-1350918_960_720.png'
            />
            <VideoRow
            views='5.7M'
            subs='450k'
            description='Thanks for watching! Delight is a channel that enjoys relaxation and pleasure through food. Enjoy your time. :)'
            timestamp='2 months ago'
            channel='Delight'
            title='Amazing Cake Decorating Technique'
            image='https://cdn.pixabay.com/photo/2021/02/22/01/29/cute-cupcakes-drawing-6038426_1280.png'
            />
            <VideoRow
            views='1.4M'
            subs='122k'
            description='do you want a react developer'
            timestamp='23 seconds ago'
            channel='we are NOVA pvt ltd'
            title='Nova positions'
            image='https://cdn.pixabay.com/photo/2016/01/15/16/28/icon-set-1142000_1280.png'
            />
            <VideoRow
            views='1.4M'
            subs='122k'
            description='do you want a react developer'
            timestamp='23 seconds ago'
            channel='we are NOVA pvt ltd'
            title='Nova positions'
            image='https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_1280.png'
            />
            <VideoRow
            views='1.4M'
            subs='122k'
            description='do you want a react developer'
            timestamp='23 seconds ago'
            channel='we are NOVA pvt ltd'
            title='Nova positions'
            image='https://cdn.pixabay.com/photo/2017/02/26/00/13/athlete-2099162_960_720.png'
            />
        </div>
    );
}

export default SearchPage;
