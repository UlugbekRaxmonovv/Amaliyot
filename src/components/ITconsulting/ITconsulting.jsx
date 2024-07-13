import React from 'react';
import './ITconsulting.scss'
import rasm3 from '../../img/glo.svg'
import rasm4 from '../../img/sklo2.svg'
import rasm5 from '../../img/glo3.svg'
import rasm6 from '../../img/sklo1.svg'
import rasm7 from '../../img/sklo.svg'
import Image from 'next/image';
import rasm8 from '../../img/ITconsulting.svg'
const ITconsulting = () => {
    return (
      <>
      <section id='ITconsulting'>
   <div className="container">
     <div className="h1">
        <h1>IT consulting</h1>
     </div>
     <div className="ITconsulting_row">
        <div className="ITconsulting_all">
            <h1>We can improve the qualifications of your employees thereby increasing the efficiency of your company</h1>
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


                <div className="glo">
                 <div className="img">
                 <Image src={rasm7}/>
                  <p>Mobile design</p>
                 </div>
                </div>
             
               </div>
        </div>
        <div className="ITconsulting_all">
          <Image src={rasm8}/>
        </div>
     </div>
   </div>
      </section>
      </>
    );
}

export default ITconsulting;
