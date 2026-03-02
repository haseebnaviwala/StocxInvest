import React, { useEffect, useState } from "react";
import "./header.css";
import stockx from "./images/stockx.png";
import { MdMenu } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import kycpdf from "./images/StocXinvest KYC, CDD Policy.pdf";
import Mod from "./modal";
import { modalData } from "./modalData";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [getModalData, setGetModalData] = useState();

  useEffect(() => {
    let headermain = document.querySelector(".header");

    if (isNavbarOpen == true) {
      headermain.classList.toggle("active");
      setIsNavbarOpen(!isNavbarOpen);
    }
  });

  const gettingModalData = (key) => {
    setShowModal(true);
    const data = modalData[key]?.map((item) => {
      return setGetModalData(item);
    });
  };

  return (
    <div className="header" id="header">
      <div className="headermain">
        <div className="headerlogo">
          <NavLink to={"/"} className="headerlogolink">
            <img src={stockx} alt="logo" />
          </NavLink>
        </div>
        <div className="headercontent">
          <div className="headerlinks">
            <ul className="mainbar">
              <li className="dropdown">
                <a>
                  Why US{" "}
                  <RiArrowDropDownLine
                    style={{ fontSize: "25px" }}
                    className="dropdownicon"
                  ></RiArrowDropDownLine>
                </a>
                <div className="underdropdown ud1">
                  <ul>
                    <NavLink to={"/aboutus"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        About US
                      </li>
                    </NavLink>
                    <NavLink to={"/management"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        Board of Directors / Management
                      </li>
                    </NavLink>
                    <NavLink to={"/mission"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        Mission / Vision
                      </li>
                    </NavLink>
                    <NavLink to={""}>
                      <li
                        onClick={() => gettingModalData("associated_companies")}
                      >
                        Associated Companies
                      </li>
                    </NavLink>
                    <NavLink to={""}>
                      <li onClick={() => gettingModalData("advisors")}>
                        Auditors / Legal Advisors
                      </li>
                    </NavLink>
                    <NavLink to={""}>
                      <li onClick={() => gettingModalData("services")}>
                        Services
                      </li>
                    </NavLink>
                    <NavLink to={""}>
                      <li onClick={() => gettingModalData("agents")}>
                        Registered Agents
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <a>
                  Education{" "}
                  <RiArrowDropDownLine
                    style={{ fontSize: "25px" }}
                    className="dropdownicon"
                  ></RiArrowDropDownLine>
                </a>
                <div className="underdropdown ud2">
                  <ul>
                    <NavLink to={"/newtotrading"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        New to Trading
                      </li>
                    </NavLink>
                    <NavLink to={"/investorguide"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        Investor Guide
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("disclaimer")}>
                        Investor Guide By SECP
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("psx_rule_book")}>
                        PSX Rule Book
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("common_terms")}>
                        Common Terms of Share Market
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("flowchart")}>
                        Online Order Execution Flow
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("order_settlement_flow")}>
                        Order Settlement Flow
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("arbitration")}>
                        Arbitration Procedure
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("risk_disclosure")}>
                        Risk Disclosure Document
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("procedure_cancel_orders")}>
                        Procedure To Cancel Pending Orders
                      </li>
                    </NavLink>
                    <NavLink to={"/glossary"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        Glossary
                      </li>
                    </NavLink>
                    <NavLink to={"/faqs"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        FAQs
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <a>
                  Open An Account{" "}
                  <RiArrowDropDownLine
                    style={{ fontSize: "25px" }}
                    className="dropdownicon"
                  ></RiArrowDropDownLine>
                </a>
                <div className="underdropdown ud3">
                  <ul>
                    <NavLink to={"/roshandigitalaccount"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        Roshan Digital Account (RDA)
                      </li>
                    </NavLink>
                    <NavLink to={"/accountdetails"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        Open Digital Account
                      </li>
                    </NavLink>
                    <NavLink to={"/managefunds"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        Manage Funds
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <a>
                  Downloads{" "}
                  <RiArrowDropDownLine
                    style={{ fontSize: "25px" }}
                    className="dropdownicon"
                  ></RiArrowDropDownLine>
                </a>
                <div className="underdropdown ud4">
                  <ul>
                    <NavLink to={"/forms"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        Forms
                      </li>
                    </NavLink>
                    <a href="https://oms1.eclear.com.pk/TradeCastv423/launch.jnlp" target={"_blank"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        Software
                      </li>
                    </a>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("user_manual")}>
                        Trade Cast User Manual
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <a>
                  Support{" "}
                  <RiArrowDropDownLine
                    style={{ fontSize: "25px" }}
                    className="dropdownicon"
                  ></RiArrowDropDownLine>
                </a>
                <div className="underdropdown ud5">
                  <ul>
                    <NavLink to="/complaint">
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        Investor Complaint
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("annual")}>
                        Annual / Half yearly / Quarterly Financial Statements
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("statutory")}>
                        Statutory Auditor Details
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("ncb")}>
                        NCB Auditor Details
                      </li>
                    </NavLink>
                    <a href={kycpdf} target="_blank">
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        CDD / KYC Policy
                      </li>
                    </a>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("investors")}>
                        Pending Investor Complaints
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("penal_action")}>
                        Details of Penal Action
                      </li>
                    </NavLink>
                    <a
                      href="https://sdms.secp.gov.pk/"
                      target={"_blank"}
                    >
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        SECP Complaint
                      </li>
                    </a>
                    <a href="https://cms.psx.com.pk/login" target={"_blank"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        PSX Complaint
                      </li>
                    </a>
                    <a href="https://www.nccpl.com.pk/uis" target={"_blank"}>
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        UIS Services of NCCPL
                      </li>
                    </a>
                    <a
                      href="https://csp.cdcaccess.com.pk/#/login"
                      target={"_blank"}
                    >
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        EServices by CDC
                      </li>
                    </a>
                    <a
                      href="http://cdcpakistan.com/about-us/cdc-access/"
                      target={"_blank"}
                    >
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        CDC Access Details
                      </li>
                    </a>
                    <a
                      href="https://cdcpakistan.com/about-us/cdc-access/sms/"
                      target={"_blank"}
                    >
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        CDC Sms Services Details
                      </li>
                    </a>
                    <a
                      href="https://cdcpakistan.com/about-us/cdc-access/cdc-access-ivr/"
                      target={"_blank"}
                    >
                      <li onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        CDC IVR Services Details
                      </li>
                    </a>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("sla")}>
                        Service Level Agreement
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("terms_and_conditions")}>
                        Online Terms And Conditions
                      </li>
                    </NavLink>
                    <NavLink to="">
                      <li onClick={() => gettingModalData("product_compliance")}>
                        Product Compliance
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="headerbutton">
          <div className="headercreateaccount">
            <NavLink to={"/accountdetails"}>OPEN AN ACCOUNT</NavLink>
          </div>
        </div>
        <div
          className="mobilemenu"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <MdMenu style={{ color: "white", fontSize: "30px" }}></MdMenu>
        </div>
      </div>
      {showModal ? (<Mod
        show={showModal}
        onHide={() => setShowModal(false)}
        data={getModalData}
      />) : ""}
    </div>
  );
}
