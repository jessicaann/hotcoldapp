import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameDisplay from './components/game-display';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GameDisplay />, document.getElementById('root'));
registerServiceWorker();
