import React, {useEffect} from "react";
import "./siteMap.css";
import { Link, NavLink } from "react-router-dom";

export default function SiteMap() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className="siteMap">
        <div className="siteMapHeading">
          <h3 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
            Sitemap
          </h3>
        </div>

        <div className="siteMapSubContainer row" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000">
          <div className="siteMapList-1">
            <ul>
              <li>
                <span className="siteMapListHeading">Why US</span>
                <ul className="siteMapSubList">
                  <li>
                    <Link className="siteMapLinks" to="/aboutus">
                      About US
                    </Link>
                  </li>
                  <li>
                    <Link className="siteMapLinks" to="/management">
                      Management
                    </Link>
                  </li>
                  <li>
                    <Link className="siteMapLinks" to="/mission">
                      Mission Statement
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="siteMapList-1">
            <ul>
              <li>
                <span className="siteMapListHeading">Education</span>
                <ul className="siteMapSubList">
                  <li>
                    <Link className="siteMapLinks" to="/newtotrading">
                      New To Trading
                    </Link>
                  </li>
                  <li>
                    <Link className="siteMapLinks" to="/investorguide">
                      Investor Guide
                    </Link>
                  </li>
                  <li>
                    <Link className="siteMapLinks" to="/glossary">
                      Glossary
                    </Link>
                  </li>
                  <li>
                    <Link className="siteMapLinks" to="/faqs">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="siteMapList-1">
            <ul>
              <li>
                <span className="siteMapListHeading">Open An Account</span>
                <ul className="siteMapSubList">
                  <li>
                    <Link className="siteMapLinks" to="/roshandigitalaccount">
                      Roshan Digital Account (RDA)
                    </Link>
                  </li>
                  <li>
                    <Link className="siteMapLinks" to="/accountdetails">
                      Open Digital Account
                    </Link>
                  </li>
                  <li>
                    <Link className="siteMapLinks" to="/managefunds">
                      Manage Funds
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="siteMapSubContainer secondContainer row" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000">
          <div className="siteMapList-2">
            <ul>
              <li>
                <span className="siteMapListHeading">Downloads</span>
                <ul className="siteMapSubList">
                  <li>
                    <Link className="siteMapLinks" to="/forms">
                      Forms
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="siteMapList-2">
            <ul>
              <li>
                <span className="siteMapListHeading">Support</span>
                <ul className="siteMapSubList">
                  <li>
                    <NavLink className="siteMapLinks" to={"/complaint"}>
                      Investor Complaint
                    </NavLink>
                  </li>
                  <li>
                    <a className="siteMapLinks" href="https://sdms.secp.gov.pk/~sdmsadmn/index.php?action=complaint" target={"_blank"}>
                      SECP Complaint
                    </a>
                  </li>
                  <li>
                    <a className="siteMapLinks" href="https://csir.psx.com.pk/" target={"_blank"}>
                      PSX Complaint
                    </a>
                  </li>
                  <li>
                    <a className="siteMapLinks" href="https://uis.nccpl.com.pk/" target={"_blank"}>
                      UIS Services of NCCPL
                    </a>
                  </li>
                  <li>
                    <a className="siteMapLinks" href="https://csp.cdcaccess.com.pk/#/login" target={"_blank"}>
                      EServices by CDC
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="siteMapList-2">
            <ul>
              <li>
                <span className="siteMapListHeading">Other Links</span>
                <ul className="siteMapSubList">
                  <li>
                    <a className="siteMapLinks" href="http://www.psx.com.pk/" target={"_blank"}>
                      PSX
                    </a>
                  </li>
                  <li>
                    <a className="siteMapLinks" href="https://www.secp.gov.pk/" target={"_blank"}>
                      SECP
                    </a>
                  </li>
                  <li>
                    <a className="siteMapLinks" href="http://www.mufap.com.pk/" target={"_blank"}>
                      MUFAP
                    </a>
                  </li>
                  <li>
                    <a className="siteMapLinks" href="http://www.nccpl.com.pk/" target={"_blank"}>
                      NCCPL
                    </a>
                  </li>
                  <li>
                    <a className="siteMapLinks" href="http://www.pmex.com.pk/" target={"_blank"}>
                      PMEX
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
