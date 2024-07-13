import React from 'react';
import './ERPsystems.scss'
import Image from 'next/image';
import rasm1 from '../../img/orqafon.png'
import rasm from '../../img/orqa.png'
import rasm3 from '../../img/erp.svg'
import rasm4 from '../../img/erp1.svg'
import rasm5 from '../../img/erp2.svg'
import rasm6 from '../../img/erp3.svg'
import rasm7 from '../../img/erp4.svg'
import AOS from '../AOS/index'
const ERPsystems = () => {
    return (
        <section id='ERPsystems'>
            <AOS/>
    <div className="container">
        <div className="h1">
            <h1>ERP systems</h1>
        </div>
        <div className="Optimization_All">
            <div className="Optimization_row">
                <div className="Optimization_img">
                  <div className="img">
                  <Image src={rasm1} alt="orqafon"   width={300} height={200} />
                  </div>
                  <div className="img">
                  <Image src={rasm} className='absolut'  alt='rasm'  data-aos="zoom-in-up"/>
                  </div>
               
                </div>
            </div>

            <div className="Optimization_row">
                <p>
                IT Systems of any level of complexity at a convenient time for you
                </p>
                <div className="glo">
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
                 <Image src={rasm6}  alt='rasm'/>
                  <p>Mobile design</p>
                 </div>
                </div>


                <div className="glo">
                 <div className="img">
                 <Image src={rasm7}  alt='rasm'/>
                  <p>Mobile design</p>
                 </div>
                </div>

              
             
               </div>
            </div>
        </div>
     
    </div>
       </section>
    );
}

export default ERPsystems;
