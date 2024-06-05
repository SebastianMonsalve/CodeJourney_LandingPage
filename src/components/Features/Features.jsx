import { useTranslation } from "react-i18next";
import './Features.css';
import featuresData from './featureData';

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
  }

  const features = translateFeatData(featuresData);

  return (
    <section className="features">
      <div className='features-main-container'>
        <svg className="svg-feat" width="100%" height="100%" id="svg" viewBox="0 0 1440 650" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#004853"></stop>
              <stop offset="50%" stop-color="#007e80"></stop>
              <stop offset="100%" stop-color="#00b9bd"></stop>
            </linearGradient>
          </defs>
          <path d="M0,224L40,229.3C80,235,160,245,240,250.7C320,256,400,256,480,218.7C560,181,640,107,720,64C800,21,880,11,960,16C1040,21,1120,43,1200,58.7C1280,75,1360,85,1400,90.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1"></path>
        </svg>
        <div className="home-box box-red"></div>
        <div className="feature-container">
          {features.map((feature) => (
            <div className="feature-box">
              <i class={feature.icon}></i>
              <h3 className='feature-box-title'>{feature.title}</h3>
              <div className="feature-box-separator"></div>
              <p className='feature-box-text'>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;