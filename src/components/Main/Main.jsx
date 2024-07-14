"use client";
import React, { useState } from 'react';
import './Main.scss'
import logo from '../../img/logo.svg'
import Image from 'next/image';
import rasm from '../../img/main.svg'
import { Typewriter } from 'react-simple-typewriter'
import AOS from '../AOS/index'
import { useTranslation } from 'react-i18next';
import Modul from '../../components/Modal/Modal'
import { BiMessageRoundedDots } from 'react-icons/bi';
import rasm1 from '../../img/modul.png'
import { VscChromeClose } from "react-icons/vsc";
import { PiLinkSimpleBold } from "react-icons/pi";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
const Bot_Token = "6409705996:AAH7HRsbbymTuGEK2h8joN7nQX0Eypu7MRg"
const Chat_ID = "-1002098227822"
const User_ID = "5125371890"
const Main = () => {
  let {t} =  useTranslation() 
  const [islogin, setIsLogin] = useState(false);
  const [ name,setName] = useState("")
  // document.body.style.overflow =  islogin ? "hidden" : "auto"
 
  const handelForm = (e) => {
    e.preventDefault();
    let usr ={
      name
    }
    console.log(usr);
    let text = "Buyurtma %0A%0A"
    text +=`Ismi:${name}%0A`
    let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_ID}&text=${text}`
  
    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
    setName("")
  }
    return (
      <>
     <div className="home-wrapper">
     <BiMessageRoundedDots onClick={() => setIsLogin(true)} />
     </div>

  {
         islogin ?<Modul btn1={setIsLogin}  >
            <div className="modul">
             <div className="all_row">
             <div className="all_row_br">
<Image src={rasm1} alt='rasm'/>
<h6>Udevs</h6>
 <div className="spana">
  <div className="span_all">
  </div>
  <div className="span_alls">
  <p>Welcome</p>
  </div>
  </div> 
</div>
<div className="all_row_br">
<VscChromeClose onClick={() => setIsLogin(false)}/>
</div>
             </div>
            <form action=""  onSubmit={handelForm}>
            <div className="ok">
            <div className="ok_all">
            <div className="link">
              <PiLinkSimpleBold/>

              </div>
              <div className="link">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

              </div>
            </div>
             <button> <PiPaperPlaneTiltFill/></button>
            </div>
             
            </form>
            </div>
         </Modul>
         :
         <></>
  }
      
        <div className='container'> 
        <AOS/>
           <div className="main">
           <div className="main_all"  data-aos="fade-up">
              <Image src={logo}  alt='rasm'/>   
              <h1>{t("Company")}</h1>
              <div className='App'>
      <h1 style={{ paddingTop: '5rem', fontWeight: 'normal',marginTop:'-10%' }}>
       {' '}
        <span style={{ color: '#1B5BF7', fontSize:'40px', fontWeight: 'bold' }}>
          <Typewriter
            words={[t("Development")]}
            loop={5}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
              <button>{t("navbar.Contact")}</button>
            </div>
            <div className="main_all">
            <div className="imf">
            <Image src={rasm}  alt='rasm'/>   
            </div>
             
            </div>
           </div>
            
        </div>
        </>
    );
}

export default Main;
