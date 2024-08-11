import { useState } from "react";

import Board from "./Board";
import SquareProps from "../interfaces/SquareProps";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<SquareProps>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move: " + move + ".";
    } else {
      description = "Go to game start";
    }
    return (
      <li className="description-li" key={move}>
        <button className="description-btn" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </>
  );
}
