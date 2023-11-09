import ButtonMain from "./Button";
import OutlinedButton from "./OutlinedButton";
import SecondaryButton from "./SecondaryButton";

export const Button = Object.assign(ButtonMain, {
  Secondary: SecondaryButton,
  Outline: OutlinedButton,
});
