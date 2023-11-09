import { Button } from "components/Button";
import AddEmoticon from "assets/images/icons/add-emoticon.svg";
import Delete from "assets/images/icons/delete-icon.svg";

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
        <Button size="lg">large</Button>
        <Button size="md">medium</Button>
        <Button size="sm">small</Button>
        <Button size="xs">xs</Button>
      </div>
      <div style={style}>
        <Button.Secondary size="lg">large</Button.Secondary>
        <Button.Secondary size="md">medium</Button.Secondary>
        <Button.Secondary size="sm">small</Button.Secondary>
        <Button.Secondary size="xs">xs</Button.Secondary>
      </div>
      <div style={style}>
        <Button.Outline size="lg">large</Button.Outline>
        <Button.Outline size="md">medium</Button.Outline>
        <Button.Outline size="sm">small</Button.Outline>
        <Button.Outline size="xs">xs</Button.Outline>
        <Button.Outline size="square">
          <img src={Delete} />
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
