import LineBreak from "../../components/LineBreak/LineBreak";
import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./styles.module.css";

function About() {
  function createRipple(e: React.MouseEvent<HTMLLIElement | HTMLElement>) {
    const button = e.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = "0px";
    circle.style.top = "-70px";
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  return (
    <div className={styles.container}>
      <PageTitle title="A Little About Me" />
      <LineBreak color="#fff" />
      <p>
        <span className={styles.aboutTitle}>About: </span>I enjoy making
        applications for the web and mobile devices. I love coding and in my
        free time, I always strive to expand my skillset as a software engineer
        by learning and working with new frameworks and technologies.
        <br />
        <br />
        <span className={styles.aboutTitle}>Education: </span>B.S., Computer
        Science, University of Maryland
        <br />
        <br />
        <span className={styles.aboutTitle}>Interests: </span>Soccer; Swimming;
        Sleeping; Sustainability; Politics; Reddit; Gaming
      </p>
      <br />
      <PageTitle title="Some Technologies I Have Worked With in the Past" />
      <LineBreak color="#fff" />
      <div className={styles.skillsContainerGrid}>
        <div className={styles.skillsContainer}>
          <h3>Back-End</h3>
          <LineBreak color="#fff" />
          <ul>
            <li onClick={createRipple}>Node</li>
            <li onClick={createRipple}>C#</li>
          </ul>
        </div>
        <div className={styles.skillsContainer}>
          <h3>Front-End</h3>
          <LineBreak color="#fff" />
          <ul>
            <li onClick={createRipple}>React</li>
            <li onClick={createRipple}>Angular</li>
            <li onClick={createRipple}>Svelte</li>
          </ul>
        </div>
        <div className={styles.skillsContainer}>
          <h3>Utilities & Others</h3>
          <LineBreak color="#fff" />
          <ul>
            <li onClick={createRipple}>Git</li>
            <li onClick={createRipple}>Unity</li>
            <li onClick={createRipple}>Googling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
