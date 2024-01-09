import { StyledLaptopIcon, StyledManIcon } from "./styled";
import laptopIcon from "../../assets/images/laptopIcon.png";
import manIcon from "../../assets/images/manIcon.png";

export const AboutMe = ({ className }) => (
  <span className={className}>
    <StyledLaptopIcon src={laptopIcon} alt="" />
    <StyledManIcon src={manIcon} alt="" />
    I'm passionate Frontend Developer in love with React, currently looking for
    first job opportunities
  </span>
);
