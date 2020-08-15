import React from 'react'; 

import '../stylesheets/cfa/navbar.css';

const CFANavBar = props => {

    return (
        <nav class="cfa-navbar sec-navbar">
            <div class="cfa-nav-group">
                <ul>
                    <a class="cfa-nav-item">
                        <li>Computing for Kids</li>
                    </a>
                    <a class="cfa-nav-item">
                        <li>Digital Skills for All</li>
                    </a>
                    <a class="cfa-nav-item">
                        <li>CFA Competitions</li>
                    </a>
                </ul>
                
            </div>
        </nav>
    )
};

export default CFANavBar;