import React from 'react';
import Navbar from './components/Navbar';
import './App.min.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Gallery from './components/pages/Gallery';
import Timedline from './components/pages/Timeline';
import ContactMe from './components/pages/ContactMe'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/projects' component={Projects} />
      <Route path='/timeline' component={Timedline} />
      <Route path='/contactme' component={ContactMe} />
      </Switch>
    </Router >
  );
}

export default App;
