import React, { useEffect } from "react";
import './accountDetails.css';

export default function AccountDetails(){

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className="accountdetailsmain" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000">
            <div className="accountdetails">
                <div className="accountdetailsunder">
                    <div className="accountdetailsheading">
                        <h1>ACCOUNT OPENING</h1>
                        <h3>DOCUMENT REQUIREMENTS</h3>
                    </div>
                    <div className="accountdetailsundertext">
                        <div className="accountdetailsfirst">
                            <div className="accountdetailstext">
                                <p>CNIC</p>
                                <p>Nominee CNIC</p>
                                <p>Registered Mobile Number</p>
                                <p>IBAN Number Bank Account (cheque picture)</p>
                                <p>Mother Maiden Name</p>
                            </div>
                        </div>
                        <div className="accountdetailssecond">
                            <div className="accountdetailstext">
                                <p>Email</p>
                                <p>Source of Income / Salary Slip / Business Proof</p>
                                <p>Picture of Signature</p>
                                <p>Zakat Declaration</p>
                                <p>Summary Page of Tax Return</p>
                            </div>
                        </div>
                    </div>
                    <p style={{color: "white"}}>* File uploaded should not be more than 400kb. Make sure to upload the files in jpeg or png.</p>
                    <div className="accountdetailsbutton">
                        <a href="https://aof.eclear.com.pk/StocXinvest" target={"_blank"}>Proceed to Open Digital Account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}