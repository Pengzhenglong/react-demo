import ReactDOM from "react-dom";
import App from './App12'
import React from "react"
import { Provider } from "react-redux"
import store from './store'
import Router from "./router/index";
// class Square extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   //   }
//   // }
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()} >
//         {this.props.value}
//       </button >
//     )
//   }
// }

// 函数式组件
function Square(props) {
  // console.log(this)  undefined
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
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
      return squares[a];
    }
  }
  return null;
}
class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   }
  // }



  renderSquare(i) {
    return <Square value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />
  }
  render() {
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = 'winner' + winner;
    // } else {
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    // }

    return (
      <div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div >
    )
  }
}
class Game extends React.Component {
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice()
    // slice拷贝一份数组

    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = this.state.xInsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xInsNext: !this.state.xInsNext,
    })
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xInsNext: (step % 2) === 0,
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xInsNext: true,
    }
  }
  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)
    let status;
    if (winner) {
      status = 'winner' + winner
    } else {
      status = 'Next player' + (this.state.xInsNext ? 'X' : 'O')
    }
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {desc} </button>
        </li >
      )
    })

    return (
      <div className="game" >
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />

        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <Router />,
  // <Game />,
  document.getElementById('root')
)

// setTimeout(() => {
//   ReactDOM.render(
//     <input type="text" />,
//     document.getElementById('root')
//   )
// }, 3000)