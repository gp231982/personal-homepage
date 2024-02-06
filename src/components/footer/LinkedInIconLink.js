import { StyledLinkedInIcon, StyledLink } from "./styled";

export const LinkedInIconLink = ({ className }) => (
  <StyledLink
    href="https://www.linkedin.com/in/grzegorz-piejko-process-development-engineer/"
    target="_blank"
    rel="noopener noreferrer"
    title="https://www.linkedin.com/in/grzegorz-piejko-process-development-engineer/"
    className={className}
  >
    <StyledLinkedInIcon />
  </StyledLink>
);
