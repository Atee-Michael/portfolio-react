// Navigation links and logo

import React from "react";

function Header ({setSelectedComponent}) {
    return (
        <div>
        <h1>My Navbar</h1>
        <nav>
            <ul>
                <li><button onClick={() => setSelectedComponent('Home')}>Home</button></li>
                <li><button onClick={() => setSelectedComponent('About')}>About Me</button></li>
                <li><button onClick={() => setSelectedComponent('Projects')}>My Projects</button></li>
                <li><button onClick={() => setSelectedComponent('Contact')}>Contact</button></li>
            </ul>
        </nav>
        </div>

    )
}

export default Header;