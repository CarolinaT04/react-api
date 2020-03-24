import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

class App extends Component {
constructor(props){
    super(props);
    this.state = {  
      items: [],
      isLoaded: false,

    }
  
}

componentDidMount() {

  fetch('https://breakingbadapi.com/api/characters')
  .then(res => res.json())
  .then(json => {
    this.setState({
        isLoaded: true,
        items: json,
    })
  });
}


render() {

  var { isLoaded , items } = this.state;

  if (!isLoaded){
     
    return <div>Loading...</div>;
  }

  else{

  return (

    <div className= "App">
     <ul >
       {items.map(item => (
        
       <li key = {item.id}>
        Name: {item.name} | Birthday: {item.birthday}
         </li>
        ))};
     </ul>

    </div>
    );
  }
}
}

export default App;
