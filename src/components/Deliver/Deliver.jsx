import React from 'react';
import './Deliver.scss'
import rasm from '../../img/l.svg'
import Image from 'next/image';
import rasm1 from '../../img/delever1.png'
import rasm2 from '../../img/Delever2.svg'
import rasm3 from '../../img/glo.svg'
import rasm4 from '../../img/glo1.svg'
import rasm5 from '../../img/glo3.svg'
import rasm6 from '../../img/glo6.svg'
import rasm7 from '../../img/glo4.svg'

const Deliver = () => {
    return (
        <>
        <section id='Deliver'>
            <div className="container">
             <div className="Deliver_all">
                <div className="Deliver_row">
            <Image src={rasm}/>
                </div>
                <div className="p1">
               <div className="p2">
                <Image src={rasm2}/>
                </div>
                <div className="p2">
              <p>Delivery</p>
                </div>
               </div>
             </div>
            <div className="main_row">
            <div className="main_all">
                <Image src={rasm1}/>
                </div>
                <div className="main_all">
               <p>Delever - Delivery service automation targeted at both consumers and restaurants.</p>
               <h4>What we did?</h4>
   
               <div className="glo">
                <div className="glo">
                 <div className="img">
                 <Image src={rasm3}/>
                  <p>Website</p>
                 </div>
                </div>
                <div className="glo">
                 <div className="img">
                 <Image src={rasm4}/>
                  <p>Admin panel</p>
                 </div>
                </div>
                <div className="glo">
                 <div className="img">
                 <Image src={rasm5}/>
                  <p>Crossplatform</p>
                 </div>
                </div>
                <div className="glo">
                 <div className="img">
                 <Image src={rasm7}/>
                  <p>Web design</p>
                 </div>
                </div>
                <div className="glo">
                 <div className="img">
                 <Image src={rasm6}/>
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

export default Deliver;
