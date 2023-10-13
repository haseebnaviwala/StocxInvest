import React from "react";
import "./managements.css";
import Haris from "./images/men.png";
import Ayesha from "./images/women.png";
import Rahil from "./images/rahil-sawani.png";

export default function Managements() {
  return (
    <div className="managements">
      <div className="managementsHeading">
        <h3 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
          Management
        </h3>
      </div>

      <div className="managements_company_section">
        <div
          className="managements_BOD"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <h3>Board Of Directors</h3>
          <ul>
            <li>
              <a href="#haris">Muhammad Haris Aslam - CEO / Director</a>
            </li>
            <li>
              <a href="#ayesha">Ayesha Haris - Director</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="managementsSubContainer row" id="haris">
        <div className="managementsIllustration">
          <img
            src={Haris}
            alt="Director/CEO"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>

        <div className="managementsText">
          <h4
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Haris Aslam
          </h4>
          <h4
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            CEO / Director
          </h4>
          <p data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
            Haris Aslam is a highly accomplished and self driven leader in the
            financial services industry, boasting an impressive track record
            spanning over 20 years. With a wealth of expertise in brokerage
            operations, investment strategies, and market trends, he has
            effectively steered the Online division of a prominent brokerage
            house – AKD Securities Limited towards substantial growth and
            profitability. Overseeing all facets of operations, including sales,
            marketing, client services, and technology, he has propelled AKD
            Trade to unprecedented levels of growth and profitability under his
            astute leadership.
          </p>
          <p data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000">
            Commencing his career as a Junior Equity Dealer, he swiftly ascended
            through the ranks to assume senior leadership positions. His diverse
            background encompasses trading, settlement, risk management,
            devising and implementing growth strategies, nurturing
            high-performing teams, and fostering innovation through the
            development of new products.
          </p>
          <p data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">
            As the CEO of StocXinvest Securities (Pvt.) Limited, Haris assumes
            the responsibility of shaping and executing the company's vision,
            mission, and strategy. He possesses an extensive understanding of
            technology and its potential to enhance brokerage house operations.
            His proficiency in online trading allows him to leverage technology
            to bolster efficiency and drive profitability. Placing utmost
            importance on client satisfaction, he is dedicated to delivering
            exceptional service by forging robust relationships with clients and
            comprehending their needs and expectations.
          </p>
          <p data-aos="fade-left" data-aos-delay="1200" data-aos-duration="1000">
            Haris holds a Bachelor of Science degree in Computing from
            Staffordshire University, UK and Stock Brokerage Certification from
            the Institute of Financial Markets of Pakistan.
          </p>
        </div>
      </div>

      <div className="managementsSubContainer row" id="ayesha">
        <div className="managementsText">
          <h4
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Ayesha Haris
          </h4>
          <h4
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Director
          </h4>
          <p
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            Ms. Ayesha is an active stock market investor having an experience over 14 years. Her expertise in the financial markets is complemented by her invaluable experience in real estate investments.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            Ms. Ayesha's journey in the financial landscape is a testament to her commitment to excellence. She has consistently displayed a keen understanding of market dynamics, resulting in impressive returns on investment.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
          >
            Ms. Ayesha's proficiency in both the stock market and real estate domain makes her a valuable asset to any team. Her disciplined approach, astute decision-making, and meticulous attention to detail have earned her a reputation as a reliable and strategic investor.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="1200"
            data-aos-duration="1000"
          >
            Ms. Ayesha holds a Bachelor's degree in Commerce from Karachi University.
          </p>
        </div>

        <div className="managementsIllustration">
          <img
            src={Ayesha}
            alt="Director"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="managementsSubContainer row">
        <div className="managementsIllustration">
          <img
            src={Rahil}
            alt="Director/CEO"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>

        <div className="managementsText">
          <h4
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Rahil Sawani
          </h4>
          <h4
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Head of Sales & Trading
          </h4>
          <p data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
            An experienced professional with over 17 years of professional
            experience in the financial industry. As the head of equities
            trading at Stocxinevst securities limited, Rahil Sawani leads a high
            performing team responsible for managing and executing trades across
            a range of equity products.
          </p>
          <p data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000">
            Rahil Sawani brings to the role of a proven track record of success
            in trading and risk management. He started his career in 2006 as a
            Risk & Settlement Manager and quickly made a name for himself
            through his strong analytical skills. Over the years, Rahil was
            promoted as Head of Risk management and Investment Call Center in
            AKD Securities Limited and now working as a Head of Equities Trading
            for Stocxinvest Securities Limited.
          </p>
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            As the Head of Equities Trading, Rahil Sawani is responsible for
            providing strategic direction and guidance to the traders in the
            team and to the investors. In addition, Rahil plays a key role in
            managing risk and ensuring compliance with regulatory requirements.
          </p>
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            Rahil holds a Master’s degree in Marketing & Finance. Well respected
            in the industry with leadership quality for his contributions to the
            field of equities trading. Outside of work, Rahil enjoys working
            out, tennis and cricket.
          </p>
        </div>
      </div>

      <div className="managements_BOD">
        <div
          className="sponsors"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <h3>
            Details of Sponsors along with shareholding pattern of the Company
          </h3>
        </div>
        <div
          className="managementsTable"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <table>
            <tr>
              <th>Name Of Sponsors</th>
              <th>Number of Shares Held</th>
              <th>Percentage</th>
            </tr>

            <tr>
              <td> Muhammad Haris</td>
              <td>900,000</td>
              <td>50%</td>
            </tr>

            <tr>
              <td>Ayesha Haris</td>
              <td>900,000</td>
              <td>50%</td>
            </tr>

            <tr>
              <th>Total</th>
              <th>1,800,000</th>
              <th>100%</th>
            </tr>
          </table>
        </div>
      </div>

      <div className="managements_company_section">
        <div
            className="managements_BOD"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <h3>Audit Committee</h3>
            <ul>
              <li>
                <a>Ayesha Haris - Chairperson</a>
              </li>
              <li>
                <a>Muhammad Haris Aslam - Member</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="managements_company_section">
          <div
            className="managements_BOD"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <h3>Compliance Officer</h3>
            <p>
              <a>Muhammad Haris Aslam</a>
            </p>
          </div>
        </div>

        <div className="managements_company_section">
          <div
            className="managements_BOD"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <h3>Management Rating</h3>
            <p>
              <a>Business Judiciary Rating BFR4++ </a>
            </p>
          </div>
        </div>

    </div>
  );
}
