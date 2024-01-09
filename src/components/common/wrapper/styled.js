import styled from "styled-components";
import { theme } from "../../../assets/styles/themes/theme";

const { breakPoints, colors } = theme;

export const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 109px;
  max-width: 1216px;
  background: #fbfbfe;
  margin: 0 auto;

  @media (max-width: ${breakPoints.xs}) {
    padding-bottom: 31px;
  }
`;
