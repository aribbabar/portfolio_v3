import styles from "./styles.module.css";

interface props {
  color?: string;
}

function LineBreak({ color = "#000" }: props) {
  return (
    <div style={{ backgroundColor: color }} className={styles.lineBreak}></div>
  );
}

export default LineBreak;
