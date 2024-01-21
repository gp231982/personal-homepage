import { useModeContext } from "../../assets/styles/ModeContext";

export const TextContainer = ({ className }) => {
  const { mode } = useModeContext();

  return (
    <div className={className}>Dark Mode {mode === "light" ? "off" : "on"}</div>
  );
};
