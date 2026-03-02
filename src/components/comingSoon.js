import React, { useEffect } from 'react';
import "./comingSoon.css";

const ComingSoonPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div
        style={{
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontSize: '30px',
            paddingRight: '50px',
            paddingLeft: '50px',
        }}
        >
            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column"}} data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000">
                <h1 style={{fontSize: "40px", color: "#a0ff00"}} className='comingsoonhead'>Coming Soon</h1>
                <p style={{textAlign: "center"}} className='comingsoontext'>We're working on something awesome. Stay tuned!</p>
            </div>
        </div>
    );
};

export default ComingSoonPage;