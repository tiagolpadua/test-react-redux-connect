import React, { Component } from 'react';
import BotaoIncrementar from './BotaoIncrementar';
import BotaoDecrementar from './BotaoDecrementar';
import Painel from './Painel';

class App extends Component {
  render() {
    return (
      <div>
        <hr />
        <BotaoIncrementar></BotaoIncrementar>
        <hr />
        <BotaoDecrementar></BotaoDecrementar>
        <hr />
        <Painel></Painel>
      </div>
    );
  }
}

export default App;
