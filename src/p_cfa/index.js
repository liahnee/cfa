import React from 'react';

import CFANavBar from './cfaNavBar';
import Routes from './routes';

function CFAIndex() {
  return (
    <div className="index">
        <CFANavBar />
        <Routes />
    </div>
  );
}

export default CFAIndex;
