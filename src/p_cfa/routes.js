import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';
import AboutUs from './aboutUs';
import Donate from './donate';

const Routes = props => {

    return (
        <div className="page">
            <Route exact path="/">
                <Home />
            </Route>
{/* 
            <Route exact path="/cfa/aboutus">
                <AboutUs />
            </Route>

            <Route exact path="/cfa/donate">
                <Donate />
            </Route> */}
        </div>
    )
};

export default Routes;