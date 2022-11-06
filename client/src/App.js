import './App.css';
import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Details from './Components/Details'
import CreateGame from './Components/CreateGame';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'}>
           <Landing />
        </Route>
        <Route path={'/home'}>
          <Home />
        </Route>
        <Route path={'/detailsGame/:id'}>
          <Details />
        </Route>
        <Route path={'/createGame'}>
          <CreateGame />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
