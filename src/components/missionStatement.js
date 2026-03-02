import React, { useEffect } from "react";
import "./missionStatement.css";
import Empower from "./images/Empower Individual Investors.png";

export default function MissionStatement() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container-xs mission">
      <div className="missionHeading col-xl-12 col-xs-12">
        <h3 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">Mission Statement</h3>
      </div>

      <div className="missionSubContainer row col-xs-12">
        <div className="missionText col-xs-12">
          <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            Our mission is to empower individual investors with the tools and
            information they need to make informed decisions about their
            investments in the stock market. We strive to provide accurate,
            up-to-date market analysis and financial news, along with
            user-friendly tools and resources that make it easy for investors of
            all levels to stay informed and make the most of their investments.
            Our goal is to be a trusted and reliable source of information for
            investors and to help them achieve their financial goals through
            smart investment decisions.
          </p>
        </div>
        <div className="missionIllustration col-sm-12" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
          <img src={Empower} alt="Empower-Individual-Investors" draggable="false"/>
        </div>
      </div>
    </div>
  );
}
