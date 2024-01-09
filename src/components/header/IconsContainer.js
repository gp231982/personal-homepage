import {
  StyledBackgroundIcon,
  StyledToggleIcon,
  StyledSunIcon,
} from "./styled";

export const IconsContainer = ({ className }) => (
  <div className={className}>
    <StyledBackgroundIcon />
    <StyledToggleIcon />
    <StyledSunIcon />
  </div>
);
