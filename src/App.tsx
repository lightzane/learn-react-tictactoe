import React, { Component } from 'react';
import { render } from 'react-dom';
import Board from './Board';
import calculateWinner from './helpers/calculate-winner';

interface BoardContent {
    squares: string[];
}

interface AppState {
    history: BoardContent[];
    xIsNext: boolean;
    stepNumber: number;
}

class App extends Component<{}, AppState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0
        };
    }

    handleClick(i: number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        // ignoring a click if someone has won the game or if a Square is already filled
        if (calculateWinner(squares) || squares[i]) return;

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            // Unlike the array push() method you might be more familiar with, 
            // the concat() method doesn’t mutate the original array, so we prefer it.
            history: history.concat([{
                squares
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    jumpTo(step: number) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((value, index) => {
            const desc = index ?
                `Go to move #${index}` :
                `Go to game start`;

            return (
                <li key={index}>
                    <button onClick={() => this.jumpTo(index)}>{desc}</button>
                </li>
            );
        });


        let status: string;

        if (winner) status = `Winner: ${winner}`;
        else status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

        return (
            <div className='game'>
                <Board squares={current.squares} onClick={(i: number) => this.handleClick(i)}></Board>
                <div className="game-board"></div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));