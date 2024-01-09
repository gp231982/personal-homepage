import { StyledFingersCrossedIcon } from "./styled";
import fingersCrossedIcon from "../../assets/images/fingersCrossedIcon.png"

export const Info = ({ className }) => (
  <p className={className}>
    I’m always open to new projects whenever I have the time. If you have a
    website, dashboard or mobile app in mind and need some help to make your
    ideas come to life, feel free to contact me <StyledFingersCrossedIcon src={fingersCrossedIcon}/>
  </p>
);
