import React from 'react';
import './stylesheets/App.css';
import './stylesheets/secNavBar.css';
import './stylesheets/topNavBar.css';
import './stylesheets/footer.css';

import TopNavBar from './components/topNavBar';
import Routes from './Routes';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <TopNavBar />
        <Routes />
        <Footer />
    </div>
  );
}

export default App;
