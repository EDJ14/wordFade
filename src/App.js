import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Disappear from './components/Disappear';

class App extends React.Component {
  render() {
    return (
      <div class='container'>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Disappear} />
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
