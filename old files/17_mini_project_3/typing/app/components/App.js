import React from 'react';
import Routes from '../routes';
import GameContainer from '../containers/GameContainer';

const App = () => {
    return (<div>
      { Routes }
      <h1>Typing Game</h1>
      <GameContainer />
    </div>);
};

export default App;
