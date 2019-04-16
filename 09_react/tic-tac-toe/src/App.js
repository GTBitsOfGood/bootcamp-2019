import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Square(props) {
  return (
    <button className={"square " + (props.isWinning ? "winning-square" : null)} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square
      key={i}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      isWinning={this.props.winningSquares.includes(i)}
    />;
  }

  render() {
    let grid = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(this.renderSquare(i * 3 + j));
      }
      grid.push(<div key={i} className="board-row">{row}</div>);
    }

    return (
      <div>{grid}</div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      isAscending: true
    }
  }

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber]
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i])
      return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const status = winner ?
      'Winner: ' + winner.player :
      'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    let moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {this.state.stepNumber === move ? <strong>{desc}</strong> : desc}
          </button>
        </li>
      );
    });

    if (!this.state.isAscending)
      moves.reverse();

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            winningSquares={winner ? winner.line : []}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>Sort moves:
            <button onClick={() => this.setState({isAscending: !this.state.isAscending})}>{this.state.isAscending === true ? "Ascending" : "Descending"}</button>
          </div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        player: squares[a],
        line: [a, b, c]
      };
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


export default Game;
