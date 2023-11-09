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
    </div>
  );
}

export default Test;
