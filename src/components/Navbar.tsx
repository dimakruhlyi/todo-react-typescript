import React from 'react';

export const Navbar: React.FC = () => {
    return(
        <nav>
            <div className="nav-wrapper purple darken-4 px1">
                <a href="/" className="brand-logo">ToDOs</a>
                <ul  className="right hide-on-med-and-down">
                    <li><a href="/">ToDo List</a></li>
                    <li><a href="/">Info</a></li>
                </ul>
            </div>
        </nav>
    )
}