import {
  StyledHeader,
  StyledImg,
  StyledAboutMeHeader,
  StyledAboutMe,
  StyledImgContainer,
  StyledContentContainer,
  StyledButton,
  ButtonIcon,
  StyledButtonText,
  StyledTextContainer,
  StyledIconsContainer,
} from "./styled";
import { StyledCaption } from "../common/styled";
import myPicture from "../../assets/images/myPicture.jpg";
import { ToggleModeButton } from "./ToggleModeButton";

export const Header = ({toggleMode}) => {

  return (
    <StyledHeader>
      <StyledImgContainer>
        <StyledImg src={myPicture} alt="pictureOfMIne" />
      </StyledImgContainer>
      <StyledContentContainer>
        <StyledCaption content="This is" />
        <StyledAboutMeHeader />
        <StyledAboutMe />
        <StyledButton>
          <ButtonIcon />
          <StyledButtonText />
        </StyledButton>
        <ToggleModeButton onClick={toggleMode}>
          <StyledTextContainer />
          <StyledIconsContainer />
        </ToggleModeButton>
      </StyledContentContainer>
    </StyledHeader>
  );
};
