import { useTranslation } from "react-i18next";
import "./Testimonial.css";
import testimonialDataUser from "./testimonialData";

const Testimonial = () => {
  const { t, i18n } = useTranslation();

  const translateTestiData = (data) => {
    return data.map((item) => {
      return {
        ...item,
        text: item.text[i18n.language],
        role: item.role[i18n.language],
      };
    });
  };

  const testimonial = translateTestiData(testimonialDataUser);

  return (
    <section className="testimonial">
      <div className="testimonial-container">
        <svg
          className="svg-testi"
          id="svg"
          viewBox="0 0 1440 310"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="gradient-testi"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#5d7e7c"></stop>
              <stop offset="100%" stopColor="#f6f6f6"></stop>
            </linearGradient>
          </defs>
          <path
            d="M0,32L48,48C96,64,192,96,288,101.3C384,107,480,85,576,85.3C672,85,768,107,864,128C960,149,1056,171,1152,197.3C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#gradient-testi)"
          ></path>
        </svg>
        <div className="testimonial-content">
          <h1 className="testimonial-title">{t("testimonial-title")}</h1>
          <div className="testimonial-wrapper">
            {testimonial.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div className="user-container">
                  <p className="user-name">{item.name}</p>
                  <img
                    className="user-img"
                    src={item.img}
                    alt="user"
                    draggable="False"
                  />
                </div>
                <p className="testimonial-text">{item.text}</p>
                <div className="role-container">
                  <p className="user-name">{item.role}</p>
                  <img
                    className="company-logo"
                    src={item.companyLogo}
                    alt="Company Logo"
                    draggable="False"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
