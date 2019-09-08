import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Disappear from './components/Disappear';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Header} />
        <Route exact path="/time" component={Disappear} />
      </BrowserRouter>
    );
  }
}

export default App;
