import "./App.css";
import { Wrapper } from "../components/common/wrapper";
import { Header } from "../components/header";
import { Skills } from "../components/skills";
import { Portfolio } from "../components/portfolio";
import { Footer } from "../components/footer";
import { actualSkills, futureSkills } from "../components/skills/skills";
import actualSkillsIcon from "../assets/images/actualSkillsIcon.png";
import futureSkillsIcon from "../assets/images/futureSkillsIcon.png";

function App() {
  return (
    <Wrapper>
      <Header />
      <Skills
        title="My Skills Includes"
        skills={actualSkills}
        icon={actualSkillsIcon}
      />
      <Skills
        title="What I want to learn"
        skills={futureSkills}
        icon={futureSkillsIcon}
      />
      <Portfolio />
      <Footer />
    </Wrapper>
  );
}

export default App;
