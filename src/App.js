// Holds the global state

import React, { Component } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight} from '@fortawesome/free-solid-svg-icons'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'

import styles from './App.css';
import LoginPage from './containers/LoginPage/LoginPage';
import ProductListing from './containers/ProductListing/ProductListing';
import NotFound from './components/NotFound/NotFound';

library.add(faSearch);
library.add(faCaretRight);
library.add(faCaretDown);

class App extends Component {
  state = {
        auth: true
  };

  render() {
    return (
      <div className={styles.container}><Switch>
      {this.state.auth? <Redirect exact from='/' to='/search' />: null}
      <Redirect exact path="/" to='/login' />
      <Route exact path='/login' render={props => <LoginPage {...props} isAuthed={false} />} />
      <Route exact path='/search' render={props => <LoginPage {...props} isAuthed={this.state.auth} />} />
      {this.state.auth? <Route exact path="/product-listing/:dpt.:mech" component={ProductListing} />: null}
      {this.state.auth? <Route path="/product-listing" component={ProductListing} />: null}
      <Route component={NotFound} />
      </Switch></div>
    );
  }
}

export default App;
