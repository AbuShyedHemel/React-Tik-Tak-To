import { Col, Row } from "antd";
import ButtonComponent from "./Components/ButtonComponent";

function App() {
  return (
    <Row align={"middle"} justify={"center"}>
      <Col>
        <div>
          <ButtonComponent />
          <ButtonComponent />
          <ButtonComponent />
        </div>
        <div>
          <ButtonComponent />
          <ButtonComponent />
          <ButtonComponent />
        </div>
        <div>
          <ButtonComponent />
          <ButtonComponent />
          <ButtonComponent />
        </div>
      </Col>
    </Row>
  );
}

export default App;
