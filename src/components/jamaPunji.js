import React from "react";

import "./jamaPunji.css";
import complain_img from "./images/complaint secp.png";
import jamaPunji_logo from "./images/jamapunji-logo.png";
import cgp_button from "./images/Button.jpg";
import banner from "./images/GATEWAY BANNER.jpg"
import secp from "./images/SECP_Logo.jpg"

export default function JamaPunji() {
  return (
    <div className="jamaPunji">
      <div className="jamaPunji_subContainer row">
        <div className="jamaPunji_complain_img">
          <a href="https://www.secp.gov.pk/" target="_blank"><img className="complain_img" src={complain_img} alt="complain-img" draggable="false"/></a>
        </div>

        <div className="jamapunji_logo">
          <a href="https://jamapunji.pk/" target="_blank"><img src={jamaPunji_logo} alt="jamapunji-logo" draggable="false"/></a>
        </div>

        <div className="cgp_button">
          <a href="https://cgp.cdcaccess.com.pk/" target="_blank"><img src={cgp_button} alt="cgp" draggable="false"/></a>
        </div>
      </div>

      <div className="cgp_banner row">
        <div className="cgp_banner_img">
          <a href="https://sdms.secp.gov.pk/" target="_blank"><img className="banner_img" src={secp} alt="cgp-banner-img" draggable="false"/></a>
          <p>SECP Disclaimer: In case your complaint has not been properly redressed by us, you may lodge complaint with the Securities and Exchange Commission of Pakistan(the "SECP"). However, please note that SECP will entertain only those complaints which were at first directly requested to be redressed by the company and the company has failed to redress the same. Further, the complaints that are not relevant to SECP's regulatory domain / competence shall not be entertained by the SECP.</p>
        </div>
      </div>
    </div>
  );
}
