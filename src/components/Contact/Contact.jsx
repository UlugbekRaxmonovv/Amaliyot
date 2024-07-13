import React from 'react';
import './Contact.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLogoTelegram } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
const Contact = () => {
    return (
     <>
     <section id='contact'>
     <div className='container'>
        <div className="h1">   <h1>Contact us</h1></div>
          <div className="Contact_m">
          <div className="hammasi">
          <div className="Contact_row">
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display:'flex',
        flexDirection:'column'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  className="input_all"   id="outlined-basic" label="Name" variant="outlined" />
      <TextField  className="input_all" id="outlined-basic" label="Your Email" variant="outlined" />
      <TextField
      className="input"
          id="outlined-multiline-static"
          label="Briefly describe your project"
          multiline
          rows={4}
          defaultValue=""
        /></Box>
        <div className="btn_k">
        <Button  className="btn_k_rwo" variant="contained" disableElevation>
      Send
    </Button>
        </div>


   
            </div>
            <div className="Contact_row">
            <a href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor ">
                <div className="phon">
                <div className="phon_all">
                <HiOutlineLocationMarker />
                    </div>
                    <div className="phon_all">
              <h1>Ташкент,  Мирзо-Улугбекский район, 5-й пр. Курган, 32  адрес</h1>
                    </div>
                </div>

                </a>
                <div className="phon">
                <div className="phon_all">
            
                <FiPhone />
                    </div>
                    <div className="phon_all">
                        <h1><a href="tel:+998 33 66 00 999" className=""> +998 33 66 00 999</a></h1>
                    </div>
                </div>

                <a href="mailto:azizbek.b@udevs.io ">
                <div className="phon">
                <div className="phon_all">
                <CgMail />
                    </div>
                    <div className="phon_all">
              <h1>azizbek.b@udevs.io</h1>
                    </div>
                </div>
                </a>

                <div className="phon">
                <div className="phon_all">
                <BiLogoTelegram />
                    </div>
                    <div className="phon_all">
                        <h1><a href="https://t.me/azizbekbakhodirov" className=""> t.me/azizbekbakhodirov</a></h1>
                    </div>
                </div>

                 <div className="gmail">
                    <div className="gmail_all">
                    <FaYoutube />
                    </div>
                    <div className="gmail_all">
                    <IoLogoInstagram />
                    </div>
                    <div className="gmail_alls">
                    <FaFacebookSquare />
                    </div>
                    <div className="gmail_alls">
                    <FaTwitter />
                    </div>
                 </div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11992.72885232603!2d69.20430054999999!3d41.28313865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1720793633991!5m2!1sru!2s" allowFullScreen="" loading="lazy"  referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          </div>
        </div>
     </section>
     </>
    );
}

export default Contact;
