import React from 'react'; 

import '../stylesheets/cfa/navbar.css';

const CFANavBar = props => {

    return (
        <nav className="cfa-navbar sec-navbar">
            <div className="cfa-nav-group">
                <ul>
                    <a className="cfa-nav-item">
                        <li>Computing for Kids</li>
                    </a>
                    <a className="cfa-nav-item">
                        <li>Digital Skills for All</li>
                    </a>
                    <a className="cfa-nav-item">
                        <li>CFA Competitions</li>
                    </a>
                </ul>
                
            </div>
        </nav>
    )
};

export default CFANavBar;