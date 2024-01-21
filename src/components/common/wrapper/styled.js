import styled from "styled-components";
import { theme } from "../../../assets/styles/themes/theme";

const { colors, breakPoints, duration, timingFunction } = theme;

export const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 109px;
  max-width: 1216px;
  background: ${({ mode }) =>
    mode === "light" ? colors.whiteLilac : colors.nero};
  margin: 0 auto;

  @media (max-width: ${breakPoints.xs}) {
    padding-bottom: 31px;
  }

  transition: background ${duration} ${timingFunction};
`;
