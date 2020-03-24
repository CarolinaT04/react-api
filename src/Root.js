
import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Index from './components/Index';
import ContactDetail from './components/ContactDetail';

import App from './components/App';

class Root extends Component {

  // Es necesario proveer una lista de rutas para nuestra aplicación,
  // y, en este caso, lo hacemos desde el componente Root.
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Index}/>
          <Route path='/contact/:id' component={ContactDetail} />
        </Route>
      </Router>
    );
  }
}

export default Root;