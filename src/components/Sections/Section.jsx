import React from "react";
import "./Section.css";
const Section = ({ section, id }) => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <section
      id={id}
      className={section.bg === "dark" ? "section__dark  " : "section__light  "}
    >
      <div
        className={
          section.direction === "ri"
            ? "section__content_reverse section__padding"
            : "section__content section__padding"
        }
      >
        <div className="section__text">
          <p
            style={{
              color: section.bg === "dark" && "rgb(202, 202, 202)",
            }}
            className="section__subTitle"
          >
            {section.subTitle}
          </p>
          <p
            style={{
              color: section.bg === "dark" ? "rgb(230, 230, 230)" : "black",
            }}
            className="section__title"
          >
            {section.title}
          </p>
          <p
            className="section__desc"
            style={{
              color: section.bg === "dark" ? "rgb(202, 202, 202)" : "black",
            }}
          >
            {section.desc}
          </p>
          <button
            style={{}}
            className={
              width <= 768 ? "mobile__custom_button" : "custom__button"
            }
          >
            {section.button}
          </button>
        </div>
        <div>
          <img src={section.image} alt="#" />
        </div>
      </div>
    </section>
  );
};

export default Section;
