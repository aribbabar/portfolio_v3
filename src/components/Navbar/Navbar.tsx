import { useEffect } from "react";

import styles from "./styles.module.css";

interface props {
  currentPageIndex: number;
  setCurrentPageIndex: React.Dispatch<React.SetStateAction<number>>;
  sliderRef: React.MutableRefObject<Glide | null>;
}

function Navbar({ currentPageIndex, setCurrentPageIndex, sliderRef }: props) {
  useEffect(() => {
    sliderRef.current?.go(`=${currentPageIndex}`);
  }, [currentPageIndex]);

  return (
    <nav>
      <div style={{ position: "fixed" }}></div>
      <ul>
        <li
          className={`${
            currentPageIndex === 0 ? styles.highlighted : styles.notHighlighted
          }`}
          onClick={(e) => {
            setCurrentPageIndex(0);
          }}
        >
          <span className="material-icons">home</span>
          {currentPageIndex === 0 && <p>Home</p>}
        </li>
        <li
          className={`${
            currentPageIndex === 1 ? styles.highlighted : styles.notHighlighted
          }`}
          onClick={(e) => {
            setCurrentPageIndex(1);
          }}
        >
          <span className="material-icons">account_circle</span>
          {currentPageIndex === 1 && <p>About</p>}
        </li>
        <li
          className={`${
            currentPageIndex === 2 ? styles.highlighted : styles.notHighlighted
          }`}
          onClick={(e) => {
            setCurrentPageIndex(2);
          }}
        >
          <span className="material-icons">settings</span>
          {currentPageIndex === 2 && <p>Projects</p>}
        </li>
        <li
          className={`${
            currentPageIndex === 3 ? styles.highlighted : styles.notHighlighted
          }`}
          onClick={(e) => {
            setCurrentPageIndex(3);
          }}
        >
          <span className="material-icons">work</span>
          {currentPageIndex === 3 && <p>Work Experience</p>}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
