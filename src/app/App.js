import { Wrapper } from "../components/common/wrapper";
import { Header } from "../components/header";
import { Skills } from "../components/skills";
import { Portfolio } from "../components/portfolio";
import { Footer } from "../components/footer";
import { actualSkills, futureSkills } from "../components/skills/skills";
import actualSkillsIcon from "../assets/images/actualSkillsIcon.png";
import futureSkillsIcon from "../assets/images/futureSkillsIcon.png";
import { useModeContext } from "../assets/styles/ModeContext";

function App() {
  const { mode, toggleMode } = useModeContext();

  return (
    <Wrapper mode={mode}>
      <Header toggleMode={toggleMode} />
      <Skills
        title="My Skills Includes"
        skills={actualSkills}
        icon={actualSkillsIcon}
        mode={mode}
      />
      <Skills
        title="What I want to learn"
        skills={futureSkills}
        icon={futureSkillsIcon}
        mode={mode}
      />
      <Portfolio mode={mode} />
      <Footer />
    </Wrapper>
  );
}

export default App;
