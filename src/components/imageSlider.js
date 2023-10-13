import React, { useEffect, useState } from "react";
import "./imageSlider.css";
import Banner1 from "./videos/banner 1_1.mp4";
import Banner2 from "./videos/banner 1_2.mp4";
import Banner3 from "./videos/banner 2_1.mp4";
import Banner4 from "./videos/banner 2_2.mp4";
import Banner5 from "./videos/banner 2_3.mp4";

import MobBanner1 from "./videos/banner 1_1 mobile.mp4";
import MobBanner2 from "./videos/banner 1_2 mobile.mp4";
import MobBanner3 from "./videos/banner 2_1 mobile.mp4";
import MobBanner4 from "./videos/banner 2_2 mobile.mp4";
import MobBanner5 from "./videos/banner 2_3 mobile.mp4";

export default function ImageSlider() {

  const[time, setTime] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  let count = 0;
  useEffect(() => {
    setInterval(() => {
      console.log(count);
      if(count < 4){
        count++;
        setTime(count);
      }
      else{
        count = 0;
        setTime(count);
      }
    }, 8000);
  }, []);

  return (
    <div className="videoblock">
      {time === 0 ? (<video
          className="videoweb"
          src={Banner1}
          alt="First slide"
          autoPlay
          loop
          muted
          disablepictureinpicture
          disableremoteplayback
      />) : ""}
      {time === 1 ? (<video
          className="videoweb"
          src={Banner2}
          alt="First slide"
          autoPlay
          loop
          muted
          disablepictureinpicture
          disableremoteplayback
      />) : ""}
      {time === 2 ? (<video
          className="videoweb"
          src={Banner3}
          alt="First slide"
          autoPlay
          loop
          muted
          disablepictureinpicture
          disableremoteplayback
      />) : ""}
      {time === 3 ? (<video
          className="videoweb"
          src={Banner4}
          alt="First slide"
          autoPlay
          loop
          muted
          disablepictureinpicture
          disableremoteplayback
      />) : ""}
      {time === 4 ? (<video
          className="videoweb"
          src={Banner5}
          alt="First slide"
          autoPlay
          loop
          muted
          disablepictureinpicture
          disableremoteplayback
      />) : ""}


      {time === 0 ? (<video
          className="videomob"
          src={MobBanner1}
          alt="First slide"
          autoPlay
          loop
          muted
          disablepictureinpicture
          disableremoteplayback
      />) : ""}
      {time === 1 ? (<video
          className="videomob"
          src={MobBanner2}
          alt="First slide"
          autoPlay
          loop
          muted
          disablepictureinpicture
          disableremoteplayback
      />) : ""}
      {time === 2 ? (<video
          className="videomob"
          src={MobBanner3}
          alt="First slide"
          autoPlay
          loop
          muted
          disablepictureinpicture
          disableremoteplayback
      />) : ""}
      {time === 3 ? (<video
          className="videomob"
          src={MobBanner4}
          alt="First slide"
          autoPlay
          loop
          muted
          disablepictureinpicture
          disableremoteplayback
      />) : ""}
      {time === 4 ? (<video
          className="videomob"
          src={MobBanner5}
          alt="First slide"
          autoPlay
          loop
          muted
          disablepictureinpicture
          disableremoteplayback
      />) : ""}
      <div style={{color: "black", position: "absolute", zIndex: 1, height: "80vh", top: "0px", width: "100%"}}></div>
    </div>
  );
}
