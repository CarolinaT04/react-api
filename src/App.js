import React, { Component } from 'react';
import logo from './logo.svg';
import Characters from './componets/charactersItem'
import NavigationBar from './navigation';

function App () {

  return (
<div className="App">
      <NavigationBar />
      <Characters/>
      
</div>

    );
  }

export default App;

