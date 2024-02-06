import { StyledGithubIcon, StyledLink } from "./styled";

export const GithubIconLink = ({ className }) => (
  <StyledLink
    href="https://github.com/gp231982"
    target="_blank"
    rel="noopener noreferrer"
    title="https://github.com/gp231982"
    className={className}
  >
    <StyledGithubIcon />
  </StyledLink>
);
