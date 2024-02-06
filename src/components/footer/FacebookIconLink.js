import { StyledFacebookIcon, StyledLink } from "./styled";

export const FacebookIconLink = ({ className }) => (
  <StyledLink
    href="https://www.facebook.com/grzegorz.piejko"
    target="_blank"
    rel="noopener noreferrer"
    title="https://www.facebook.com/grzegorz.piejko"
    className={className}
  >
    <StyledFacebookIcon />
  </StyledLink>
);
