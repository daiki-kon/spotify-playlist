import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { AuthWrapper } from './AuthWrapper';
import { StartPage } from './pages/StartPage';

function App() {
  return (
    <>
      <Switch>
        <AuthWrapper>
          <Route exact path="/" render={() => <StartPage />} />
        </AuthWrapper>
      </Switch>
    </>
  );
}

export default App;
