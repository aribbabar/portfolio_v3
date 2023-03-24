import * as dayjs from "dayjs";

import styles from "./styles.module.css";

interface props {
  company: string;
  startDate: string;
  endDate: string;
  position: string;
  location: string;
  roles: string[];
}

function WorkExperienceCard({
  company,
  startDate,
  endDate,
  position,
  location,
  roles
}: props) {
  function timeSince() {
    const startDateDayJS = dayjs(startDate);
    const endDateDayJS = endDate === "Present" ? dayjs() : dayjs(endDate);

    let months = endDateDayJS.diff(startDateDayJS, "months");
    const years = endDateDayJS.diff(startDateDayJS, "years");

    while (months >= 12) {
      months -= 12;
    }

    months++;

    let string = "";

    if (years > 0) {
      if (years == 1) {
        string += `${years} year`;
      } else {
        string += `${years} years`;
      }
    }

    if (years > 0 && months > 0) {
      string += " & ";
    }

    if (months > 0) {
      if (months == 1) {
        string += `${months} month`;
      } else {
        string += `${months} months`;
      }
    }

    return string.trim();
  }

  function getMonth(date: string) {
    return dayjs(date).format("MMM");
  }

  function getYear(date: string) {
    return dayjs(date).format("YYYY");
  }

  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <h3>{company}</h3>
        <h3>
          {getMonth(startDate)} {getYear(startDate)} -{" "}
          {endDate === "Present"
            ? "Present"
            : `${getMonth(endDate)} ${getYear(endDate)}`}{" "}
          <p>{timeSince()}</p>
        </h3>
      </div>
      <div className={styles.topRow}>
        <h4>
          <em>{position}</em>
        </h4>
        <h4>
          <em>{location}</em>
        </h4>
      </div>
      <ul>
        {roles.map((role, i) => (
          <li key={i}>{role}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkExperienceCard;
