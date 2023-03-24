import PageTitle from "../../components/PageTitle/PageTitle";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";

import styles from "./styles.module.css";

function Projects() {
  return (
    <div className={styles.container}>
      <PageTitle title="Some Projects I Have Worked On" />
      <div className={styles.cardsContainer}>
        <ProjectsCard
          imageTitle={"favorita-image.svg"}
          githubLink={"https://github.com/aribbabar/favorita"}
          demoLink={"https://favorita.chalkys.net/"}
          title={"Favorita"}
          description={
            "A web application that allows users to keep track of their favorite categories of entertainment!"
          }
          builtWithTechnologies={["React", "Firebase"]}
        />
        <ProjectsCard
          imageTitle={"dbz-image.jpg"}
          githubLink={"https://github.com/aribbabar/dbzcardgame"}
          demoLink={"https://aribbabar.github.io/dbzcardgame/"}
          title={"Dragon Ball Z: The Card Game"}
          description={
            "A fun simple dragon ball z card game written completely in vanilla JS."
          }
          builtWithTechnologies={["HTML", "CSS", "JavaScript"]}
        />
      </div>
    </div>
  );
}

export default Projects;
