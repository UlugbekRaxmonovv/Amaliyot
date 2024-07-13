import React from 'react';
import './Ourclients.scss'
import rasm from '../../img/our.svg'
import rasm1 from '../../img/our1.svg'
import rasm2 from '../../img/our2.svg'
import rasm3 from '../../img/our3.svg'
import rasm4 from '../../img/our4.svg'
import rasm5 from '../../img/our5.svg'
import rasm6 from '../../img/our6.svg'
import rasm7 from '../../img/mytx.svg'
import rasm8 from '../../img/mytx1.svg'
import rasm9 from '../../img/mytx2.svg'
import rasm10 from '../../img//mytx3.svg'
import rasm11 from '../../img/mytx4.svg'
import rasm12 from '../../img/mytx5.svg'
import rasm13 from '../../img/mytx6.svg'
import rasm14 from '../../img/mytx6.svg'
import rasm15 from '../../img/mytx7.svg'


import Image from 'next/image';
const Ourclients = () => {
    return (
       <>
       <section id='clients'>
            <div className="h1 container">
                <h1>Our clients</h1>
            </div>
            <marquee behavior="" direction="" scrollamount="5">
          <div className="img_row">
          <div className="img">
               <Image src={rasm}  alt='rasm'/>
               </div>
               <div className="img">
               <Image src={rasm1 }  alt='rasm'/>
               </div>
               <div className="img">
               <Image src={rasm2}  alt='rasm'/>
               </div>
               <div className="img">
               <Image src={rasm3}  alt='rasm'/>
               </div>  <div className="img">
               <Image src={rasm4}  alt='rasm'/>
               </div>
               <div className="img">
               <Image src={rasm5}  alt='rasm'/>
               </div>
               <div className="img">
               <Image src={rasm6}  alt='rasm'/>
               </div>
          </div>

            </marquee>

            <marquee behavior="" direction="right" scrollamount="5">
          <div className="img_row">
          <div className="img">
               <Image src={rasm7}  alt='rasm'/>
               </div>
               <div className="img">
               <Image src={rasm8}  alt='rasm'/>
               </div>
               <div className="img">
               <Image src={rasm9}  alt='rasm'/>
               </div>
               <div className="img">
               <Image src={rasm10}  alt='rasm'/>
               </div>  <div className="img">
               <Image src={rasm11}  alt='rasm'/>
               </div>
               <div className="img">
               <Image src={rasm12}  alt='rasm'/>
               </div>
               <div className="img">
               <Image src={rasm13}  alt='rasm'/>
               </div>
               <div className="img">
               <Image src={rasm14}  alt='rasm'/>
               </div>
               <div className="img">
               <Image src={rasm15}  alt='rasm'/>
               </div>
          </div>

            </marquee>
       </section>
       </>
    );
}

export default Ourclients;
