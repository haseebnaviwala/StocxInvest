import React, {useEffect} from 'react';
import './contactDetailsIcon.css';
import { FaTwitter } from 'react-icons/fa';
import { IoLogoFacebook,  IoLogoInstagram } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';

export default function ContactDetailsIcon(){

    useEffect(() => {
        let menuToggle = document.querySelector('.menuToggle');
        menuToggle.onclick = function(){
            menuToggle.classList.toggle('active')
        }
    });

    return(
        <div className="navigate">
            <div className="menuToggle">
                <BsThreeDots></BsThreeDots>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#"><IoLogoFacebook></IoLogoFacebook></a></li>
                    <li><a href="#"><IoLogoInstagram></IoLogoInstagram></a></li>
                    <li><a href="#"><FaTwitter></FaTwitter></a></li>
                </ul>
            </div>
        </div>
    )
}