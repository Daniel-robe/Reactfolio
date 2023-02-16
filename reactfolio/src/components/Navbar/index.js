import React from 'react';

function Navbar(props) {
    return (
        <nav class="text-right">
            <ul>
                <li> <a href="#aboutMe">About Me</a></li>
                <li> <a href="#myWork">My Work</a></li>
                <li> <a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;