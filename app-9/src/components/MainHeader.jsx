import React from 'react'
import {NavLink} from "react-router-dom";

function MainHeader() {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/home'>Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>Sign Up </NavLink>
                    </li>
                    <li>
                        <NavLink to='/details'>details </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;