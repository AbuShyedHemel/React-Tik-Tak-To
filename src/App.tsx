import { Col, Row } from "antd";
import ButtonComponent from "./Components/ButtonComponent";
import { useState } from "react";

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const handleClick = (i: number) => {
    const nextSquares = square.slice();
    nextSquares[i] = "X";
    setSquare(nextSquares);
  };
  return (
    <Row align={"middle"} justify={"center"}>
      <Col>
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
