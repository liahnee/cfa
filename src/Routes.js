import React from 'react';
import { Route } from 'react-router-dom';

import CFAIndex from './p_cfa/index';
import CFKIndex from './p_cfk/index';
import DSFAIndex from './p_dsfa/index';

const Routes = props => {
    

    return (
        <React.Fragment>
            <Route exact path="/">
                <CFAIndex />
            </Route>

            <Route exact path="/cfk">
                <CFKIndex />
            </Route>

            <Route exact path="/dsfa">
                <DSFAIndex />
            </Route>
        </React.Fragment>
    )
};

export default Routes;