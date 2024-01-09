import styled from "styled-components";
import { ReactComponent as MailIcon } from "../../assets/images/email_envelope_icon.svg";
import { ButtonText } from "./ButtonText";
import { AboutMeHeader } from "./AboutMeHeader";
import { AboutMe } from "./AboutMe";
import { TextContainer } from "./TextContainer";
import { IconsContainer } from "./IconsContainer";
import { ReactComponent as BackgroundIcon } from "../../assets/images/backgroundIcon.svg";
import { ReactComponent as ToggleIcon } from "../../assets/images/toggle.svg";
import { ReactComponent as SunIcon } from "../../assets/images/sun.svg";

import { theme } from "../../assets/styles/themes/theme";

const { breakPoints, colors } = theme;

export const StyledHeader = styled.header`
  display: flex;
  margin-top: 115px;
  max-width: 1216px;
  position: relative;

  @media (max-width: ${breakPoints.md}) {
    flex-direction: column;
    margin-bottom: 72px;
  }

  @media (max-width: ${breakPoints.sm}) {
    margin-top: 32.67px;
  }

  @media (max-width: ${breakPoints.xs}) {
    margin-bottom: 48px;
  }
`;

export const StyledImgContainer = styled.div`
  display: flex;
  width: 398px;
  height: 398px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  margin-right: 66px;
  flex-shrink: 0;

  @media (max-width: ${breakPoints.sm}) {
    width: 232.667px;
    height: 232.667px;
  }
  @media (max-width: ${breakPoints.xs}) {
    width: 132.667px;
    height: 132.667px;
    margin-bottom: 12.67px;
  }
`;

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

export const StyledAboutMeHeader = styled(AboutMeHeader)`
  color: ${colors.nero};
  font-family: Inter;
  font-size: 38px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.9px;
  margin-top: 12px;
  margin-bottom: 35px;

  @media (max-width: ${breakPoints.xs}) {
    font-size: 22px;
    letter-spacing: 1.1px;
    margin-top: 8px;
    margin-bottom: 16px;
  }
`;

export const StyledAboutMe = styled(AboutMe)`
  color: ${colors.slateGrey};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  max-width: 633px;
  margin-bottom: 32px;

  @media (max-width: ${breakPoints.xs}) {
    font-size: 17px;
    letter-spacing: 0.85px;
    margin-bottom: 24px;
  }
`;

export const StyledButton = styled.button`
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  border: 1px solid ${colors.linkWater};
  background: ${colors.navyBlue};
  width: max-content;
  color: white;
  cursor: pointer;

  @media (max-width: ${breakPoints.xs}) {
    gap: 12px;
  }
`;

export const StyledManIcon = styled.img`
  width: 30px;
  vertical-align: middle;
`;

export const StyledLaptopIcon = styled.img`
  width: 30px;
  vertical-align: middle;
`;

export const ButtonIcon = styled(MailIcon)`
  width: 24px;
  height: 24px;
  vertical-align: middle;
`;

export const StyledButtonText = styled(ButtonText)`
  color: ${colors.white});
  text-align: center;
  font-family: Inter;
  font-size: 20.058px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.003px;
`;

export const ToggleModeButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 159px;
  height: 26px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 12px;
  top: 0px;
  right: 0px;
  cursor: pointer;
`;

export const StyledIconsContainer = styled(IconsContainer)`
  position: relative;
  width: 48px;
  height: 26px;
`;

export const StyledTextContainer = styled(TextContainer)`
  color: ${colors.slateGrey};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;

  @media (max-width: ${breakPoints.sm}) {
    opacity: 0;
  }
`;

export const StyledBackgroundIcon = styled(BackgroundIcon)`
  width: 48px;
  height: 26px;
  flex-shrink: 0;
  position: relative;
`;

export const StyledToggleIcon = styled(ToggleIcon)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 3px;
`;

export const StyledSunIcon = styled(SunIcon)`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  background: ${colors.slateGrey};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 6px;
`;
