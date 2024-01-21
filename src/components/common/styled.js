import styled from "styled-components";
import { Caption } from "./Caption";
import { theme } from "../../assets/styles/themes/theme";

const { colors, duration, timingFunction } = theme;

export const StyledCaption = styled(Caption)`
  color: ${({ theme }) =>
          theme.mode === "light" ? colors.slateGrey : colors.white};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  text-align: left;
  transition: color ${duration} ${timingFunction};

`;
