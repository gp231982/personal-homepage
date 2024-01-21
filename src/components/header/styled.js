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

const { colors, breakPoints, duration, timingFunction } = theme;

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
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.nero : colors.white};
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

  transition: color ${duration} ${timingFunction};
`;

export const StyledAboutMe = styled(AboutMe)`
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.slateGrey : colors.white};
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

  transition: color ${duration} ${timingFunction};
`;

export const StyledButton = styled.button`
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  border: 1px solid ${colors.iron};
  background: ${({ theme }) =>
    theme.mode === "light" ? colors.navyBlue : colors.dodgerBlue};
  width: max-content;
  color: ${colors.white};
  cursor: pointer;

  &:hover {
    border-radius: 4px;
    border: 1px solid var(--Diff-bg-neutral, rgba(209, 213, 218, 0.3));
    background: var(--Main-blue-LM, #0366d6);
    box-shadow: ${({ theme }) =>
      theme.mode === "light"
        ? "-2px -2px 0px 0px #8cc2ff, 2px 2px 0px 0px #8cc2ff, -2px 2px 0px 0px #8cc2ff, 2px -2px 0px 0px #8cc2ff"
        : "-2px -2px 0px 0px #6D93BE, 2px 2px 0px 0px #6D93BE, -2px 2px 0px 0px #6D93BE, 2px -2px 0px 0px #6D93BE"};
  }

  &:selected {
    border-radius: 4px;
    border: 1px solid var(--Diff-bg-neutral, rgba(209, 213, 218, 0.3));
    background: var(--Main-blue-LM, #0366d6);
    box-shadow: 0px 2px 0px 0px rgba(20, 70, 32, 0.2) inset;
    transition: 0.5s;
  }

  @media (max-width: ${breakPoints.xs}) {
    gap: 12px;
  }

  transition: box-shadow ${duration} ${timingFunction} background ${duration}
    ${timingFunction};
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
  color: ${colors.white};
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
  grid-template-columns: 1fr auto;
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
  color: ${({ theme }) =>
    theme.mode === "light" ? theme.colors.slateGrey : theme.colors.white};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;

  @media (max-width: ${breakPoints.sm}) {
    opacity: 0;
  }

  transition: background ${duration} ${timingFunction};
`;

export const StyledBackgroundIcon = styled(BackgroundIcon)`
  width: 48px;
  height: 26px;
  flex-shrink: 0;
  position: relative;

  path:first-child {
    fill: ${({ theme }) =>
      theme.mode === "light" ? colors.white : colors.slateGrey};
    stroke: ${colors.slateGrey};
  }

  path:last-child {
    fill: ${({ theme }) =>
      theme.mode === "light" ? colors.mercury : colors.semiDark};
    stroke: ${colors.white};
    stroke-opacity: 0.3;
  }

  transition: fill ${duration} ${timingFunction};
`;

export const StyledToggleIcon = styled(ToggleIcon)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  position: absolute;
  background: ${({ theme }) =>
    theme.mode === "light" ? colors.slateGrey : colors.white};
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  ${({ theme }) =>
    theme.mode === "light" ? "left: 3px;" : `left: calc(100% - 23px);`};

  transition: left ${duration} ${timingFunction},
    background ${duration} ${timingFunction};
`;

export const StyledSunIcon = styled(SunIcon)`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ theme }) =>
    theme.mode === "light" ? "left: 6px;" : `left: calc(100% - 20px);`};

  path {
    fill: ${({ theme }) =>
      theme.mode === "light" ? colors.white : colors.black};
  }
  transition: left ${duration} ${timingFunction},
    fill ${duration} ${timingFunction};
`;
