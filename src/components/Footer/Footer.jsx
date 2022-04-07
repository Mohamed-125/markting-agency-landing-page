import React from "react";
import "./Footer.css";
import FooterContent from "./FooterContent";
import { FaMagento } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
const Footer = () => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <section className="footer__section">
      <div className="footer__contener flex__center section__padding">
        <div className="footer__first_div">
          <h3 className="footer__title">
            Join our exclusive membership to receive the lastest news and trends
          </h3>
          <p className="footer__subTilte">You can unsubscribe at any time</p>
          <div
            style={
              width <= 768
                ? { flexDirection: "column" }
                : { flexDirection: "row" }
            }
            className="footer__input_div flex"
          >
            <input
              style={width <= 768 ? { width: "90%" } : { width: "200px" }}
              placeHolder="Your Email"
              type="email"
            ></input>
            <button
              style={{ padding: "1rem 3rem ", marginTop: "0" }}
              className={
                width <= 768 ? "mobile__custom_button" : "custom__button"
              }
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="footer__second_div  ">
          {width <= 874 ? (
            <>
              <div className="footer__second_div_content">
                <FooterContent
                  title="About Us"
                  content={[
                    "How it works ",
                    "Testimonials",
                    "Careers",
                    "Investors ",
                    "Terms of Service ",
                  ]}
                />
                <FooterContent
                  title="Contact Us"
                  content={[
                    "Contact ",
                    "Support",
                    "Destinations",
                    "Sponsorships ",
                  ]}
                />
              </div>
              <div className="footer__second_div_content">
                <FooterContent
                  title="Videos"
                  content={[
                    "Submit Video ",
                    "Ambassdors",
                    "Agency",
                    "Influencer ",
                  ]}
                />
                <FooterContent
                  title="Social Media"
                  content={["Instgram ", "Facebook", "Youtube", "Twitter "]}
                />
              </div>
            </>
          ) : (
            <>
              <FooterContent
                title="About Us"
                content={[
                  "How it works ",
                  "Testimonials",
                  "Careers",
                  "Investors ",
                  "Terms of Service ",
                ]}
              />
              <FooterContent
                title="Contact Us"
                content={[
                  "Contact ",
                  "Support",
                  "Destinations",
                  "Sponsorships ",
                ]}
              />
              <FooterContent
                title="Videos"
                content={[
                  "Submit Video ",
                  "Ambassdors",
                  "Agency",
                  "Influencer ",
                ]}
              />
              <FooterContent
                title="Social Media"
                content={["Instgram ", "Facebook", "Youtube", "Twitter "]}
              />
            </>
          )}
        </div>
        <div className="footer__last_div flex__center">
          <p style={{ color: "white" }}>
            <FaMagento style={{ marginRight: ".5rem", color: "white" }} />{" "}
            ULETRA
          </p>

          <p>ULTRA © 2022</p>
          <div className="footer__icons">
            <BsFacebook /> <BsInstagram /> <BsYoutube /> <BsTwitter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
