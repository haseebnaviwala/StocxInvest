import React, { useEffect, useState } from 'react';
import './complaint.css';
import Complaintsecp from "./images/complaint secp.png";
import { send } from 'emailjs-com';

export default function Complaint(){

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [parentHover1, setparentHover1] = useState(true);
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [feedback, setFeedback] = useState("");
    const [toSend, setToSend] = useState({
        cuscode: '',
        toemail: '',
        clientname: '',
        clientnumber: '',
        clientfeedback: '',
    });

    function submitform(){
        toSend.clientnumber = number;
        toSend.toemail = email;
        toSend.clientname = name;
        toSend.cuscode = code;
        toSend.clientfeedback = feedback;
        send(
            'service_xtfto62',
            'template_1d7l2zr',
            toSend,
            "nzz2efZg4m6W8d8QH",
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setNumber('');
            setEmail('');
            setName('');
            setCode('');
            setFeedback('');
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    }

    return(
        <div className='container-xs complaint'>

            <div className="complaintHeading col-xl-12 col-xs-12">
                <h3 data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">Investor Complaint</h3>
            </div>

            <div className='complaintformmain'>
                <div className="complaintform" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
                    <form>
                        <input type="text" onChange={(e) => setCode(e.target.value)} placeholder="Code" required></input>
                        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" required></input>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required></input>
                        <input type="number" onChange={(e) => setNumber(e.target.value)} placeholder="Mobile Number" required></input>
                        <textarea placeholder="Complaint/Feedback" onChange={(e) => setFeedback(e.target.value)} required rows={2}></textarea>
                        <p style={{cursor: "pointer"}} onClick={submitform} className='submitform'>Submit</p>
                    </form>
                    <p style={{paddingTop: "30px"}}>Please allow us upto 2 working days to answer your complaints. If you require an immediate reply then please call us at Tel: +923452003363. during our Business Hours.</p>
                </div>
            </div>

            <div className="complaintSubContainer row col-xs-12">
                <div className="complaintText col-xs-12">
                    <h4 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
                        Disclaimer:
                    </h4>
                    <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    In case your complaint has not been properly redressed by us, you may lodge your complaint with the Securities and Exchange Commission of Pakistan ("SECP"). However, please keep in mind that SECP will only entertain those complaints which were at first directly requested to be redressed by the Company and the company has failed to redress the same. Further, complaints irrelevant to SECP's regulatory domain/competence shall not be entertained.
                    </p>
                </div>
                <div className="complaintIllustration col-sm-12">
                    <a href="https://www.secp.gov.pk/" target="_blank"><img src={Complaintsecp} alt="secp-complaint" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" draggable="false"/></a>
                </div>
            </div>

        </div>
    )
}