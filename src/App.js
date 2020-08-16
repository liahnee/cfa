import React from 'react';
import './stylesheets/App.css';
import './stylesheets/secNavBar.css';
import './stylesheets/topNavBar.css';
import './stylesheets/footer.css';
import './stylesheets/slideOut.css';

import TopNavBar from './components/topNavBar';
import Routes from './Routes';
import Footer from './components/footer';
import SlideOut from './components/slideOut';

function App() {
  return (
    <div className="App">
        <SlideOut />
        <TopNavBar />
        <Routes />
        <Footer />
    </div>
  );
}

export default App;
