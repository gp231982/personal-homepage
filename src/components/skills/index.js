import {
  SkillsSection,
  SkillsHeader,
  List,
  StyledSkillsIcon,
  ListItem,
} from "./styled";

import bullet from "../../assets/images/bullet.png";
import { StyledBulletIcon } from "./styled";

export const Skills = ({ skills, title, icon, mode }) => (
  <SkillsSection mode={mode}>
    <SkillsHeader>
      {title} <StyledSkillsIcon src={icon} alt="" />
    </SkillsHeader>

    <List>
      {skills.map((skill, index) => (
        <ListItem key={index}>
          <StyledBulletIcon src={bullet} alt="Bullet" />
          {skill}
        </ListItem>
      ))}
    </List>
  </SkillsSection>
);
