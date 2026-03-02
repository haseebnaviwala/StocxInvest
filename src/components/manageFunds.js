import React, { useEffect } from "react";
import "./manageFunds.css";
import FundDeposit from "./images/Fund Deposit.png";
import FundWithdrawal from "./images/Fund Withdrawal.png";
import FeeAndCommission from "./images/Fee & Comission.png";

export default function ManageFunds() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="manageFunds">
      <div className="manageFundsHeading">
        <h3 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
          Manage Funds
        </h3>
      </div>

      <div className="manageFundsSubContainer row">
        <div className="manageFundsHeading">
          <h4 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
            Fund Deposit
          </h4>
        </div>
        <div className="manageFundsText">
          <p
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Online Transfer: Transfer the funds online into any of the below mentioned accounts and share the screenshot at Info@stocXinvest.com.
            <br></br>
            Transfer through Cheque: You may deposit your funds in any of the below mentioned accounts and share the copy of the cheque and deposit slip at Info@stocXinvest.com.
            <br></br>
            Please note that all funds have to be transferred through the Account Holder's Bank Account only. Third Party payments are not acceptable as per prevailing rules and regulations.
          </p>
        </div>
        <div className="manageFundsIllustration">
          <img
            src={FundDeposit}
            alt="Fund-Withdrawal"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
        <div className="manageFundsTable">
          <table className="bankDetailsTable" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
            <tr>
              <th colSpan={5}>
                Bank Account Details - EClear Services Limited
              </th>
            </tr>
            <tr>
              <th>S. No.</th>
              <th>Bank Name</th>
              <th>Account Number</th>
              <th>IBAN</th>
              <th>SWIFT Code</th>
            </tr>

            <tr>
              <td>1</td>
              <td>Bank Al Habib Limited</td>
              <td>1012-0081-007510-01-5</td>
              <td>PK45BAHL1012008100751001</td>
              <td>BAHLPKKA</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Bank Al Habib Limited - Clients</td>
              <td>1012-0081-007526-01-3</td>
              <td>PK10BAHL1012008100752601</td>
              <td>BAHLPKKA</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Bank Al Habib Limited</td>
              <td>0031-0981-002174-01-5</td>
              <td>PK62BAHL0031098100217401</td>
              <td>BAHLPKKA</td>
            </tr>

            <tr>
              <td>4</td>
              <td>MCB Bank Limited</td>
              <td>1337416781002852</td>
              <td>PK12MUCB1337416781002852</td>
              <td>MUCBPKKA</td>
            </tr>

            <tr>
              <td>5</td>
              <td>MCB Bank Limited</td>
              <td>1337416781003277</td>
              <td>PK80MUCB1337416781003277</td>
              <td>MUCBPKKA</td>
            </tr>

            <tr>
              <td>6</td>
              <td>Meezan Bank Limited</td>
              <td>0105501341</td>
              <td>PK27MEZN0099090105501341</td>
              <td>MEZNPKKA</td>
            </tr>

            <tr>
              <td>7</td>
              <td>Bank Al-Falah</td>
              <td>0012-1007575094</td>
              <td>PK97ALFH0012001007575094</td>
              <td>ALFHPKKA</td>
            </tr>

            <tr>
              <td>8</td>
              <td>Dubai Islamic</td>
              <td>108-0786554001</td>
              <td>PK63DUIB0000000786554001</td>
              <td>DUIBPKKA</td>
            </tr>

            <tr>
              <td>9</td>
              <td>Habib Metropolitan Bank Limited</td>
              <td>01-18-20614-714-143162</td>
              <td>PK73MPBL0118217140143162</td>
              <td>MPBLPKKA</td>
            </tr>

            <tr>
              <td>10</td>
              <td>Habib Bank Limited</td>
              <td>8667900240101</td>
              <td>PK30HABB0008667900240101</td>
              <td>HABBPKKA</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="manageFundsSubContainer row">
        <div className="manageFundsHeading">
          <h4 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
            Withdraw Funds
          </h4>
        </div>
        <div className="manageFundsIllustration">
          <img
            src={FundWithdrawal}
            alt="Fund-Withdrawal"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      
        <div className="manageFundsText">
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            To withdraw funds from your Stocxinvest account, you can submit a request through Stocxinvest's online platform or by sending an email at info@stocXinvest.com. Your funds will be transferred to your registered bank account through the Online Funds Transfer Facility.
          </p>
        </div>
      </div>

      <div className="manageFundsSubContainer row">
        <div className="manageFundsHeading">
          <h4 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
            Fee & Commission
          </h4>
        </div>
        <div className="feeAndCommission">
          <table className="feeAndCommissionTable" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
            <tr>
              <th>Share Price</th>
              <th>Commission</th>
              <th>Roll Over</th>
            </tr>

            <tr>
              <td>Upto 19.99</td>
              <td>0.03</td>
              <td>0.01</td>
            </tr>

            <tr>
              <td>20.00 – 33.33</td>
              <td rowSpan={3}>Re. 0.03 – 0.15% of Share Value</td>
              <td>0.01</td>
            </tr>

            <tr>
              <td>33.34 and above</td>
              <td>0.03</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="manageFundsSubContainer row">
        <div className="manageFundsText">
          <ul>
            <li
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              All figures mentioned above are in Pak Rupees
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              The same commission rate will be applicable on Delivery as well as
              Day Trade transactions
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="1200"
              data-aos-duration="1000"
            >
              The Day Trade Commission will be charged on sell side ONLY.
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="1600"
              data-aos-duration="1000"
            >
              The Roll Over Charges are applicable on Margin Trading (Future,
              MTS & MFS)
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="2000"
              data-aos-duration="1000"
            >
              The Roll Over Commission to be charged daily on all outstanding
              positions.
            </li>
          </ul>
        </div>

        <div className="manageFundsIllustration">
          <img
            src={FeeAndCommission}
            alt="Fund-Withdrawal"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1000"
            draggable="false"
          />
        </div>
      </div>

      <div className="manageFundsSubContainer row">
        <div className="manageFundsHeading">
          <h4 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
            List Of Taxes And Other Charges
          </h4>
        </div>

        <div className="listOfTaxesText">
          <h4 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
            Taxes:
          </h4>
          <ul>
            <li
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Sind Sales Tax (SST): 13% of Brokerage Commission.
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              Capital Gain Tax(CGT Year 2021-2022):
            </li>
          </ul>
        </div>
      </div>

      <div className="manageFundsSubContainer row">
        <div className="listOfTaxes">
          <table className="listOfTaxesTable" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
            <tr>
              <th>Market</th>
              <th>Period</th>
              <th>Filer</th>
              <th>Non-Filer</th>
            </tr>

            <tr>
              <td>PSX</td>
              <td>Where the Security acquired before July 1, 2013</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>

            <tr>
              <td>PSX</td>
              <td>Where Security is acquired on or after July 1, 2013</td>
              <td>12.50%</td>
              <td>25.00%</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="manageFundsSubContainer row">
        <div className="manageFundsText manageFundsAccountBalance">
          <h4 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
            Minimum Account Balance Requirement:
          </h4>
          <ul>
            <li
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              A minimum of Rs 5,000/- has to be maintained at all times to keep
              the account active. It can be in the form of Cash, Shares or
              combination of both.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
