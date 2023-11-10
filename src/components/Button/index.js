import ArrowButton from "./ArrowButton";
import ButtonMain from "./Button";
import OutlinedButton from "./OutlinedButton";
import RoundAddButton from "./RoundAddButton";
import SecondaryButton from "./SecondaryButton";
import ToggleButton from "./ToggleButton";

export const Button = Object.assign(ButtonMain, {
  Secondary: SecondaryButton,
  Outline: OutlinedButton,
  Arrow: ArrowButton,
  Add: RoundAddButton,
  Toggle: ToggleButton,
});
