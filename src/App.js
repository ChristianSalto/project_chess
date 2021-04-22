import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { PlayOff } from './components/PlayOff/PlayOff';
import { Home } from './components/Home/Home';
import Form from './components/Form/Form';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/crear" render={() => <Form />} />
        <Route path="/torneos" render={() => <Main />} />
        <Route path="/play-off" render={() => <PlayOff />} />
      </Switch>
    </Router>
  );
}

export default App;
