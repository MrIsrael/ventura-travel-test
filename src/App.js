import React, { Fragment } from 'react'
import './App.css';

import { connectToAPI } from 

function App() {
  return (
    <Fragment>
      <h1>Travel list</h1>
      <button className='s-button' ocnClick={ connectToAPI() }>Get data</button>
    </Fragment>
  );
}

export default App;
