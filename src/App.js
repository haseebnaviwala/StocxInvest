import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Process from "./components/process";
import Ticker from "./components/ticker";
import ImageSlider from "./components/imageSlider";
import TradingSteps from "./components/tradingSteps";
import Mission from "./components/missionStatement";
import AboutUs from "./components/aboutUs";
import AccountDetails from "./components/accountDetails";
import NewToTrading from "./components/newToTrading";
import InvestorGuide from "./components/investorGuide";
import WhatsappIcon from "./components/whatsappIcon";
import SidebarContact from "./components/sidebarContact";
import ContactDetailsIcon from "./components/contactDetailsIcon";
import SiteMap from "./components/siteMap";
import Glossary from "./components/glossary";
import ManageFunds from "./components/manageFunds";
import ComingSoonPage from "./components/comingSoon";
import Management from "./components/managements";
import Complaint from "./components/complaint";
import JamaPunji from "./components/jamaPunji";

function App() {
  useEffect(() => {
    function handleContextMenu(e) {
      e.preventDefault();
    }

    const rootElement = document.getElementById("stocxmain");
    rootElement.addEventListener("contextmenu", handleContextMenu);

    return () => {
      rootElement.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      style={{
        color: isToggled == true ? "white" : "black",
        background: isToggled == true ? "black" : "white",
      }}
      className="stocxmain"
      id="stocxmain"
    >
      <div className="colorchange">
        <div className="toggle-switch">
          <label className="togleLabel">
            <input
              type="checkbox"
              className={`toggle-button ${
                isToggled ? "active" : ""
              } toggleInput`}
              onClick={handleToggle}
            ></input>
            <span className="slider"></span>
          </label>
        </div>
      </div>
      <Header></Header>
      <WhatsappIcon></WhatsappIcon>
      <ContactDetailsIcon></ContactDetailsIcon>
      <SidebarContact></SidebarContact>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="homepage">
              <ImageSlider></ImageSlider>
              <Ticker></Ticker>
              <Process></Process>
              <TradingSteps></TradingSteps>
              <JamaPunji></JamaPunji>
            </div>
          }
        ></Route>
        <Route
          path="/aboutus"
          element={
            <div>
              <AboutUs></AboutUs>
            </div>
          }
        ></Route>
        <Route
          path="/mission"
          element={
            <div>
              <Mission></Mission>
            </div>
          }
        ></Route>
        <Route
          path="/accountdetails"
          element={
            <div>
              <AccountDetails></AccountDetails>
            </div>
          }
        ></Route>
        <Route
          path="/newtotrading"
          element={
            <div>
              <NewToTrading></NewToTrading>
            </div>
          }
        ></Route>
        <Route
          path="/investorguide"
          element={
            <div>
              <InvestorGuide></InvestorGuide>
            </div>
          }
        ></Route>
        <Route
          path="/sitemap"
          element={
            <div>
              <SiteMap></SiteMap>
            </div>
          }
        ></Route>
        <Route
          path="/glossary"
          element={
            <div>
              <Glossary></Glossary>
            </div>
          }
        ></Route>
        <Route
          path="/managefunds"
          element={
            <div>
              <ManageFunds></ManageFunds>
            </div>
          }
        ></Route>
        <Route
          path="/faqs"
          element={
            <div>
              <ComingSoonPage></ComingSoonPage>
            </div>
          }
        ></Route>
        <Route
          path="/roshandigitalaccount"
          element={
            <div>
              <ComingSoonPage></ComingSoonPage>
            </div>
          }
        ></Route>
        <Route
          path="/forms"
          element={
            <div>
              <ComingSoonPage></ComingSoonPage>
            </div>
          }
        ></Route>
        <Route
          path="/management"
          element={
            <div>
              <Management></Management>
            </div>
          }
        ></Route>
        <Route
          path="/complaint"
          element={
            <div>
              <Complaint></Complaint>
            </div>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
    // </BrowserRouter>
  );
}

export default App;
