import React, {Component} from 'react';
import GameDisplay from './components/game-display';

class App extends Component { 
    render () {
       return (
         <div className="App"> 
            <GameDisplay /> 
         </div> ); 
    } 
}
export default App;