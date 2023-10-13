import React, { useEffect, useState } from "react";
import './sidebarContact.css';
import { send } from 'emailjs-com';
import { TbMessages } from 'react-icons/tb';

export default function SidebarContact(){
    const [parentHover1, setparentHover1] = useState(true);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");
    const [toSend, setToSend] = useState({
        cusnumber: '',
        toemail: '',
        clientname: '',
        selectedoption: '',
    });

    function submitform(){
        toSend.cusnumber = number;
        toSend.toemail = email;
        toSend.clientname = name;
        send(
            'service_xtfto62',
            'template_opr68tt',
            toSend,
            "nzz2efZg4m6W8d8QH",
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setnumber('');
            setemail('');
            setname('');
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    }

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }


    useEffect(() => {
        var sidebut = document.querySelector('.sidebar-form');
        var sideform = document.querySelector('.call-action');
        function openform(event) {
            sidebut.classList.toggle('show');
            event.preventDefault();
            event.stopImmediatePropagation();
        }
        sideform.addEventListener('click', openform, false);
    });

    return(
        <div className="sidebar-form" style={parentHover1 ? {opacity: "1"} : {opacity: "0"}}>
            <div className="call-action">
                <span><TbMessages style={{paddingRight: "10px", fontSize: "40px"}}></TbMessages>CONTACT US NOW</span>
            </div>
            <div className="form">
                <h3>YOUR QUERIES - OUR EFFORTS</h3>
                <form>
                    <input onChange={(e) => setname(e.target.value)} value={name} type="text" placeholder="Full Name" required></input>
                    <input onChange={(e) => setnumber(e.target.value)} value={number} type="text" placeholder="Phone Number" required></input>
                    <input onChange={(e) => setemail(e.target.value)} value={email} type="email" placeholder="Email Address" required></input>
                    <p onClick={submitform} style={{cursor: "pointer"}}>Submit</p>
                </form>
            </div>
	    </div>
    );
}