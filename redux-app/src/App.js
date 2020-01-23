import React from 'react';
import axios from 'axios';
import './App.css';

import SpellSearcher from './components/spellSearcher'

function App() {
  axios.get('http://www.dnd5eapi.co/api/spells')
  .then(res => console.log(res))
  .catch(err => console.log(err))
  return (
    <div className="App">
      <header className="App-header">
        <SpellSearcher />
      </header>
    </div>
  );
}

export default App;
