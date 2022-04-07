import React from "react";
import "./FooterContent.css";
const FooterContent = ({ title, content }) => {
  return (
    <div className="footer__content_div">
      <h3 className="footer__content_title"> {title}</h3>
      {content.map((text, index) => {
        return (
          <p key={text + index} className="footer__content_content">
            {text}
          </p>
        );
      })}
    </div>
  );
};

export default FooterContent;
