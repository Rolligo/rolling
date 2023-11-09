import { Button } from "components/StyledButtons/";
import AddEmoticon from "assets/images/icons/add-emoticon.svg";

function Test() {
  const topStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    padding: "10rem",
  };
  const style = {
    display: "flex",
    gap: "3rem",
  };
  return (
    <div style={topStyle}>
      <div style={style}>
        <Button size="lg">TEST</Button>
        <Button size="md">TEST</Button>
        <Button size="sm">TEST</Button>
        <Button size="sm" disabled>
          TEST
        </Button>
      </div>
      <div style={style}>
        <Button.Secondary size="lg">TEST</Button.Secondary>
        <Button.Secondary size="md">TEST</Button.Secondary>
        <Button.Secondary size="sm">TEST</Button.Secondary>
        <Button.Secondary size="sm" disabled>
          TEST
        </Button.Secondary>
      </div>
      <div style={style}>
        <Button.Outline size="lg">TEST</Button.Outline>
        <Button.Outline size="md">TEST</Button.Outline>
        <Button.Outline size="sm">TEST</Button.Outline>
        <Button.Outline size="sm" disabled>
          TEST
        </Button.Outline>
        <Button.Outline size="sm">
          <img src={AddEmoticon} />
          TEST
        </Button.Outline>
      </div>
      <div style={style}>
        <Button.Arrow left />
        <Button.Arrow right />
      </div>
      <div style={style}>
        <Button.Add />
        <Button.Add disabled />
      </div>
      <div style={style}>
        <Button.Toggle />
      </div>
    </div>
  );
}
export default Test;
