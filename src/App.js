import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { PlayOff } from './components/PlayOff/PlayOff';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/play-off" render={() => <PlayOff />} />
      </Switch>
    </Router>
  );
}

export default App;
