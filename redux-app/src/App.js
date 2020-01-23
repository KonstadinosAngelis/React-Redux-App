import React from 'react';
import axios from 'axios';
import './App.css';

import SpellSearcher from './components/spellSearcher'

function App() {
  axios.get('http://www.dnd5eapi.co/api/spells/acid-arrow')
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  return (
    <div className="App">
        <SpellSearcher />
    </div>
  );
}

export default App;
