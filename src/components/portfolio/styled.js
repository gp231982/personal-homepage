import styled from "styled-components";
import { theme } from "../../assets/styles/themes/theme";
import { ReactComponent as GithubIcon } from "../../assets/images/blueGithubIcon.svg";

const { breakPoints, colors } = theme;

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
  color: ${colors.nero};
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
`;

export const ProjectsHeader = styled.h3`
  color: ${colors.nero};
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
  background: ${colors.white};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);

  @media (max-width: ${breakPoints.xs}) {
    padding: 24px;
  }
`;

export const ProjectHeader = styled.h3`
  color: ${colors.navyBlue};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.2px;
  margin: 0;
  padding: 0;
  color: ${colors.navyBlue};
  margin-bottom: 24px;

  @media (max-width: ${breakPoints.xs}) {
    font-size: 16px;
    letter-spacing: 0.8px;
    margin-bottom: 16px;
  }
`;
export const ProjectDescription = styled.p`
  color: ${colors.slateGrey};
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
  color: ${colors.slateGrey};
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
`;
export const ProjectCode = styled.p`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  margin: 0px;
  color: ${colors.slateGrey};
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
`;

export const Link = styled.a`
  color: ${colors.navyBlue};
  position: relative;

  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.navyBlue};
    opacity: 0.2;
  }

  @media (max-width: ${breakPoints.xs}) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }
`;

export const Span = styled.span`
  width: 60px;
`;

export const StyledGithubIcon = styled(GithubIcon)`
  width: 40px;
  height: 40px;

  @media (max-width: ${breakPoints.xs}) {
    width: 32px;
    height: 32px;
  }
`;
