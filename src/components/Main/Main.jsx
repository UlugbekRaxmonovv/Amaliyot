"use client";

import React from 'react';
import './Main.scss'
import logo from '../../img/logo.svg'
import Image from 'next/image';
import rasm from '../../img/main.svg'
import { Typewriter } from 'react-simple-typewriter'
import AOS from '../AOS/index'
const Main = () => {
    return (
        <div className='container'> 
        <AOS/>
           <div className="main">
           <div className="main_all"  data-aos="fade-up">
              <Image src={logo}  alt='rasm'/>   
              <h1>IT-Outsourcing Company</h1>
              <div className='App'>
      <h1 style={{ paddingTop: '5rem', fontWeight: 'normal',marginTop:'-10%' }}>
       {' '}
        <span style={{ color: '#1B5BF7', fontSize:'40px', fontWeight: 'bold' }}>
          <Typewriter
            words={['Development and implementation ERP systems']}
            loop={5}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
              <button>Contact</button>
            </div>
            <div className="main_all">
            <div className="imf">
            <Image src={rasm}  alt='rasm'/>   
            </div>
             
            </div>
           </div>
            
        </div>
    );
}

export default Main;
