import React from 'react';
import TopBanner from './banner_intro';
import DSFA from '../assets/banner_images/6.png';

import '../stylesheets/cfa/mainBanner.css';
import '../stylesheets/cfa/home.css';

const CFAHome = props => {


    return (
        <div className="cfa-home">
            <TopBanner text={""}/>
            <div className="dsfa-banner">
                <div className="dsfa-container">
                    <div className="quote">

                    </div>
                    <img src={DSFA} alt="students on computer"/>
                </div>
            </div>
        </div>
    )
};

export default CFAHome;