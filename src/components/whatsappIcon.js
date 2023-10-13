import React from 'react';
import './whatsappIcon.css';
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappIcon(){
    return(
        <div className='whatsapp_float'>
            <a href="https://wa.me/+923452003363" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp></FaWhatsapp>
            </a>
        </div>
    )
}