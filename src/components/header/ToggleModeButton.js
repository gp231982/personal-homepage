import { ToggleModeButtonContainer } from "./styled";

export const ToggleModeButton = ({ onClick, children }) => {
  return (
    <ToggleModeButtonContainer onClick={onClick}>
      {children}
    </ToggleModeButtonContainer>
  );
};
