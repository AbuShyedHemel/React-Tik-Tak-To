import { Col, Row } from "antd";
import ButtonComponent from "./Components/ButtonComponent";
import { useState } from "react";

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i: number) => {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquares = square.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquare(nextSquares);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares: any[]) => {
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
      console.log(a);
      console.log(b);
      console.log(c);
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return squares[a];
      }
    }
    return null;
  };
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <Row align={"middle"} justify={"center"}>
      <Col>
        <div>{status}</div>
        <div>
          <ButtonComponent
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value={square[0]}
            onSquareClick={() => handleClick(0)}
          />
          <ButtonComponent
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value={square[1]}
            onSquareClick={() => handleClick(1)}
          />
          <ButtonComponent
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value={square[2]}
            onSquareClick={() => handleClick(2)}
          />
        </div>
        <div>
          <ButtonComponent
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value={square[3]}
            onSquareClick={() => handleClick(3)}
          />
          <ButtonComponent
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value={square[4]}
            onSquareClick={() => handleClick(4)}
          />
          <ButtonComponent
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value={square[5]}
            onSquareClick={() => handleClick(5)}
          />
        </div>
        <div>
          <ButtonComponent
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value={square[6]}
            onSquareClick={() => handleClick(6)}
          />
          <ButtonComponent
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value={square[7]}
            onSquareClick={() => handleClick(7)}
          />
          <ButtonComponent
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value={square[8]}
            onSquareClick={() => handleClick(8)}
          />
        </div>
      </Col>
    </Row>
  );
}

export default App;
