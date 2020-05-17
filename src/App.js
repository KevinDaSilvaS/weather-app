import React from 'react';
import Weather from './Components/Weather.js'
import './Components/Weather.css'

function App() {

  return (
    <div>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
      </div>
      <div className="App">
        <Weather></Weather>
      </div>
    </div>
  );
}

export default App;
