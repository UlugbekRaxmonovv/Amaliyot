"use client";
import React from 'react';
import './Contact.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLogoTelegram } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { FaTwitter, FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { useFormik } from 'formik';
import * as Yup from 'yup';
const Bot_Token = "6409705996:AAH7HRsbbymTuGEK2h8joN7nQX0Eypu7MRg"
const Chat_ID = "-1002098227822"
const User_ID = "5125371890"

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Fill in the field'),
  email: Yup.string()
    .email('Fill in the field')
   
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      comments: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let text = "Buyurtma %0A%0A"
      text +=`Ismi:${values.name}%0A`
      text +=`Email:${values.email}%0A`
      text +=`Text:${values.comments}%0A`
      let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_ID}&text=${text}`
  
      let api = new XMLHttpRequest()
      api.open("GET", url, true)
      api.send()
      formik.resetForm()
    }
    
    
  });


  return (
    <>
      <section id='contact'>
        <div className='container'>
          <div className="h1">
            <h1>Contact us</h1>
          </div>
          <div className="Contact_m">
            <div className="hammasi">
              <div className="Contact_row">
                <form onSubmit={formik.handleSubmit}>
                  <Box
                    component="div"
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <TextField
                      className="input_all"
                      id="name"
                      name="name"
                      label="Name"
                      variant="outlined"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                      className="input_all"
                      id="email"
                      name="email"
                      label="Your Email"
                      variant="outlined"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                      className="input"
                      id="projectDescription"
                      name="comments"
                      label="Briefly describe your project"
                      multiline
                      rows={4}
                      variant="outlined"
                      value={formik.values.comments}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Box>
                  <div className="btn_k">
                    <Button
                      className="btn_k_rwo"
                      variant="contained"
                      disableElevation
                      type="submit"
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </div>
              <div className="Contact_row">
                <a href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor">
                  <div className="phon">
                    <div className="phon_all">
                      <HiOutlineLocationMarker />
                    </div>
                    <div className="phon_all">
                      <h1>Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес</h1>
                    </div>
                  </div>
                </a>
                <div className="phon">
                  <div className="phon_all">
                    <FiPhone />
                  </div>
                  <div className="phon_all">
                    <h1><a href="tel:+998336600999" className="">+998 33 66 00 999</a></h1>
                  </div>
                </div>
                <a href="mailto:azizbek.b@udevs.io">
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
                    <h1><a href="https://t.me/azizbekbakhodirov" className="">t.me/azizbekbakhodirov</a></h1>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11992.72885232603!2d69.20430054999999!3d41.28313865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1720793633991!5m2!1sru!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
