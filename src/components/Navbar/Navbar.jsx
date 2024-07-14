"use client"
import { useEffect, useState } from 'react';
import logo from '../../img/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import rasm from '../../img/Goodzone.svg'
import rasm1 from '../../img/Iman.svg'
import rasm2 from '../../img/sans.svg'
import rasm3 from '../../img/Delever.svg'
import { VscChevronDown } from "react-icons/vsc";
import rasm4 from '../../img/mobile.svg'
import rasm5 from '../../img/ERPsystems.svg'
import rasm6 from '../../img/design.svg'
import rasm7 from '../../img/ITconsulting.svg'
import rasm8 from '../../img/infrastructure.svg'
import { HiOutlineMenu } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import './Navbar.scss'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import AOS from '../AOS/index'
import flagEN from '../../img/aqsh.png';
import flagRU from '../../img/rus2.jpg';
import { useTranslation } from 'react-i18next';
import '../../app/i18n'


const Navbar = () => {
    let {t,i18n} =  useTranslation() 
    const [show,setShow] = useState(false)
    const [show1,setShow1] = useState(false)
    const [Language,seLanguage] = useState(false)
    const [menu,setmenu] = useState(false)
    const [lange, setLange] = useState('en')
    useEffect(() => {
        if (typeof window !== 'undefined') { 
    document.body.style.overflow = menu ? 'hidden' : 'auto';
    setLange(localStorage.getItem("i18nextLng") || 'en');
        }
      }, [menu]);   


     
      
  
  
      useEffect(() =>{
          i18n.changeLanguage(lange)
       },[lange])
  
       const handleLanguageChange = (lang) => {
          setLange(lang);
          if (typeof window !== 'undefined') {
            localStorage.setItem("i18nextLng", lang);
        }
        i18n.changeLanguage(lang);
        };

    const handelShow = () => {
        setShow(!show)     
    }
    const handelShow1 = () => {
        setShow1(!show1)     
    }
    const Language1 = () => {
        seLanguage(!Language)     
    }
    const handleHide = () => {
        setShow(false);
      
    };

    const handleHide1 = () => {
        setShow1(false);
      
    };

    const handleHide2 = () => {
        seLanguage(false);
      
    };



    return (
       <header  onMouseLeave={handleHide1}>
        <AOS/>
     <div className="container">
        <nav onMouseLeave={handleHide} >
        <Image src={logo}  alt='rasm'/>
            <ul className={`ul_list ${menu ? "menu" : "close"}`} onMouseLeave={handleHide2}>
                <div className="ikon">
               <Link href={'/'}> <Image src={logo}  alt='rasm'/></Link>
                    <div className="ikon_all">
   <VscChromeClose onClick={() =>setmenu(false)} />
                    </div>
                </div>
                <li>
                    <Link href={'#Ourservices'} className='li'>{t("navbar.Direction")}</Link>
                </li>
                <li>
                    <Link href={'#Team'}>{t("navbar.Command")}</Link>
                </li>
                <li>
                     <Link href={'/'}>
                       <div className="p1"  onMouseEnter={handelShow1} >
                       <div className="p">
                        <p>{t("navbar.Services")}</p>
                        </div>
                        <div className="p">
                        <VscChevronDown />
                        </div>
                       </div>
                     </Link>
                   
                      <div className={`links ${show1 ? "fixs" : ""}` } >
                        <p>Services</p>
                        <div className="list_link">
                        <Link href={'#Development'}>
                            <div className="g">
                            <div className="g_all">
                                <Image src={rasm4}  alt='rasm'/> 
                                </div>
                            <div className="g_all">
                                <p>Development of mobile applications</p>
                                </div>
                               
                            </div>
                            </Link>
                            <Link href={'/'}>
                            <div className="g">
                            <div className="g_all">
                                <Image src={rasm5}  alt='rasm'/>
                                </div>
                            <div className="g_all">
                                <p>Development and implementation ERP systems</p>
                                </div>
                                
                            </div>
                            </Link>
                            <Link href={'/'}>
                            <div className="g">
                            <div className="g_all">
                                <Image src={rasm6}  alt='rasm'/>
                                </div>
                            <div className="g_all">
                                <p>User interface, User experience design</p>
                                </div>
                               
                            </div>
                            </Link>
                            <Link href={'#ITconsulting'}>
                            <div className="g">
                            <div className="g_all">
                                <Image src={rasm7}  alt='rasm'/>
                                </div>
                            <div className="g_all">
                                <p>IT consulting</p>
                                </div>
                               
                            </div>
                            </Link>
                            <Link href={'/'}>
                            <div className="g">
                            <div className="g_all">
                                <Image src={rasm8}  alt='rasm'/>
                                </div>
                            <div className="g_all">
                                <p>Optimization IT consulting infrastructure</p>
                                </div>
                               
                            </div>
                            </Link>
                        </div>
                      </div>
                </li>
                <li>
                    <Link href={'#Tools'}className='li'>{t("navbar.Tools")}</Link>
                </li>
                <li>
                    <Link href={'#clients'}>{t("navbar.Clients")}</Link>
                </li>
                <li>
                     <Link href={'#Deliver'} className='li'>
                       <div className="p1"  onMouseEnter={handelShow} >
                       <div className="p">
                        <p>Portfolio</p>
                        </div>
                        <div className="p">
                        <VscChevronDown  />
                        </div>
                       </div>
                     </Link>
                   
                      <div className={`link ${show ? "fix" : ""}` } >
                        <p>Portfolio</p>
                        <div className="list_link">
                        <Link href={'#Commerce'} >
                            <div className="g">
                            <div className="g_all">
                                <Image src={rasm}  alt='rasm'/> 
                                </div>
                            <div className="g_all">
                                <p>Goodzone</p>
                                </div>
                               
                            </div>
                            </Link>
                            <Link href={'#Smsuz'}>
                            <div className="g">
                            <div className="g_all">
                                <Image src={rasm2}  alt='rasm'/>
                                </div>
                            <div className="g_all">
                                <p>Sms.uz</p>
                                </div>
                                
                            </div>
                            </Link>
                            <Link href={'#Deliver'}>
                            <div className="g">
                            <div className="g_all">
                                <Image src={rasm3}  alt='rasm'/>
                                </div>
                            <div className="g_all">
                                <p>Delever</p>
                                </div>
                               
                            </div>
                            </Link>
                            <Link href={'#Iman'}>
                            <div className="g">
                            <div className="g_all">
                                <Image src={rasm1}  alt='rasm'/>
                                </div>
                            <div className="g_all">
                                <p>Iman</p>
                                </div>
                               
                            </div>
                            </Link>
                        </div>
                      </div>
                </li>
                <li>
                     <Link href={'/'} className='li'>
                       <div className="p1"  onMouseEnter={Language1} >
                       <div className="p">
                        <p>{t("navbar.Language")}</p>
                        </div>
                        <div className="p">
                        <VscChevronDown />
                        </div>
                        
                       </div>
                          
                       <div className="custom-options">
                 <div className="img">
                 <div className="custom-option" onClick={() => handleLanguageChange('en')}>
                    <Image  src={flagEN} alt="English" />
                  </div>
                  <div className="custom-option" onClick={() => handleLanguageChange('en')}>
                  <p>Eng</p>
                  </div>
                 </div>
                 <div className="img">
                 <div className="custom-option" onClick={() => handleLanguageChange('ru')}>
                    <Image  src={flagRU} alt="Russian" /> 
                  </div>
                  <div className="custom-option" onClick={() => handleLanguageChange('ru')}>
                  <p>Rus</p>
                  </div>
                 </div>
                
                 </div>
                     </Link>
                
                </li>
                <li>
                    <Link href={'#contact'}>
                    <div className="btn">
                     <p> {t("navbar.Contact")} </p>
                 </div>
                    </Link>
                 
                </li>
                <li>
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
                </li>
            </ul>
           <HiOutlineMenu onClick={() => setmenu(true)} className='menu'/>
        </nav>
     </div>
       </header>
    );
}

export default Navbar;
