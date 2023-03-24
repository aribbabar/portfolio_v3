import PageTitle from "../../components/PageTitle/PageTitle";
import WorkExperienceCard from "../../components/WorkExperienceCard/WorkExperienceCard";

import styles from "./styles.module.css";

function WorkExperience() {
  return (
    <div className={styles.container}>
      <PageTitle title="My Work Experience" />
      <WorkExperienceCard
        company={"JCPenney"}
        startDate={"2022-08"}
        endDate={"Present"}
        position={"Associate"}
        location={"Columbia, MD"}
        roles={[
          "Entrusted with the critical responsibility of maintaining and overseeing the entire shoe department at JCPenney due to top-notch performance and leadership skills.",
          "A well-liked and highly respected member of the team known for collaboration and versatility.",
          "Able to seamlessly transition to other areas of the store when called upon, showcasing adaptability and skillfulness."
        ]}
      />
      <WorkExperienceCard
        company={"Distance Education Technology and Services (DETS)"}
        startDate={"2021-08"}
        endDate={"2022-12"}
        position={"Technical Director"}
        location={"College Park, MD"}
        roles={[
          "Demonstrated sharp attention to detail by documenting classroom proceedings accurately.",
          "Provided a seamless and efficient workflow for students, instructors, and staff."
        ]}
      />
      <WorkExperienceCard
        company={"Woodlawn Villager"}
        startDate={"2017-01"}
        endDate={"2018-01"}
        position={"Web Intern"}
        location={"Gwynn Oak, MD"}
        roles={[
          "Demonstrated highly innovative content-creation skills by managing and maintaining a WordPress blog."
        ]}
      />
    </div>
  );
}

export default WorkExperience;
