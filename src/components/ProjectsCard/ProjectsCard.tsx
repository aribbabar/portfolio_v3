import LineBreak from "../LineBreak/LineBreak";
import styles from "./styles.module.css";

interface props {
  imageTitle: string;
  githubLink: string;
  demoLink: string;
  title: string;
  description: string;
  builtWithTechnologies: string[];
}

function ProjectsCard({
  imageTitle,
  githubLink,
  demoLink,
  title,
  description,
  builtWithTechnologies
}: props) {
  return (
    <div className={styles.card}>
      <img src={`./${imageTitle}`} alt={imageTitle} />
      <div className={styles.linksContainer}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </div>
      <h3>{title}</h3>
      <LineBreak color="#fff" />
      <p>{description}</p>
      <br />
      <div className={styles.technologiesUsedContainer}>
        <p>Built With:</p>
        {builtWithTechnologies.map((technology, i) => (
          <span key={i}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectsCard;
