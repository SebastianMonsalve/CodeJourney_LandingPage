import { useEffect } from "react";
import "./Carousel.css";
import imageData from "./dataImages";
import { useTranslation } from "react-i18next";

const Carousel = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerInnerContent = Array.from(scrollerInner.children);

        scrollerInnerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };
    addAnimation();
  }, []);

  return (
    <section className="carousel">
      <div className="carousel">
        <h1 className="carousel-title">{t("carousel-title")}</h1>
        <div className="scroller">
          <ul className="img-list scroller__inner">
            {imageData.map((image, index) => (
              <li key={index}>
                <img
                  className="carousel__img"
                  src={image.src}
                  alt={image.alt}
                  draggable="False"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
