import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { AuthWrapper } from './AuthWrapper';
import { StartPage } from './pages/StartPage';
import { PlaylistPage } from './pages/PlaylistPage';
import { EditPlaylistPage } from './pages/EditPlaylistPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/StartPage" render={() => <StartPage />} />
        <AuthWrapper>
          <Route
            exact
            path="/EditPlaylist/:playlistId"
            render={() => <EditPlaylistPage />}
          />
          <Route exact path="/" render={() => <PlaylistPage />} />
        </AuthWrapper>
      </Switch>
    </>
  );
}

export default App;
