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
        <a
          href="https://github.com/gp231982"
          target="_blank"
          rel="noopener noreferrer"
          title="https://github.com/gp231982"
        >
          <StyledGithubIcon />
        </a>

        <a
          href="https://www.facebook.com/grzegorz.piejko"
          target="_blank"
          rel="noopener noreferrer"
          title="https://www.facebook.com/grzegorz.piejko"
        >
          <StyledFacebookIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/grzegorz-piejko-process-development-engineer/"
          target="_blank"
          rel="noopener noreferrer"
          title="https://www.linkedin.com/in/grzegorz-piejko-process-development-engineer/"
        >
          <StyledLinkedInIcon />
        </a>
        <StyledInstagramIcon />
      </Socials>
    </Wrapper>
  );
};
