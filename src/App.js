import React from 'react';
import './Components/FontAwesomeIcons';
import './App.css';
import Sidebar from './Components/Sidebar';
import MainPage from './Components/MainPage';
import Circles from './Components/Circles';
function App() {
  return (
    <main>
      <Circles></Circles>
      <div className="glass">
        <Sidebar></Sidebar>
        <MainPage></MainPage>
      </div>
    </main>
  );
}

export default App;
