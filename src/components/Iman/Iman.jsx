import React from 'react';
import './Iman.scss'
import rasm from '../../img/MAIN1.svg'
import Image from 'next/image';
import rasm1 from '../../img/iman1.png'
import rasm2 from '../../img/HOM.svg'
import rasm3 from '../../img/glo.svg'
import rasm4 from '../../img/glo1.svg'
import rasm5 from '../../img/glo3.svg'
import rasm6 from '../../img/glo6.svg'
import rasm7 from '../../img/glo4.svg'
import AOS from '../AOS/index'
const Iman = () => {
    return (
        <section id='Iman'>
            <AOS/>
        <div className="container">
         <div className="Deliver_all">
            <div className="Deliver_row">
        <Image src={rasm}  alt='rasm'/>
            </div>
            <div className="p1">
           <div className="p2">
            <Image src={rasm2}  alt='rasm'/>
            </div>
            <div className="p2">
          <p>Delivery</p>
            </div>
           </div>
         </div>
        <div className="main_row">
     
            <div className="main_all">
           <p>Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.</p>
           <h4>What we did?</h4>

           <div className="glo" data-aos="fade-up"
 data-aos-duration="200">
            <div className="glo">
             <div className="img">
             <Image src={rasm4}  alt='rasm'/>
              <p>Admin panel</p>
             </div>
            </div>
            <div className="glo">
             <div className="img">
             <Image src={rasm5}  alt='rasm'/>
              <p>Crossplatform</p>
             </div>
            </div>
          
            <div className="glo">
             <div className="img">
             <Image src={rasm6 }  alt='rasm' />
              <p>Mobile design</p>
             </div>
            </div>
         
           </div>
            </div>
            <div className="main_all">
            <Image src={rasm1}  alt='rasm'  data-aos="zoom-in"/>
            </div>
        </div>
        </div>
    </section>
    
    );
}

export default Iman;
