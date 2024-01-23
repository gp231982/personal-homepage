import styled, { keyframes } from "styled-components";
import { theme } from "../../assets/styles/themes/theme";
import { ReactComponent as GithubIcon } from "../../assets/images/blueGithubIcon.svg";
import { ReactComponent as IconSpinner } from "../../assets/images/icon-spinner.svg";
import { ReactComponent as DangerIcon } from "../../assets/images/danger.svg";

const { breakPoints, colors, duration, timingFunction } = theme;

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PortfolioHeader = styled.h2`
  padding-top: 12px;
  padding-bottom: 8px;
  margin: 0;
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.nero : colors.white};
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;

  @media (max-width: ${breakPoints.xs}) {
    font-size: 18px;
    letter-spacing: 0.9px;
    padding-bottom: 16px;
  }

  transition: color ${duration} ${timingFunction};
`;

export const ProjectsHeader = styled.h3`
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.nero : colors.white};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  margin-top: 0px;
  margin-bottom: 24px;

  @media (max-width: ${breakPoints.xs}) {
    font-size: 17px;
    letter-spacing: 0.85px;
    margin-bottom: 24px;
  }

  transition: color ${duration} ${timingFunction};
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 120px;

  @media (max-width: ${breakPoints.lg}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breakPoints.xs}) {
    gap: 16px;
    margin-bottom: 48px;
  }
`;

export const Project = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  word-break: break-word;
  padding: 56px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 6px solid ${colors.linkWater};
  background: ${({ theme }) =>
    theme.mode === "light" ? theme.colors.white : theme.colors.mineShaft};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);

  @media (max-width: ${breakPoints.xs}) {
    padding: 24px;
  }

  transition: background ${duration} ${timingFunction} box-shadow ${duration}
    ${timingFunction};
`;

export const ProjectHeader = styled.h3`
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.navyBlue : colors.white};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.2px;
  margin: 0;
  padding: 0;
  margin-bottom: 24px;

  @media (max-width: ${breakPoints.xs}) {
    font-size: 16px;
    letter-spacing: 0.8px;
    margin-bottom: 16px;
  }

  transition: color ${duration} ${timingFunction};
`;
export const ProjectDescription = styled.p`
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.nero : colors.white};
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  margin: 0px;
  padding: 0px;
  margin-bottom: 24px;

  @media (max-width: ${breakPoints.xs}) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
    margin-bottom: 16px;
  }

  transition: color ${duration} ${timingFunction};
`;

export const Links = styled.div`
  display: grid;
  gap: 8px;
`;

export const ProjectDemo = styled.p`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  margin: 0px;
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.slateGrey : colors.white};
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;

  @media (max-width: ${breakPoints.xs}) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }

  transition: color ${duration} ${timingFunction};
`;
export const ProjectCode = styled.p`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  margin: 0px;
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.slateGrey : colors.white};
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;

  @media (max-width: ${breakPoints.xs}) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }

  transition: color ${duration} ${timingFunction};
`;

export const Link = styled.a`
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.navyBlue : colors.dodgerBlue};
  position: relative;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) =>
      theme.mode === "light" ? colors.dodgerBlue : colors.navyBlue};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) =>
      theme.mode === "light" ? colors.navyBlue : colors.dodgerBlue};
    opacity: 0.2;
  }

  &:hover {
    &:after {
      background: ${({ theme }) =>
        theme.mode === "light" ? colors.dodgerBlue : colors.navyBlue};
    }
  }

  @media (max-width: ${breakPoints.xs}) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }

  transition: color ${duration} ${timingFunction} background ${duration}
    ${timingFunction};
`;

export const Span = styled.span`
  width: 60px;

  transition: color ${duration} ${timingFunction} background ${duration}
    ${timingFunction};
`;

export const StyledGithubIcon = styled(GithubIcon)`
  width: 40px;
  height: 40px;
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.navyBlue : colors.dodgerBlue};

  @media (max-width: ${breakPoints.xs}) {
    width: 32px;
    height: 32px;
  }

  transition: color ${duration} ${timingFunction};
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingText = styled.div`
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.black : colors.white};
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  margin-top: 88px;
`;

export const StyledIconSpinner = styled(IconSpinner)`
  width: 160px;
  height: 160px;
  animation: ${rotate} 1s linear infinite;
  margin-top: 48px;
  margin-bottom: 140px;
  margin-left: auto;
  margin-right: auto;
  display: block;

  circle {
    stroke: ${({ theme }) =>
      theme.mode === "light" ? colors.iron : colors.mineShaft};
  }
`;

export const StyledDangerIcon = styled(DangerIcon)`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  margin: 0 auto;
  display: block;
  margin-top: 88px;

  path {
    stroke: ${({ theme }) =>
      theme.mode === "light" ? colors.black : colors.white};
  }
`;

export const ErrorHeaderText = styled.h3`
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.black : colors.white};
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.2px;
  margin: 0 auto;
  margin-top: 16px;
`;

export const ErrorParagraphText = styled.p`
  width: 426.532px;
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.black : colors.white};
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  margin-top: 32px;
`;

export const GoToGithubButton = styled.button`
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  border: 1px solid var(--semi-grey, rgba(209, 213, 218, 0.1));
  background: ${({ theme }) =>
    theme.mode === "light" ? colors.navyBlue : colors.dodgerBlue};
  display: block;
  color: ${colors.white};
  text-align: center;
  font-family: Inter;
  font-size: 20.058px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.003px;
  margin: 0 auto;
  cursor: pointer;
  margin-bottom: 140px;
`;
