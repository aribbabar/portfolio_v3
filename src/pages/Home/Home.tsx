import { useEffect, useRef, useState } from "react";
import anime, { AnimeInstance } from "animejs";
import styles from "./styles.module.css";

function Home() {
  const animationRef = useRef<AnimeInstance | null>(null);
  const [cells, setCells] = useState<number[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function createGrid() {
      let columns = Math.floor(document.body.clientWidth / 50);
      let rows = Math.floor(document.body.clientHeight / 50);

      setCells(Array(columns * rows).fill(0));

      gridRef.current?.style.setProperty("--columns", columns.toString());
      gridRef.current?.style.setProperty("--rows", rows.toString());
    }

    window.onresize = createGrid;

    createGrid();
  }, []);

  function playAnimation(i: number) {
    if (animationRef.current?.remaining) return;

    let columns = Math.floor(document.body.clientWidth / 50);
    let rows = Math.floor(document.body.clientHeight / 50);

    animationRef.current = anime({
      targets: ".cell",
      scale: [
        { value: 1, easing: "easeOutElastic(1, .6)", duration: 0 },
        { value: 2, easing: "easeOutElastic(1, .6)", duration: 1000 }
      ],
      direction: "alternate",
      easing: "easeOutElastic(1, .6)",
      delay: anime.stagger(70, {
        grid: [columns, rows],
        from: i
      })
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid} ref={gridRef}>
        {cells.map((e, i) => (
          <div
            key={i}
            style={{ background: `hsl(${i}, 50%, 80%)` }}
            className="cell"
            onClick={() => {
              playAnimation(i);
            }}
          ></div>
        ))}
      </div>
      <div className={styles.content}>
        <h2>Hi. My name is Arib</h2>
        <p>I'm a full-stack developer</p>
        <div className={styles.linksContainer}>
          <a
            href="https://github.com/aribbabar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-github fa-2xl">
              <span className={styles.tooltip}>GitHub</span>
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/aribfarooqui/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-2xl">
              <span className={styles.tooltip}>LinkedIn</span>
            </i>
          </a>
          <a
            href="./resume-web-safe.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-file fa-2xl">
              <span className={styles.tooltip}>Resume</span>
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
