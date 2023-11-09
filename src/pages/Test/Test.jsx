import { Button } from "components/StyledButtons/";

function Test() {
  const style = {
    display: "flex",
    gap: "3rem",
    padding: "10rem",
  };
  return (
    <div style={style}>
      <Button size="lg">TEST</Button>
      <Button size="md">TEST</Button>
      <Button size="sm">TEST</Button>
      <Button.Secondary size="lg">TEST</Button.Secondary>
      <Button.Secondary size="md">TEST</Button.Secondary>
      <Button.Secondary size="sm">TEST</Button.Secondary>
    </div>
  );
}

export default Test;
