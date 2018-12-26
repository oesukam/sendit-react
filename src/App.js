import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TopHeader from './components/TopHeader/TopHeader';
import BottomFooter from './components/BottomFooter/BottomFooter';
import IndexPage from './components/IndexPage/IndexPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopHeader />
            <Switch>
              <Route path="/" exact component={IndexPage} />
            </Switch>
          <BottomFooter />
        </div>
      </Router>
    );
  }
}

export default App;
