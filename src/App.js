import React from 'react';
import './stylesheets/App.css';
import './stylesheets/secNavBar.css';
import './stylesheets/topNavBar.css';

import TopNavBar from './components/topNavBar';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
        <TopNavBar />
        <Routes />\
    </div>
  );
}

export default App;
