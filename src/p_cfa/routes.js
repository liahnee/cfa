import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';
import AboutUs from './aboutUs';
import Donate from './donate';

const Routes = props => {

    return (
        <React.Fragment>
            <Route exact path="/cfa">
                <Home />
            </Route>

            <Route exact path="/cfa/aboutus">
                <AboutUs />
            </Route>

            <Route exact path="/cfa/donate">
                <Donate />
            </Route>
        </React.Fragment>
    )
};

export default Routes;