import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Players from './components/pages/Players';
import Page2 from './components/pages/player-components/Page2'
import './App.css';
import Page4 from './components/pages/player-components/Page4';
import Page3 from './components/pages/player-components/Page3';
import Page5 from './components/pages/player-components/Page5';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog"  element={<Blog />} />
          <Route path="/players" element={<Players />} />

          <Route path='/players/page2' element={<Page2 />} />
          <Route path='/players/page3' element={<Page3 />} />
          <Route path='/players/page4' element={<Page4 />} />
          <Route path='/players/page5' element={<Page5 />} />

        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
