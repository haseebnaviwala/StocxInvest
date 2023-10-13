import React from "react";
import "./footer.css";
import stockx from "./images/stockx.png";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer(){

    return(
        <div className="footer" id="footer">
            <div className="footerupper">
                <div className="footerlogo">
                    <NavLink to={"/"} className="footerlogolink"><img src={stockx} alt="logo"/></NavLink>
                </div>
                <div className="extra"></div>
                <div className="footericonsbox">
                    <a href="#"><p><FaFacebookF className="addressicon"></FaFacebookF></p></a>
                    <a href="#"><p><FaTwitter className="addressicon"></FaTwitter></p></a>
                    <a href="#"><p><FaLinkedinIn className="addressicon"></FaLinkedinIn></p></a>
                    <a href="#"><p><MdLocalPhone className="addressicon"></MdLocalPhone></p></a>
                    <a href="#"><p><MdEmail className="addressicon"></MdEmail></p></a>
                </div>
                <div className="extra"></div>
            </div>
            <div className="footercontent">
                <div className="footerproducts">
                    <h1>WHY US</h1>
                    <ul>
                        <NavLink to={"/aboutus"}><li>About Us</li></NavLink>
                        <NavLink to={"/management"}><li>Board of Directors / Management</li></NavLink>
                        <NavLink to={"/mission"}><li>Mission / Vision</li></NavLink>
                    </ul>
                </div>
                <div className="footerproducts">
                    <h1>EDUCATION</h1>
                    <ul>
                        <NavLink to={"/newtotrading"}><li>New to Trading</li></NavLink>
                        <NavLink to={"/investorguide"}><li>Investor Guide</li></NavLink>
                        <NavLink to={"/glossary"}><li>Glossary</li></NavLink>
                        <NavLink to={"/faqs"}><li>FAQs</li></NavLink>
                    </ul>
                </div>
                <div className="footerproducts">
                    <h1>OPEN AN ACCOUNT</h1>
                    <ul>
                        <NavLink to={"/roshandigitalaccount"}><li>Roshan Digital Account (RDA)</li></NavLink>
                        <NavLink to={"/accountdetails"}><li>Open Digital Account</li></NavLink>
                        <NavLink to={"/managefunds"}><li>Manage Funds</li></NavLink>
                    </ul>
                </div>
                <div className="footerproducts">
                    <h1>OTHER LINKS</h1>
                    <ul>
                        <a href="http://www.psx.com.pk/" target={"_blank"}><li>PSX</li></a>
                        <a href="https://www.secp.gov.pk/" target={"_blank"}><li>SECP</li></a>
                        <a href="http://www.mufap.com.pk/" target={"_blank"}><li>MUFAP</li></a>
                        <a href="http://www.nccpl.com.pk/" target={"_blank"}><li>NCCPL</li></a>
                        <a href="http://www.pmex.com.pk/" target={"_blank"}><li>PMEX</li></a>
                        <NavLink to={"/sitemap"}><li>Sitemap</li></NavLink>
                    </ul>
                </div>
                <div className="footerproducts">
                    <h1>CONTACT DETAILS</h1>
                    <ul>
                        <li><span style={{fontWeight: "bold"}}>Contact Number:</span><br></br>+92 316 2288686</li>
                        <li><span style={{fontWeight: "bold"}}>Email Address:</span><br></br>info@stocXinvest.com</li>    
                        <li><span style={{fontWeight: "bold"}}>Office Address:</span><br></br>Office No 111, First Floor, Sumya Business Avenue, Muhammad Ali Society, Karachi</li>
                        <li><span style={{fontWeight: "bold"}}>National Tax Number:</span><br></br>9160868-2</li>
                        <li><span style={{fontWeight: "bold"}}>Sindh Service Tax Number:</span><br></br>S9160868-2</li>
                    </ul>
                </div>
            </div>
            <div className="footerbelow">
                <div className="footertextbox">
                    <p>&copy; Copyright 2023 Stock X Invest. All rights Reserved | Powered by <a href="https://www.miteminds.com/" target={"_blank"} style={{textDecoration: "none", color: "#B7B7B7"}}>Mite Minds</a></p>
                </div>
            </div>
        </div>
    );
}