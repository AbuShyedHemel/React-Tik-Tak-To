import { Button } from "antd";
import { useState } from "react";

const ButtonComponent = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setValue("X");
  };
  return (
    <Button type="default" onClick={handleClick}>
      {value ? value : "    "}
    </Button>
  );
};

export default ButtonComponent;
