import styles from "./styles.module.css";

interface props {
  title: string;
}

function PageTitle({ title }: props) {
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
    <h2 className={styles.title} onClick={createRipple}>
      {title}
    </h2>
  );
}

export default PageTitle;
