import { useTranslation } from "react-i18next";
import "./Team.css";
import developerTeamData from "./teamData";

const Team = () => {
  const { t, i18n } = useTranslation();

  const translateTeamData = (data) => {
    return data.map((member) => {
      return {
        ...member,
        role: member.role[i18n.language],
      };
    });
  };

  const team = translateTeamData(developerTeamData);

  return (
    <section className="team">
      <h1 className="team-title">{t("team-title")}</h1>
      <div className="team-separator"></div>
      <p className="team-text">{t("team-description")}</p>
      <div className="team-members-container">
        {team.map((member) => (
          <div key={member.id} className="team-container">
            <div className="team-card">
              <div className="team-image-container">
                <img
                  src={member.image}
                  alt="team-member"
                  className="team-image"
                  draggable="False"
                />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-card-separator"></div>
              <p className="team-name">{t("team-text")}</p>
              <div className="team-contact">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="team-link"
                  title="Visit Github"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href={member.web}
                  target="_blank"
                  rel="noreferrer"
                  className="team-link"
                  title="Visit Personal Website"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
