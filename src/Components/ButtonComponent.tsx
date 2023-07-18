import { Button } from "antd";

interface valType {
  value: any[];
  onSquareClick: () => void;
}
const ButtonComponent = ({ value, onSquareClick }: valType) => {
  return (
    <Button className="bg-yellow-400" type="default" onClick={onSquareClick}>
      {value}
    </Button>
  );
};

export default ButtonComponent;
