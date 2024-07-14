import React from 'react';
import './Commerce.scss'
import rasm from '../../img/goo.png'
import Image from 'next/image';
import rasm1 from '../../img/good.png'
import rasm2 from '../../img/goo1.svg'
import rasm3 from '../../img/glo.svg'
import rasm4 from '../../img/glo1.svg'
import rasm5 from '../../img/glo3.svg'
import rasm6 from '../../img/glo6.svg'
import rasm7 from '../../img/glo4.svg'
import AOS from '../AOS/index'
const Commerce = () => {
    return (
       <>
         <AOS/>
        <section id='Commerce'>
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
                <Image src={rasm1}  alt='rasm'  data-aos="zoom-in"/>
                </div>
                <div className="main_all">
               <p>Goodzone - Internet shop of household appliances in Uzbekistan.</p>
               <h4>What we did?</h4>
   
               <div className="glo" data-aos="fade-up"
     data-aos-duration="200">
                <div className="glo">
                 <div className="img">
                 <Image src={rasm3}  alt='rasm'/>
                  <p>Website</p>
                 </div>
                </div>
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
                 <Image src={rasm7}  alt='rasm'/>
                  <p>Web design</p>
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
            </div>
            </div>
        </section>
       </>
    );
}

export default Commerce;
