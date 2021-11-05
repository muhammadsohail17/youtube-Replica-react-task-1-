import React from 'react';
import { Link } from 'react-router-dom';
import "./SideBarRow.css"

function SideBarRow({ Icon,title}) {
    return (
        <Link className='SideBarLink' to={`/${title}`}>
        <div className='SideBarRow' >
            <Icon className='SideBarRowIcon'/>
            <h2 className='SideBarRowTitle'>{title}</h2>
        </div>
        </Link>
    )
}

export default SideBarRow;
