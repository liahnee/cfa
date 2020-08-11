import React from 'react';

import CFANavBar from './cfaNavBar';
import Routes from './routes';

function CFAIndex() {
  return (
    <div className="cfa-home">
      <header className="cfa-header">
        <CFANavBar />
      </header>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default CFAIndex;
