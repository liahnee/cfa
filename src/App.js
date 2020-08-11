import React from 'react';
import './stylesheets/App.css';

import TopNavBar from './components/topNavBar';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavBar />
      </header>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
