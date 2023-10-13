import React from "react";

import "./jamaPunji.css";
import complain_img from "./images/complaint secp.png";
import jamaPunji_logo from "./images/jamapunji-logo.png";

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
      </div>
    </div>
  );
}
