import React, {useEffect} from "react";
import { glossaryData } from "./data";
import "./glossary.css";

export default function GlossaryContentPage({glossaryKey}) {
  return (
    <div>
      {glossaryData[glossaryKey]?.map(({ heading, description }) => {
        return (
          <div className="glossaryText">
            <h5 data-aos="fade-left" data-aos-delay="0" data-aos-duration="1000">{heading}</h5>
            <p data-aos="fade-left" data-aos-delay="0" data-aos-duration="1000">{description}</p>
          </div>
        );
      })}
    </div>
  )
}
