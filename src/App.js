import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Components/FontAwesomeIcons';
import './App.css';
import Sidebar from './Components/Sidebar';
import Circles from './Components/Circles';

// Pages
import Home from './pages/Home';
import File from './pages/File';

function App() {
  return (
    <main>
      <Circles></Circles>
      <div className="glass">
        <Sidebar />
        <div className="main-container">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/virus-free" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/file" component={File} />
            </Switch>
          </Router>
        </div>
      </div>
    </main>
  );
}

export default App;
