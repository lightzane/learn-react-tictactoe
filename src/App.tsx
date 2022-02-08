import React, { Component } from 'react';
import { render } from 'react-dom';
import Board from './Board';

class App extends Component {
    render() {
        return (
            <div className='game'>
                <Board></Board>
                <div className="game-board"></div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));