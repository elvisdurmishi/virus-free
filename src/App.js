import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Components/FontAwesomeIcons';
import './App.css';
import Sidebar from './Components/Sidebar';
import Circles from './Components/Circles';

// Pages
import Home from './pages/Home';
import File from './pages/File';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <main>
      <Circles></Circles>
      <div className="glass">
        <Sidebar></Sidebar>
        <div className="games">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/virus-free" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/file" component={File} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={Signup} />
            </Switch>
          </Router>
        </div>
      </div>
    </main>
  );
}

export default App;
