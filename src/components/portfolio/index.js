// import {
//   PortfolioWrapper,
//   PortfolioHeader,
//   ProjectsHeader,
//   ProjectsWrapper,
//   Project,
//   ProjectHeader,
//   ProjectDescription,
//   Links,
//   ProjectDemo,
//   ProjectCode,
//   Link,
//   Span,
//   StyledGithubIcon
// } from "./styled";
// import { getRepositories } from "./repositories";
// import { useState, useEffect } from "react";

// export const Portfolio = () => {
//   const [projects, setProjects] = useState([]);
//   useEffect(() => {
//     const username = "gp231982";
//     const fetchData = async () => {
//       try {
//         const repositories = await getRepositories(username);
//         setProjects(repositories);
//       } catch (error) {}
//     };

//     fetchData();
//   }, []);
//   return (
//     <PortfolioWrapper>
//       <StyledGithubIcon />
//       <PortfolioHeader>Portfolio</PortfolioHeader>
//       <ProjectsHeader>My recent projects</ProjectsHeader>
//       <ProjectsWrapper>
//         {projects.map((project) => (
//           <Project key={project.id}>
//             <ProjectHeader>{project.name}</ProjectHeader>
//             <ProjectDescription>{project.description}</ProjectDescription>
//             <Links>
//               <ProjectDemo>
//                 <Span>Demo:</Span>
//                 <Link
//                   href={`https://${project.owner.login}.github.io/${project.name}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {`${project.name}-link-demo`}
//                 </Link>
//               </ProjectDemo>
//               <ProjectCode>
//                 <Span>Code:</Span>
//                 <Link
//                   href={project.html_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {`${project.name}-link-code`}
//                 </Link>
//               </ProjectCode>
//             </Links>
//           </Project>
//         ))}
//       </ProjectsWrapper>
//     </PortfolioWrapper>
//   );
// };

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
  StyledGithubIcon,
  LoadingText,
  StyledIconSpinner,
  StyledDangerIcon,
  ErrorHeaderText,
  ErrorParagraphText,
  GoToGithubButton
} from "./styled";
import { getRepositories } from "./repositories";
import { useState, useEffect } from "react";

export const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const username = "gp231982";
    const fetchData = async () => {
      try {
        const repositories = await getRepositories(username);
        setProjects(repositories);
        // setLoading(false); // Ustaw stan na sukces po pomyślnym pobraniu danych
        setTimeout(() => {
          // Symulacja pobierania danych po 3 sekundach
          setLoading(false); // Zakończ ładowanie
        }, 3000);
      } catch (error) {
        setError(error); // Ustaw stan na porażkę w przypadku błędu
        setLoading(false); // Ustaw stan na sukces po pomyślnym pobraniu danych
      }
    };

    fetchData();
  }, []);
 
  return (
    <PortfolioWrapper>
      <StyledGithubIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <ProjectsHeader>My recent projects</ProjectsHeader>

      {loading && (
        <div>
          <LoadingText>Please wait, projects are being loaded...</LoadingText>
          <StyledIconSpinner />
        </div>
      )}

      {error && (
        <div>
          <StyledDangerIcon />
          <ErrorHeaderText>Ooops! Something went wrong...</ErrorHeaderText>
          <ErrorParagraphText>
            Sorry, failed to load Github projects. You can check them directly
            on Github.
          </ErrorParagraphText>
          <GoToGithubButton>Go To Github</GoToGithubButton>
        </div>
      )}

      {!loading && !error && projects && (
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
                    {`${project.name}-link-code`}
                  </Link>
                </ProjectCode>
              </Links>
            </Project>
          ))}
        </ProjectsWrapper>
      )}
    </PortfolioWrapper>
  );
};
