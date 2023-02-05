import { useState } from 'react'

function Square({
  value,
  onSquareClick,
}: {
  value: string | null
  onSquareClick: () => void
}) {
  return (
    <button
      type="button"
      className="square h-12 w-12 border-white"
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}

function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Board({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: boolean
  squares: Array<string | null>
  onPlay: (squares: Array<string | null>) => void
}) {
  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    const nextSquares = squares.slice()

    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }

    onPlay(nextSquares)
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="grid grid-cols-3">
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </>
  )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares: Array<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = `Go to move #${move}`
    } else {
      description = 'Go to game start'
    }
    return (
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
