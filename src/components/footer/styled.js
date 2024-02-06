import styled from "styled-components";
import { Email } from "./Email";
import { Info } from "./Info";
import { theme } from "../../assets/styles/themes/theme";

import { ReactComponent as GithubIcon } from "../../assets/images/githubIcon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/facebookIcon.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/images/linkedINIcon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/instagramIcon.svg";

const { breakPoints, colors, duration, timingFunction } = theme;

export const Wrapper = styled.div`
  max-width: 691px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 56px;

  @media (max-width: ${breakPoints.xs}) {
    margin-bottom: 40px;
  }
`;

export const StyledEmail = styled(Email)`
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.nero : colors.white};
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.6px;
  margin: 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) =>
      theme.mode === "light" ? colors.navyBlue : colors.dodgerBlue};
  }

  @media (max-width: ${breakPoints.sm}) {
    font-size: 24px;
    letter-spacing: 0.9px;
  }

  @media (max-width: ${breakPoints.xs}) {
    font-size: 18px;
    letter-spacing: 0.9px;
  }

  transition: color ${duration} ${timingFunction};
`;

export const StyledInfo = styled(Info)`
  max-width: 670px;
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.nero : colors.white};
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  margin: 0;

  @media (max-width: ${breakPoints.xs}) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }

  transition: color ${duration} ${timingFunction};
`;

export const StyledFingersCrossedIcon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  vertical-align: middle;

  @media (max-width: ${breakPoints.xs}) {
    width: 16px;
    height: 16px;
  }
`;

export const Socials = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 24px;
  justify-content: start;

  @media (max-width: ${breakPoints.xs}) {
    grid-gap: 16px;
  }
`;

export const StyledLink = styled.a`
`;

export const StyledGithubIcon = styled(GithubIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.nero : colors.white};

  &:hover {
    color: ${({ theme }) =>
      theme.mode === "light" ? colors.navyBlue : colors.dodgerBlue};
  }
  cursor: pointer;

  @media (max-width: ${breakPoints.xs}) {
    width: 32px;
    height: 32px;
  }

  transition: color ${duration} ${timingFunction};
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.nero : colors.white};

  &:hover {
    color: ${({ theme }) =>
      theme.mode === "light" ? colors.navyBlue : colors.dodgerBlue};
  }
  cursor: pointer;

  @media (max-width: ${breakPoints.xs}) {
    width: 32px;
    height: 32px;
  }

  transition: color ${duration} ${timingFunction};
`;

export const StyledLinkedInIcon = styled(LinkedInIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.nero : colors.white};

  &:hover {
    color: ${({ theme }) =>
      theme.mode === "light" ? colors.navyBlue : colors.dodgerBlue};
  }
  cursor: pointer;

  @media (max-width: ${breakPoints.xs}) {
    width: 32px;
    height: 32px;
  }

  transition: color ${duration} ${timingFunction};
`;

export const StyledInstagramIcon = styled(InstagramIcon)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) =>
    theme.mode === "light" ? colors.nero : colors.white};

  &:hover {
    color: ${({ theme }) =>
      theme.mode === "light" ? colors.navyBlue : colors.dodgerBlue};
  }
  cursor: pointer;

  @media (max-width: ${breakPoints.xs}) {
    width: 32px;
    height: 32px;
  }

  transition: color ${duration} ${timingFunction};
`;
