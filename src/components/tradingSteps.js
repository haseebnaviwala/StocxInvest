import React from "react";
import "./tradingSteps.css";

export default function TradingSteps() {
  return (
    <div className="mainContainer container-xs">
      <fieldset className="sideBorder">
        <legend className="heading">Simple steps to start trade.</legend>
        <div className="background">
          <div className="wrapper option-1 option-1-1">
            <ol className="c-stepper">
              <li className="c-stepper__item">
                <h3 className="c-stepper__title">1</h3>
                <p className="c-stepper__desc">Register account</p>
              </li>
              <li className="c-stepper__item ">
                <h3 className="c-stepper__title">2</h3>
                <p className="c-stepper__desc">Fund your account</p>
              </li>
              <li className="c-stepper__item">
                <h3 className="c-stepper__title">3</h3>
                <p className="c-stepper__desc">Start your trade</p>
              </li>
            </ol>
          </div>
        </div>
      </fieldset>
    </div>
  );
}