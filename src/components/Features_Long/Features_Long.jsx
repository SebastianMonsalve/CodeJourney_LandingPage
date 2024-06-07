import { useTranslation } from "react-i18next";
import "./Features_Long.css";
import featureSectionData from "./featureLongData";

const Features_Long = () => {
  const { t, i18n } = useTranslation();

  const translateSectionData = (data) => {
    return data.map((item) => {
      return {
        ...item,
        title: item.title[i18n.language],
        text: item.text[i18n.language],
      };
    });
  };

  const featuresSection = translateSectionData(featureSectionData);

  return (
    <section className="features_long">
      <svg
        className="svg-section"
        id="svg"
        viewBox="0 0 1440 1300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient-testi" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5d7e7c"></stop>
            <stop offset="100%" stopColor="#f6f6f6"></stop>
          </linearGradient>
        </defs>
        <path
          d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,112C672,96,768,64,864,85.3C960,107,1056,181,1152,186.7C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          fill="url(#gradient-testi)"
        ></path>
      </svg>
      {featuresSection.map((item) => (
        <section key={item.id} className="feat-container">
          <div className="feat-text-container">
            <h1 className="feat-text-title">{item.title}</h1>
            <p className="feat-text">{item.text}</p>
          </div>
          <div className="feat-img-container">
            <img
              src={item.image}
              alt={item.alt}
              className="feat-img"
              draggable="False"
            />
          </div>
        </section>
      ))}
    </section>
  );
};

export default Features_Long;
