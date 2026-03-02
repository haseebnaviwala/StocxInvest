import React, { useEffect } from "react";
import FinancialExpert from "./images/Financial Services.png";
import RealTime from "./images/Real Time Stock.png";
import "./aboutUs.css";

export default function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container-xs aboutUs">
      <div className="aboutUsHeading col-xl-12 col-xs-12">
        <h3 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">About US</h3>
      </div>

      <div className="aboutUsSubContainer row col-xs-12">
        <div className="aboutUsText col-xs-12">
          <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            Welcome to stock X factor! We are a team of financial experts and
            industry professionals dedicated to providing accurate and
            up-to-date information on the stock market. Our website offers a
            variety of resources, including real-time stock quotes, market
            analysis, and educational articles on investing. We strive to
            empower our users with the knowledge and tools they need to make
            informed investment decisions. Thank you for choosing our website as
            your go-to source for stock market investments.
          </p>
        </div>
        <div className="aboutUsIllustration col-sm-12">
          <img src={FinancialExpert} alt="Financial-Experts" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" draggable="false"/>
        </div>
      </div>

      <div className="row aboutUsSubContainer">
        <div className="aboutUsIllustration">
          <img src={RealTime} alt="Real-Time-Stocks" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000" draggable="false"/>
        </div>
        <div className="aboutUsText">
          <p data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
            Our website is a leading provider of real-time stock market
            information and analysis. We offer a wide range of resources for
            investors, including financial news, market data, stock analysis,
            and more. Our team of financial experts and market analysts work
            tirelessly to provide you with the most accurate and up-to-date
            information possible, so you can make informed decisions about your
            investments. Whether you're a seasoned investor or just getting
            started, our website is the perfect place to stay informed about the
            stock market and make the most of your investments. Thank you for
            choosing us as your source for stock market information and
            analysis!
          </p>
        </div>
      </div>
    </div>
  );
}
