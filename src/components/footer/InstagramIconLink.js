import { StyledInstagramIcon, StyledLink } from "./styled";

export const InstagramIconLink = ({ className }) => (
  <StyledLink
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    title="Instagram"
    className={className}
  >
    <StyledInstagramIcon />
  </StyledLink>
);
