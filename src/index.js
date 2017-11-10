import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store';
import GameDisplay from './components/game-display';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <GameDisplay />
    </Provider>,
document.getElementById('root')
);
registerServiceWorker();
