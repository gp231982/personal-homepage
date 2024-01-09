import { StyledCaption } from "../common/styled";
import {
  Wrapper,
  Content,
  StyledEmail,
  StyledInfo,
  Socials,
  StyledGithubIcon,
  StyledFacebookIcon,
  StyledLinkedInIcon,
  StyledInstagramIcon,
} from "./styled";

export const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <StyledCaption content="Let's talk" />
        <StyledEmail />
        <StyledInfo />
      </Content>
      <Socials>
        <StyledGithubIcon />
        <StyledFacebookIcon />
        <StyledLinkedInIcon />
        <StyledInstagramIcon />
      </Socials>
    </Wrapper>
  );
};
