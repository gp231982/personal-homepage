import { StyledCaption } from "../common/styled";
import { Wrapper, Content, StyledEmail, StyledInfo, Socials } from "./styled";

import { GithubIconLink } from "./GithubIconLink";
import { FacebookIconLink } from "./FacebookIconLink";
import { LinkedInIconLink } from "./LinkedInIconLink";
import { InstagramIconLink } from "./InstagramIconLink";

export const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <StyledCaption content="Let's talk" />
        <StyledEmail />
        <StyledInfo />
      </Content>
      <Socials>
        <GithubIconLink />
        <FacebookIconLink />
        <LinkedInIconLink />
        <InstagramIconLink />
      </Socials>
    </Wrapper>
  );
};
