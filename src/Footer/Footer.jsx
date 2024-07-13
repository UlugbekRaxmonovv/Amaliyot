import React from 'react';
import './Footer.scss'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import logo  from '../img/logo.svg'
import Image from 'next/image';

const Footer = () => {
    return (
     <footer>
       <div className="f_w container">
      <div className="img">
        <div className="img_all">
        <Image src={logo}  alt='rasm'/>
        </div>
      </div>
       <div className="footir_row">
            <div className="footir_all">
              <ul>
                <h1>About us</h1>
                <li><a href="#">Direction</a></li>
                <li><a href="#">Command</a></li>
                <li><a href="#">Tools</a></li>
                <li><a href="#">Clients</a></li>
              </ul>
            </div>
            <div className="footir_all">
              <ul>
                <h1>Services</h1>
                <li><a href="#">Development of mobile applications</a></li>
                <li><a href="#">Development and implementation ERP systems</a></li>
                <li><a href="#">User interface, User experience design</a></li>
                <li><a href="#">IT consulting</a></li>
                <li><a href="#">Optimization IT consulting infrastructure</a></li>
              </ul>
            </div>
            <div className="footir_all">
              <ul>
                <h1>Portfolio</h1>
                <li><a href="#">Delever</a></li>
                <li><a href="#">Sms.uz</a></li>
                <li><a href="#">Goodzone</a></li>
                <li><a href="#">Iman</a></li>
              </ul>
            </div>
       
        </div>
        <div className="portfol">
            <p>© 2024 Udevs. All rights reserved</p>
            <div className="por_list">
            <div className="portfoli_all">
<FaTwitter/>
            </div>
            <div className="portfoli_all">
<FaInstagram/>
            </div>
            <div className="portfoli_all">
<FaYoutube/>
            </div>
            </div>
        </div>
       </div>
     </footer>
    );
}

export default Footer;
