import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else handleShow(false);
        });
        return () => {
          window.removeEventListener("scroll");
        };
      }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
               className="nav_logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/0/08/20190205011501%21Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png"
               alt="netflix_logo"
            />

            <img
               className="nav_avatar"
               src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
               alt="netflix_avatar"
            />
            
        </div>
    )
}

export default Nav
