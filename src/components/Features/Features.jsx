import { useTranslation } from "react-i18next";
import "./Features.css";
import featuresData from "./featureData";

const Features = () => {
  const { t, i18n } = useTranslation();

  const translateFeatData = (data) => {
    return data.map((item) => {
      return {
        ...item,
        title: item.title[i18n.language],
        text: item.text[i18n.language],
      };
    });
  };

  const features = translateFeatData(featuresData);

  return (
    <section className="features">
      <div className="features-main-container">
        <svg
          className="svg-feat"
          id="svg"
          viewBox="0 0 1440 650"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#004853"></stop>
              <stop offset="50%" stopColor="#007e80"></stop>
              <stop offset="100%" stopColor="#00b9bd"></stop>
            </linearGradient>
          </defs>
          <path
            d="M0,150L80,135C160,120,320,90,480,82.1C640,75,800,97,960,96.1C1120,97,1280,75,1360,60L1440,45L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill="url(#gradient)"
          ></path>
        </svg>
        <div className="home-box box-red"></div>
        <div className="feature-container">
          {features.map((feature) => (
            <div key={feature.id} className="feature-box">
              <i className={feature.icon}></i>
              <h3 className="feature-box-title">{feature.title}</h3>
              <div className="feature-box-separator"></div>
              <p className="feature-box-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
