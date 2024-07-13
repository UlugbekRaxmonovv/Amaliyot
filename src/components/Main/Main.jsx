import React from 'react';
import './Main.scss'
import logo from '../../img/logo.svg'
import Image from 'next/image';
import rasm from '../../img/main.svg'
const Main = () => {
    return (
        <div className='container'> 
           <div className="main">
           <div className="main_all">
              <Image src={logo}/>   
              <h1>IT-Outsourcing Company</h1>
              <h1>Development and implementation ERP systems</h1>

              <button>Contact</button>
            </div>
            <div className="main_all">
            <div className="imf">
            <Image src={rasm}/>   
            </div>
             
            </div>
           </div>
            
        </div>
    );
}

export default Main;
