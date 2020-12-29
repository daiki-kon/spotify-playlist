import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { AuthWrapper } from './AuthWrapper';
import { StartPage } from './pages/StartPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/StartPage" render={() => <StartPage />} />
        <AuthWrapper>
          <Route exact path="/" />
        </AuthWrapper>
      </Switch>
    </>
  );
}

export default App;
