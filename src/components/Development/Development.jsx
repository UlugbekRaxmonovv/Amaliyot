import React from 'react';
import './Development.scss'
import Image from 'next/image';
import rasm1 from '../../img/orqafon.png'
import rasm3 from '../../img/appl.svg'
import rasm4 from '../../img/appl1.svg'
import rasm5 from '../../img/glo3.svg'
import rasm6 from '../../img/fon1.png'
import rasm7 from '../../img/skills.svg'
import rasm8 from '../../img/skills1.svg'
import rasm9 from '../../img/skills2.svg'
import AOS from '../AOS/index'
const Development = () => {
    return (
        <section id='Development'>
          <AOS/>
        <div className="container">
            <div className="h1">
                <h1>Development of mobile <br /> applications
</h1>
            </div>
            <div className="Optimization_All">
             
    
                <div className="Optimization_row">
                    <p>
                    In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.
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
                 
                   </div>

                   <div className="tx">
                    <h4>Technologies</h4>
                <div className="tx_skills">
                <div className="tx_skills_all">
                      <Image src={rasm7}  alt='rasm'/>
                      <p>Swift</p>
                    </div>
                    <div className="tx_skills_all">
                      <Image src={rasm8}  alt='rasm'/>
                      <p>Kotlin</p>
                    </div>
                    <div className="tx_skills_all">
                      <Image src={rasm9}   alt='rasm'/>
                      <p>Kotlin</p>
                    </div>
                </div>
                   </div>
                </div>

                <div className="Optimization_row">
                    <div className="Optimization_img">
                      <div className="img">
                      <Image src={rasm1} alt="orqafon"   width={300} height={200} />
                      </div>
                      <div className="img">
                      <Image src={rasm6} className='absolut'  alt='rasm'  data-aos="zoom-in-up"/>
                      </div>
                   
                    </div>
                </div>
            </div>
         
        </div>
           </section>
    );
}

export default Development;
