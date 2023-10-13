import React, { useEffect } from "react";
import "./investorGuide.css";
import SmartInvestment from "./images/Smart Investment.png";
import EngagingInStockMarket from "./images/Engaging in Stock Market.png";
import OwnershipOfShares from "./images/Ownership of Shares.png";
import BuyStock from "./images/Buy Stocks.png";
import SuperiorGrowth from "./images/Superior Growth.png";
import ExpertOpinion from "./images/Expert Opinion.png";
import BecomeShareholder from "./images/Shareholder.png";
import Equities from "./images/Equities.png";
import Scam from "./images/Scam.png";
import AttractiveStock from "./images/Attractive Stock.png";
import CDC from "./images/CDC.png";
import CDSBenefits from "./images/CDS Bnefits.png";
import TrackingStocks from "./images/Tracking Stocks.png";
import Goals from "./images/Goals.png";
import Risks from "./images/Risk.png";
import Costs from "./images/Cost.png";
import InformationTools from "./images/Information Tools.png";
import InvestingStyles from "./images/Investing Styles.png";
import FindingStyle from "./images/Finding Your Style.png";
import { FaRegFilePdf } from "react-icons/fa";
import investorguide from "./images/Investor_Guide.pdf";

export default function InvestorGuide() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="investorGuide">
      <div className="investorGuideHeading">
        <h3 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
          Investor Guide
        </h3>
        <a href={investorguide} target="_blank" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" style={{textDecoration: "none"}}><p style={{background: "#a0ff00", color: "black", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginTop: "20px", marginBottom: "0px", borderRadius: "5px", padding: "10px 20px", fontWeight: "600"}}>Investor Awareness In Urdu <FaRegFilePdf style={{paddingLeft: "10px", fontSize: "30px"}}></FaRegFilePdf></p></a>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Suggestions for making smart investments
          </h4>
          <ul
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <li>Avoid greed, as it can corrupt wisdom and lead to problems.</li>
            <li>
              Do not make the same mistake twice; learn from your errors and
              avoid repeating them.
            </li>
            <li>
              Don't follow the crowd, as individual losses are not shared by the
              group.
            </li>
            <li>
              Diversify your investments; avoid putting all your eggs in one
              basket.
            </li>
            <li>Avoid using rumours as tips; they can lead to losses.</li>
            <li>
              Control your emotions when trading; use research backed by
              fundamental reasoning.
            </li>
            <li>Be patient and persevere; avoid impatience.</li>
            <li>
              Avoid over borrowing; remember that loan repayment is not an
              investment.
            </li>
          </ul>
        </div>

        <div className="investorGuideIllustration">
          <img
            src={SmartInvestment}
            alt="Smart-Investment"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideIllustration">
          <img
            src={EngagingInStockMarket}
            alt="Engaging-In-Stock-Market"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>

        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            When engaging in stock market trading, it is essential to keep in
            mind the following:
          </h4>
          <ul
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <li>
              Verify information and differentiate between opinions, facts, and
              fiction before making any decisions.
            </li>
            <li>
              Acquire knowledge of stock market principles and practices to
              understand its unique cycles and fluctuations.
            </li>
            <li>
              Cultivate wisdom by maintaining discipline and working on
              self-improvement to achieve success.
            </li>
            <li>
              Create actionable plans that include alternative options and
              tactics to succeed in the stock market game.
            </li>
            <li>
              Exercise thriftiness and shrewdness to be prudent with your money
              and avoid investing in overvalued stocks.
            </li>
            <li>
              Be aware of the true value of a stock, despite its ups and downs.
            </li>
            <li>
              Minimize risks and maximize returns by balancing risk and reward.
            </li>
            <li>
              Prioritize investment protection and the safety of your portfolio
              and share capital.
            </li>
            <li>
              An example of applying these principles is the case of Hershey's.
              Although the chocolate tastes good, it does not necessarily
              indicate the company's strength in the stock market. It is crucial
              to remember that a company's product does not provide merit to its
              position in the stock market index.
            </li>
          </ul>
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Ownership of Shares
          </h4>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Shares represent a small ownership stake in a company, and investors
            can buy large or small amounts to match their investment amount. The
            company's share price can fluctuate based on various factors,
            including its performance and market conditions.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            When shares are purchased and transferred to the investor's name,
            their name will be entered in the company's share register. This
            will entitle them to all the benefits of share ownership, such as
            receiving dividends, voting at general meetings, and receiving the
            company's reports.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            If the investor decides to sell their shares, they must deliver the
            share certificates to the broker in time for the transaction to be
            completed.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            With the introduction of the Central Depository System (CDS),
            investors can hold shares either in paper form or electronically
            through the Central Depository Company (CDC).
          </p>
        </div>
        <div className="investorGuideIllustration">
          <img
            src={OwnershipOfShares}
            alt="Ownership-Of-Shares"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div
          className="investorGuidePara"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <h4>Why do Investors Buy Shares?</h4>
          <p>
            Investors purchase shares because historical data indicates that
            over a period of twenty years, shares have yielded better returns
            than most other forms of savings. Investing in shares can
            potentially lead to a steady income through dividends and also offer
            the possibility of capital growth, where the value of your
            investment can increase if the share prices rise above your initial
            investment. When you sell your shares at a higher price than what
            you bought them for, it results in a capital gain.
          </p>
        </div>

        <div
          className="investorGuidePara"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h4>What are Dividends?</h4>
          <p>
            Dividends refer to the payments made to shareholders from a
            company's profits. These returns can be in the form of cash or bonus
            shares. Companies typically distribute dividends once or twice a
            year, depending on their profit distribution policy.
          </p>
        </div>

        <div
          className="investorGuidePara"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <h4>What is Capital Growth?</h4>
          <p>
            Capital growth refers to the increase in the value of your
            investment in shares over time, which makes your shares worth more
            than what you initially paid for them. This is different from
            deposit accounts or fixed income savings schemes, where the
            principal amount always remains the same, with any earnings in the
            form of interest. The growth in the value of shares is dependent on
            the performance of the company and can be achieved through effective
            management.
          </p>
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideIllustration">
          <img
            src={BuyStock}
            alt="Buy-Stock"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>

        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Things You Should Know Before You Buy a Stock
          </h4>
          <ul
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <li>
              Familiarize yourself with the company's business and what it does.
            </li>
            <li>Check if the company is profitable or not.</li>
            <li>
              Look into the company's earnings history and future outlook.
            </li>
            <li>Consider the valuation of the company's stock.</li>
            <li>Identify the company's competitors.</li>
            <li>Find out who runs the company.</li>
            <li>Read the company's annual reports thoroughly.</li>
          </ul>
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Why Stocks are Vital for Superior Growth
          </h4>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Stocks are considered to be essential for achieving superior growth
            due to the following reasons:
          </p>
          <ul
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <li>
              Equities are primarily growth investments, and stocks are the most
              popular equity investment option for people seeking growth.
            </li>
            <li>
              Apart from potential capital gains, stocks can also provide a
              regular stream of income through dividends.
            </li>
            <li>
              As a shareholder, owning equity in a company makes you an owner,
              and if the company makes profits, you may receive dividends as a
              reward.
            </li>
          </ul>
        </div>

        <div className="investorGuideIllustration">
          <img
            src={SuperiorGrowth}
            alt="Superior-Growth"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideIllustration">
          <img
            src={ExpertOpinion}
            alt="Expert-Opinion"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>

        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Expert Opinion
          </h4>
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            Financial experts unanimously agree that including stocks in your
            investment portfolio is essential for achieving long-term growth and
            security. To reap the benefits of stock investments, it is
            recommended to adopt a long-term view. Although stocks have
            historically proven to be the most profitable investment, it is
            important to keep in mind that this success is achieved over an
            extended period.
          </p>
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            Investing in stocks for the long term requires enduring both good
            and bad days. Short-term traders are likely to miss out on most of
            the positive days, unless they have access to inside information.
            Therefore, the key to success in stock investing is to remain
            invested for the long term.
          </p>
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            How Do you Decide when a Stock is Attractive to Purchase?
          </h4>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            When considering investing in a stock, there are two main approaches
            you can take: fundamental analysis and technical analysis.
            Fundamental analysis involves examining a company's earnings, cash
            flow, debt, industry strength, economic factors, and other relevant
            factors to determine the potential for long-term success. Technical
            analysis, on the other hand, focuses on trading volume, cyclical
            behaviour, trends, moving averages, and other technical factors.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Some investors use both approaches together to determine the best
            investment opportunities. They may use fundamental analysis to
            assess a company's long-term potential and technical analysis to
            identify the best time to buy. For instance, if a company is
            believed to have strong potential but is currently experiencing a
            weak market, technical analysis can help determine how far the stock
            price might fall and provide insight into the ideal time to invest.
          </p>
        </div>
        <div className="investorGuideIllustration">
          <img
            src={AttractiveStock}
            alt="Attractive-To-Purchase"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideIllustration">
          <img
            src={BecomeShareholder}
            alt="To-Become-A-Shareholder"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>

        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            How to Become a Shareholder
          </h4>
          <ol
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <li>
              IPOs (Initial Public Offerings): This is the first time a company
              offers its shares to the public. Interested investors can buy
              shares directly from the company through an IPO.
            </li>
            <li>
              Secondary Market: Shares of publicly-traded companies can be
              bought and sold on stock exchanges like the New York Stock
              Exchange (NYSE) and NASDAQ.
            </li>
            <li>
              Employee Stock Ownership Plans (ESOPs): Employees of a company can
              become shareholders by participating in the company's ESOP
              program.
            </li>
            <li>
              Private Placements: Private companies may offer shares to select
              individuals or institutions through a private placement.
            </li>
            <li>
              Rights Issues: Existing shareholders of a company may have the
              opportunity to purchase additional shares through a rights issue.
            </li>
          </ol>
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Things you should know about Equities
          </h4>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Equities are highly volatile and risky, so it's important to only
            invest if you can handle a potential fall in price without it
            affecting your daily life. As the saying goes, "the greater the
            reward, the higher the risk."
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            The goal of investing in stocks is to buy low and sell high, but
            timing the market is difficult. Rather than trying to predict when
            the market will go up or down, it's more realistic to catch a
            portion of each big swing by buying during an upswing and selling
            during a downswing. However, controlling greed is crucial, as it's
            impossible to know exactly when the top or bottom has been reached.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            The stock market is influenced by two emotions: greed and fear.
            Greed can cause people to pay high prices for unworthy shares during
            bull markets, while fear can lead people to believe negative rumours
            during bear markets. To make rational decisions, it's important to
            step away from the crowd and not let emotions take over.
          </p>
        </div>
        <div className="investorGuideIllustration">
          <img
            src={Equities}
            alt="Equities"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideIllustration">
          <img
            src={Scam}
            alt="Scams"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>

        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            How to spot Scams
          </h4>
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            To avoid losing your savings to scams, it's important to be able to
            recognize the common characteristics and promises made by fraudulent
            investment schemes. Here are some red flags to watch out for:
          </p>
          <ul
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <li>
              Promises of unrealistically high returns, such as 20-30% per
              month, every month.
            </li>
            <li>
              Urgency tactics, such as being told the offer is only available
              for a limited time and that you must act immediately.
            </li>
            <li>
              Unsolicited phone calls or emails offering investment
              opportunities, particularly if you don't know how the company
              obtained your contact information.
            </li>
            <li>
              Requests for personal information, such as your bank account
              number, from unknown or unverified sources.
            </li>
            <li>
              Investment products that guarantee large profits with no financial
              risk.
            </li>
            <li>
              Difficulty finding information about the company's license or
              physical existence on any regulatory or authoritative websites.
            </li>
          </ul>
        </div>
      </div>

      <div className="investorGuideSubHeading">
        <h3 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
          What is CDC
        </h3>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideText">
          <h4
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Capital Markets prior to CDS
          </h4>
          <ul
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <li>
              Book keeping and paperwork increased due to higher trading volume.
            </li>
            <li>
              Settlement problems arose due to increased volume of shares
              traded.
            </li>
            <li>
              Maintenance of large vaults for physical certificate safekeeping
              became a challenge.
            </li>
            <li>
              Share transfer procedures took up to 45 days, causing significant
              delays.
            </li>
            <li>
              Stamp duty payment for share transfers ranged from 0.1% to 1.5% of
              the face value.
            </li>
            <li>
              Issuers took over two months to dispatch certificates for new
              issues.
            </li>
            <li>
              Risks of damaged, lost, forged, and duplicate certificates
              emerged.
            </li>
            <li>
              Significant capital and time investment was required for issuing
              and dispatching share certificates, as well as for cash dividends,
              bonus, and right issues.
            </li>
          </ul>
        </div>
        <div className="investorGuideIllustration">
          <img
            src={CDC}
            alt="CDC"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideIllustration">
          <img
            src={CDSBenefits}
            alt="CDS-Benefits"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>

        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Benefits after CDS was Incorporated
          </h4>
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            Following are some of the benefits of electronic settlement of
            securities through CDS: Reduced workload due to paperless settlement
            environment. Reduced manpower requirements. Instantaneous transfers
            of ownership. No stamp duty on transfers in CDS. No risk of damaged,
            lost, forged or duplicate certificates. No impact in case of sudden
            increase of settlement volumes. Instant credit of bonus, rights and
            new issues. Substantial reduction of paperwork during book closure.
            Convenient pledging of securities. Substantial reduction in time &
            capital investments. rephrase in bullets
          </p>
          <ul
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <li>Workload reduced in paperless settlement environment.</li>
            <li>Fewer manpower requirements.</li>
            <li>Instant transfers of ownership.</li>
            <li>No stamp duty required for transfers made through CDS.</li>
            <li>
              Elimination of risks associated with damaged, lost, forged, or
              duplicate certificates.
            </li>
            <li>Ability to handle sudden increases in settlement volumes.</li>
            <li>Instant credit of bonus, rights, and new issues.</li>
            <li>Significant reduction in paperwork during book closure.</li>
            <li>Convenient pledging of securities.</li>
            <li>
              Substantial reduction in time and capital investments required.
            </li>
          </ul>
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Tracking stocks
          </h4>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            To monitor the performance of your stocks, it's important to refer
            to stock listings which are commonly published in newspapers such as
            Dawn. While these listings may seem overwhelming at first, they can
            be a valuable resource for keeping track of your investments. The
            information contained in the listings is organized into various
            columns which include:
          </p>
          <ul
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <li>
              Company name: Typically abbreviated and sorted alphabetically.
            </li>
            <li>Symbol: A one to five character nickname for the company.</li>
            <li>Volume: The number of shares traded the previous day.</li>
            <li>
              High, Low and Close: Indicators of the highest and lowest stock
              prices from the previous day, as well as the closing price.
            </li>
            <li>
              Net change: A reflection of the change in the stock price from the
              previous day, indicating whether it has increased or decreased.
            </li>
          </ul>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Apart from stock listings, you can also obtain helpful insights into
            companies from their annual reports. These reports contain financial
            statements such as the balance sheet, income statement, and cash
            flows, as well as explanations for any changes that occurred during
            the year.
          </p>
        </div>
        <div className="investorGuideIllustration">
          <img
            src={TrackingStocks}
            alt="Tracking-Stock"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="investorGuideSubHeading">
        <h3 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
          Key considerations for investment in equities
        </h3>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideIllustration">
          <img
            src={Goals}
            alt="Goals"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>

        <div className="investorGuideText">
          <h4
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Goals
          </h4>
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            To create an effective investment portfolio, it is crucial to
            identify the reasons for investing. Before beginning to invest,
            investors should consult with their broker and consider the
            following questions:
          </p>
          <ul
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <li>What are my investment goals and objectives?</li>
            <li>What is the intended purpose of the invested money?</li>
            <li>How much risk am I comfortable taking on?</li>
            <li>What is the timeframe for achieving my investment goals?</li>
          </ul>
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            Collaboration with your advisor is essential to establish a mutual
            understanding of your unique requirements and objectives.
          </p>
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Risks
          </h4>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Prior to making any investment decisions, it is important to assess
            and understand the associated risks. Risk can be viewed in terms of
            portfolio volatility, the possibility of failing to achieve
            investment goals, or the potential for permanent loss of capital.
            When evaluating risk, it is necessary to consider the following
            questions:
          </p>
          <ul
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <li>How much volatility am I comfortable with?</li>
            <li>
              What are the consequences of failing to achieve my investment
              objectives?
            </li>
            <li>What is the maximum loss I can tolerate?</li>
            <li>Do I want to use leverage?</li>
          </ul>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Risk and returns are generally correlated. Increasing risk often
            leads to higher expected returns over the long term, while lowering
            risk leads to lower expected returns. However, this is not always
            the case. In some circumstances, higher risk may lead to lower
            returns over an extended period of time, and vice versa.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Investment guidelines should be established based on your goals and
            risk tolerance. These guidelines will help you structure your
            portfolio and provide a framework for evaluating and understanding
            your investment performance.
          </p>
        </div>

        <div className="investorGuideIllustration">
          <img
            src={Risks}
            alt="Risks"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideIllustration">
          <img
            src={Costs}
            alt="Costs"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>

        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Costs
          </h4>
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            There are certain costs associated with stock trading that investors
            should be aware of. These costs can be categorized into two types:
            daily trade charges for intra-day transactions and delivery charges
            for delivery transactions. It is important for investors to have a
            clear understanding of the commission structure of their chosen
            brokerage service, as the structure can vary from broker to broker.
            It is recommended that investors inquire with their broker about all
            costs associated with stock trading in order to accurately determine
            their net profit position.
          </p>
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Information Tools Make All the Difference
          </h4>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            With the rise of modern technology, you may feel both hopeful and
            overwhelmed about investing your savings online. However, it's
            important to recognize that understanding the market and becoming a
            successful investor requires knowledge and skills that may not come
            naturally. To truly grasp what's happening in the market and achieve
            success, you must familiarize yourself with the latest trading
            techniques and strategies available.
          </p>
        </div>

        <div className="investorGuideIllustration">
          <img
            src={InformationTools}
            alt="Information-Tools"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideIllustration">
          <img
            src={InvestingStyles}
            alt="Investing-Styles"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>

        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Investing Styles
          </h4>
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            There are various styles of trading adopted by different investors.
            Long-term investors typically buy stocks and hold onto them for a
            year or more. Mid-term investors hold stocks for a period ranging
            from 30 days to 6 months. Short-term traders trade frequently on a
            weekly basis, while day traders buy and sell stocks on a daily
            basis. Your frequency of trading affects your potential profits if
            you make good decisions. However, determining the right trading
            style and selecting the appropriate stocks to invest in can be
            challenging. Some investors may prefer companies with strong
            earnings, while others may focus on analysing a company's financial
            statements and balance sheets, specifically looking for low debt
            ratio, high cash flow, and high profit margins.
          </p>
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div className="investorGuideText">
          <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Finding your style
          </h4>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Your investment style is influenced by a variety of factors such as
            age, personality, personal experiences, and financial circumstances.
            For instance, if you are nearing retirement and have financial
            obligations, you may tend to be more risk-averse and prefer a
            conservative investment approach.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            However, if you are young, earning a high income, have few financial
            obligations, and have not experienced significant economic
            challenges, you may be more inclined to take risks.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Although there are various investment styles, most investors tend to
            fall into one of three categories: conservative, moderate, or
            aggressive.
          </p>
        </div>

        <div className="investorGuideIllustration">
          <img
            src={FindingStyle}
            alt="Finding-Style"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="investorGuideSubContainer row">
        <div
          className="investorGuidePara"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <h4>Conservative Investors</h4>
          <p>
            Conservative investors prioritize the protection of their investment
            and typically aim to avoid any risks that may result in loss of
            their principal. They often settle for lower returns to maintain the
            safety of their investment.
          </p>
        </div>

        <div
          className="investorGuidePara"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h4>Moderate Investors</h4>
          <p>
            Investors with a moderate risk tolerance seek to grow their
            portfolios while also protecting them from significant losses. They
            typically balance the ups and downs of growth investments, such as
            stocks, by allocating a significant portion of their portfolio to
            generate consistent income and preserve their initial investment.
          </p>
        </div>

        <div
          className="investorGuidePara"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h4>Aggressive Investors</h4>
          <p>
            Aggressive investors prioritize investments with a high potential
            for growth, and are willing to accept the risk of losing some or all
            of their initial investment in order to achieve potentially higher
            returns.
          </p>
        </div>
      </div>
    </div>
  );
}
