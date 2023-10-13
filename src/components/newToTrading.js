import React, { useEffect } from "react";
import "./newToTrading.css";
import DailyNews from "./images/Stock Daily News.png";
import SmartInvestment from "./images/Smart Investment.png";
import SmartInvestment1 from "./images/Smart Investment 1.png";
import VirtualPerson from "./images/Virtual Person.png";
import SmartInvestment2 from "./images/Smart Investment 2.png";
import Corporation from "./images/Corporation.png";
import RiskManagement from "./images/Risk Management.png";
import SuccessfulInvestor from "./images/Successful Investor.png";
import Irc from "./images/IRC.png";
import Diversification from "./images/Diversification.png";

export default function NewToTrading() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="newToTrading">
      <div className="newToTradingHeading col-xl-12">
        <h3 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
          Unlock your financial potential with smart investments.
        </h3>
      </div>

      <div className="newToTradingSubContainer row">
        <div className="newToTradingText">
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            The stock market is a common topic in daily news, with reports of
            new highs, drops in stock prices, and political events impacting it.
            Despite its significance, many people have limited knowledge about
            stocks and the stock market. If you are curious about what a stock
            is, why a stock market exists, where stocks originate from, and why
            people buy and sell them, you have landed on the right platform.
          </p>
        </div>
        <div className="newToTradingIllustration">
          <img
            src={DailyNews}
            alt="Daily-News"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="newToTradingSubContainer row">
        <div className="newToTradingIllustration">
          <img
            src={SmartInvestment}
            alt="Smart-Investment"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
        <div className="newToTradingText">
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            The Basic Idea Stocks in publicly traded companies are bought and
            sold at a stock market (also known as a stock exchange). The
            Pakistan Stock Exchange (PSX) is an example of such a market. In
            your neighborhood, you probably have a supermarket that sells
            groceries. The reason you go the supermarket is because everything
            you need to run your home is available under one roof. It's far more
            convenient than having to make 10 stops at different stores. The PSX
            is a supermarket for stocks. The PSX is like a big room where
            everyone who wants to buy and sell shares can go to conduct their
            transactions. The Exchange makes buying and selling easy. You do not
            have to actually travel to the Stock Exchange; rather, you can call
            a stock broker who does business with the Exchange, and he or she
            will go there on your behalf to buy or sell your stock. With an
            Exchange in place, you can buy and sell shares instantly.
          </p>
        </div>
      </div>

      <div className="newToTradingSubContainer row">
        <div className="newToTradingText">
          <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
          The Stock Exchange has an interesting side effect. Because all the
          buying and selling is concentrated in one place, it allows the price
          of a stock to be known every second of the day. Therefore, investors
          can watch as a stock's price fluctuates based on news from the
          company, media reports, economic news and a range of other factors.
          Smart buyers and sellers take all of these factors into account before
          making decisions. Sole Proprietorship/Partnership If you start a
          business using your own money, you have formed a sole proprietorship.
          You own the entire business yourself. If three people pool their money
          together and start a business as a team, they have formed a
          partnership. The three people own the business, sharing the profit and
          decision-making. Corporations Any business that wants to sell shares
          of stock to a number of different people does so by turning itself
          into a corporation. The process of turning a business into a
          corporation is called incorporation. A corporation is different, and
          it is an interesting concept.
          </p>
        </div>
        <div className="newToTradingIllustration">
          <img
            src={SmartInvestment1}
            alt="Smart-Investment"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="newToTradingSubContainer row">
        <div className="newToTradingIllustration">
          <img
            src={VirtualPerson}
            alt="Smart-Investment"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>

        <div className="newToTradingText">
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
          A corporation is a "virtual person."
          That is, a corporation is registered with the government, it has a tax
          number, it can own property, it can go to court, and it can enter into
          contracts. By definition, a corporation has stock that can be bought
          and sold, and all of the owners of the corporation hold shares of
          stock in the corporation to represent their ownership. One incredibly
          interesting characteristic of this "virtual person" is that it has an
          indefinite and potentially infinite life span. There is a whole body
          of law that controls corporations. These laws are in place to protect
          shareholders and the public. These laws control a number of things
          about how a corporation operates and is organized. For example, every
          corporation has a board of directors. The shareholders in the company
          meet every year to vote on the people for the board. The board of
          directors makes the decisions for the company. The board of directors
          can be thought of as the brain of the virtual person. The owners of a
          corporation gain ownership by buying shares of stock in the
          corporation. The board of directors decide how many total shares there
          will be. For example, a company may have one million shares of stock.
          The company can either be privately held or publicly held. In a
          privately held company, the shares of stock are owned by a small
          number of people who probably all know one another. They buy and sell
          their shares amongst themselves. A publicly held company is owned by
          thousands of people who trade their shares on a public Stock Exchange.
          </p>
        </div>
      </div>

      <div className="newToTradingSubContainer row">
        <div className="newToTradingText">
          <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
          A corporation is an easy way to gather large quantities of investment
          capital. When a corporation first sells stock to the public, it does
          so in an IPO (Initial Public Offering). The company might sell one
          million shares of stock at Rs. 20 a share to raise Rs. 20 million very
          quickly. The company then invests the 20 million rupees in equipment
          and employees. The investors who bought the stock hope that with the
          equipment and employees, the company will make a profit and pay a
          dividend. Stock Exchanges in Pakistan There are three Stock Exchanges
          in Pakistan: Pakistan Stock Exchange; formed in 1947 Lahore Stock
          Exchange; formed in 1971 Islamabad Stock Exchange; formed in 1989 Out
          of all the three Exchanges, the Pakistan Stock Exchange is the
          premiere Stock Exchange of the country, with over 644 listed
          companies. It was established soon after the creation of Pakistan.
          When people talk about investing, they think of putting money into a
          company stock and holding it for a long time until they realize a
          significant gain. From this view, put simply, investing is to "buy and
          hold." In reality, people also use the term "invest" to describe
          mid-term and long-term stock acquisition. Mid and long-term investors
          will study stock fundamentals such as a company's quarterly earnings
          report, a company's relative strength in its industry sector, new
          product lines, technological innovation, or new management teams or
          strategies.
          </p>
        </div>
        <div className="newToTradingIllustration">
          <img
            src={Corporation}
            alt="Smart-Investment"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="newToTradingSubContainer row">
        <div className="newToTradingIllustration">
          <img
            src={SmartInvestment2}
            alt="Smart-Investment"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
        <div className="newToTradingText">
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
          They also look at stock charts and use basic technical
          analysis combined with overall market conditions to determine an entry
          point. Then, having done all this, they may sit back without worrying
          too much about short-term market fluctuation.In another form of
          trading, short-term traders attempt to buy low and sell high, not
          focusing as much on company fundamentals as long-term investors tend
          to do. Short-term traders may seem to care very little about
          conventional indicators. What they do care about is market volatility,
          the rising and falling of stock values, for the more ups and downs a
          stock has, the more money they believe they can make, getting in and
          out fast to take a quick profit. Investment Portfolio An investment
          portfolio is an investor's collection of investments. A portfolio is a
          list of the total number of investments an individual investor holds.
          A diversified portfolio contains assets from a number of different
          sectors. Every investor should know that there is a tradeoff between
          risk and reward: To obtain greater expected returns on investments,
          one must be willing to take on greater risk Portfolio Management
          Portfolio management is all about the art and science of making
          decisions about an investment mix and policy, matching investments to
          objectives, asset allocation for individuals and institutions, and
          balancing risk vs. performance.
          </p>
        </div>
      </div>

      <div className="newToTradingSubContainer row">
        <div className="newToTradingText">
          <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
          Risk Management The main difference
          between an amateur and an experienced trader is that the latter always
          tries to understand and control portfolio risks. Before entering into
          any trade, good traders first think about how much risk to take and
          how much risk exposure comes with a particular trade selection. Only
          then do they allow themselves to think about how much profit they
          stand to make. Smart investors always cut down their position and
          exposure if they determine that a portfolio carries too much risk.
          They calculate this all-important estimation by employing Risk
          Management defined as that set of methods and procedures taken to
          estimate, and control risk for the purpose of achieving optimal
          investment results. Know your overall risk tolerance before building
          up the portfolio. Determine your overall loss level. Usually your
          portfolio should not lose more than 10% of your capital. Diversify
          your investment in at least three or more different stocks. Actively
          manage the risk of every individual trade. Know your overall risk and
          where the risk comes from. Act quickly when you see your risk limits
          exceeded. Close out the entire portfolio if it loses to your overall
          stop-loss level.
          </p>
        </div>
        <div className="newToTradingIllustration">
          <img
            src={RiskManagement}
            alt="Smart-Investment"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="newToTradingSubContainer row">
        <div className="newToTradingIllustration">
          <img
            src={SuccessfulInvestor}
            alt="Smart-Investment"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
        <div className="newToTradingText">
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
          How to be a Successful Investor One successful
          investor who made a lot of money defined stock trading as a
          challenging game of strategy and discipline. The stock market is
          vastly complex and dynamic, so you need to exercise strict discipline,
          clear judgment, do your homework, and set firm goals and limits.
          Sometimes the most important work you can do is exercising patience,
          confidence, and discipline. You need to stay calm, keeping your mind
          clear and focused. You can't blindly bet that the stock price will go
          up or go down. You need to be well informed and make buy or sell
          decisions based on facts and logic. In investing, intuition also plays
          an important role. Good intuition comes from experience and sound
          judgment. When you start making money, you cannot think of yourself as
          a winner yet because if you lose focus and become greedy, you can lose
          your money in an instant. More importantly, if you happen to lose
          money, you cannot let yourself conclude that a single loss makes you a
          loser. Losing money can be very upsetting, but you need to be
          consistent and not quit the game easily. Learn to use a loss as a
          lesson, just as professional traders do, and determine why you lost.
          In this way, you maximize your chances of becoming a better investor.
          Talk with your friends and listen closely to trading tips, but in the
          end, you have to make your own judgments. Believe in yourself. If your
          next pick ends up being wrong, that may mean you have not yet done
          sufficient homework on that stock.
          </p>
        </div>
      </div>

      <div className="newToTradingSubContainer row">
        <div className="newToTradingText">
          <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
          Independent Research Conducting,
          research is the most important thing to do before any trade. By doing
          your own research, you complete a definite set of steps that will
          guide you towards a successful outcome. First of all, set your goals:
          Do you want to trade long-term, mid-term or short-term? Once you have
          set your targets, stay with your plan. After you have identified your
          goal, you will need to concentrate on specific industry sectors. By
          diversifying in a couple of different sectors you avoid putting all
          your eggs into a single basket. Within each sector, choose stocks you
          want to invest in. Ask yourself questions such as, why do I want to
          buy this particular stock. Does it have leading-edge products or
          technologies that I believe are going to fly? Or does the stock follow
          technical patterns well? In other words, does the stock chart follow a
          model? Positive responses to these questions can help you feel
          comfortable in investing in that stock.
          </p>
        </div>
        <div className="newToTradingIllustration">
          <img
            src={Irc}
            alt="Smart-Investment"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="newToTradingSubContainer row">
        <div className="newToTradingIllustration">
          <img
            src={Diversification}
            alt="Smart-Investment"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
        <div className="newToTradingText">
          <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
          Diversification means creating an investment portfolio that contains
          different types of investments within each of the major classes. A
          diversified portfolio might include stock in several different
          companies or a number of stock mutual funds, government and corporate
          bonds. You might diversify a larger portfolio even further by
          including a range of investments from other asset classes, such as
          real estate. Reasons to Diversity There are two important reasons to
          diversify your investment portfolio: To take maximum advantage of
          market conditions To protect yourself against downturns Taking
          Advantage of Market Conditions Each of the traditional asset classes
          tends to produce its strongest returns under different market
          conditions than the other asset classes do. For example, stocks often
          shine when corporate earnings are strong and financial markets are
          expanding. If your investments are narrowly focused, for example, if
          you own stock in just one company or stock in three companies in the
          same industry or area of the economy, the value of your portfolio can
          drop sharply if that company or industry produces disappointing
          returns. But if you own stocks of different-sized companies in
          different parts of the economy, even if some investments go down in
          value, others may remain stable or go up. In any case, different types
          of stocks are not as likely to lose value at the same rate or at the
          same time. Finding the Right Balance Diversification is not just about
          increasing the sheer number of your investments. It is about striking
          a balance among various investments in your portfolio to reduce your
          exposure to risk and take advantage of the full range of opportunities
          in the market. First, you need to analyze what you already own before
          you make another investment. Then you can identify the categories that
          you need to build up. For example, if all of your stock investments
          are in large company stocks, it may be time to investigate some
          smaller company stocks, since they tend to perform differently and
          rise and fall in value at different times than larger company stocks.
          In this way, you can offset some of the risks that each investment
          carries on its own, while enjoying many of the advantages and benefits
          of each category of investment.
          </p>
        </div>
      </div>
    </div>
  );
}
