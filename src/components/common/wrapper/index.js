import { StyledDiv } from "./styled";

export const Wrapper = ({ mode, children }) => (
  <StyledDiv mode={mode}>{children}</StyledDiv>
);
