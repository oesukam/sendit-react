import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TopHeader from './components/TopHeader/TopHeader';
import IndexPage from './components/IndexPage/IndexPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopHeader />
          <div className="main-content">
            <Switch>
              <Route path="/" exact component={IndexPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
