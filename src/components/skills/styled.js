import styled from "styled-components";
import { theme } from "../../assets/styles/themes/theme";

const { breakPoints, colors } = theme;

export const SkillsHeader = styled.h2`
  color: ${colors.nero};
  text-align: left;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  padding-bottom: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: ${breakPoints.xs}) {
    font-size: 18px;
    letter-spacing: 0.9px;
    padding-bottom: 12px;
  }
`;

export const SkillsSection = styled.section`
  padding: 32px;
  border-radius: 4px;
  background: white;
  margin-bottom: 72px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);

  @media (max-width: ${breakPoints.xs}) {
    padding: 16px;
    margin-bottom: 50px;
  }
`;

export const StyledSkillsIcon = styled.img`
  color: var(--White, ${colors.white});
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.2px;
  vertical-align: middle;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style-position: inside;
  list-style: none;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 32px;
  padding-left: 0px;
  color: ${colors.slateGrey};
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  column-gap: 115px;
  row-gap: 8px;

  @media (max-width: ${breakPoints.lg}) {
    column-gap: 60px;
  }

  @media (max-width: ${breakPoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }

  @media (max-width: ${breakPoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: ${breakPoints.xs}) {
    padding-top: 12px;
    gap: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.7px;
  }
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 16px;
`;

export const StyledBulletIcon = styled.img`
  width: 9px;
  height: 9px;

  @media (max-width: ${breakPoints.xs}) {
    width: 6px;
    height: 6px;
  }
`;
