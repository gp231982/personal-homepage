import {
  PortfolioWrapper,
  PortfolioHeader,
  ProjectsHeader,
  ProjectsWrapper,
  Project,
  ProjectHeader,
  ProjectDescription,
  Links,
  ProjectDemo,
  ProjectCode,
  Link,
  Span,
  StyledGithubIcon
} from "./styled";
import { getRepositories } from "./repositories";
import { useState, useEffect } from "react";

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const username = "gp231982";
    const fetchData = async () => {
      try {
        const repositories = await getRepositories(username);
        setProjects(repositories);
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <PortfolioWrapper>
      <StyledGithubIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <ProjectsHeader>My recent projects</ProjectsHeader>
      <ProjectsWrapper>
        {projects.map((project) => (
          <Project key={project.id}>
            <ProjectHeader>{project.name}</ProjectHeader>
            <ProjectDescription>{project.description}</ProjectDescription>
            <Links>
              <ProjectDemo>
                <Span>Demo:</Span>
                <Link
                  href={`https://${project.owner.login}.github.io/${project.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* {`https://${project.owner.login}.github.io/${project.name}`} */}
                  {`${project.name}-link-demo`}
                </Link>
              </ProjectDemo>
              <ProjectCode>
                <Span>Code:</Span>
                <Link
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* {project.html_url} */}
                  {`${project.name}-link-code`}
                </Link>
              </ProjectCode>
            </Links>
          </Project>
        ))}
      </ProjectsWrapper>
    </PortfolioWrapper>
  );
};
