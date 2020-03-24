import React, { Component } from 'react';
import logo from './logo.svg';
import Characters from './componets/charactersItem'
import NavigationBar from './navigation';
import Episodes from './componets/espisodes';

function Episodes () {

  return (
<div className="Episodes">
      <NavigationBar />
      <Episodes/>
      
</div>

    );
  }

export default Episodes;
