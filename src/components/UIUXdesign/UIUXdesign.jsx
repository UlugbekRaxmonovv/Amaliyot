
import React from 'react';
import './UIUXdesign.scss'
import Image from 'next/image';
import rasm1 from '../../img/orqafon.png'
import rasm3 from '../../img/us.svg'
import rasm4 from '../../img/us1.svg'
import rasm5 from '../../img/us.svg'
import rasm7 from '../../img/ui.svg'
import rasm8 from '../../img/uz1.svg'
import rasm9 from '../../img/ui1.svg'
import rasm12 from '../../img/ui2.svg'
import rasm10 from '../../img/us4.svg'
import rasm11 from '../../img/us5.svg'
import rasm6 from '../../img/fon1.png'
import AOS from '../../components/AOS/index'

const UIUXdesign = () => {


    return (
        <section id='UIUXdesign'>
          <AOS/>
        <div className="container">
            <div className="h1">
                <h1>UI / UX design
</h1>
            </div>
            <div className="Optimization_All">
             
    
                <div className="Optimization_row">
                    <p>
                  Our company takes a human-centered approach to design
                    </p>
                    <div className="glo">
                    <div className="glo">
                     <div className="img">
                     <Image src={rasm3}  alt='rasm'/>
                      <p>UX</p>
                     </div>
                    </div>
                    <div className="glo">
                     <div className="img">
                     <Image src={rasm4}  alt='rasm'/>
                      <p>UX</p>
                     </div>
                    </div>
                    <div className="glo">
                     <div className="img">
                     <Image src={rasm5}  alt='rasm'/>
                      <p>Prototyping</p>
                     </div>
                    </div>
                    <div className="glo">
                     <div className="img">
                     <Image src={rasm11}  alt='rasm'/>
                      <p>Mobile Design</p>
                     </div>
                    </div>
                    <div className="glo">
                     <div className="img">
                     <Image src={rasm5}  alt='rasm'/>
                      <p>Web Design</p>
                     </div>
                    </div>
                    <div className="glo">
                     <div className="img">
                     <Image src={rasm10}  alt='rasm'/>
                      <p>Atomic Design</p>
                     </div>
                    </div>
                 
                   </div>

                   <div className="tx">
                    <h4>Technologies</h4>
                <div className="tx_skills">
                <div className="tx_skills_all">
                      <Image src={rasm9}  alt='rasm'/>
                      <p>Sketch</p>
                    </div>   
                    <div className="tx_skills_all">
                      <Image src={rasm12}  alt='rasm'/>
                      <p>Figma</p>
                    </div>
                <div className="tx_skills_all">
                      <Image style={{width:'40px'}} src={rasm7}  alt='rasm'/>
                      <p>Lottie</p>
                    </div>
                    <div className="tx_skills_all">
                      <Image src={rasm8}  alt='rasm'/>
                      <p>Illustrator</p>
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
                      <Image src={rasm6} className='absolut'  alt='rasm' data-aos="zoom-in" />
                      </div>
                   
                    </div>
                </div>
            </div>
         
        </div>
           </section>
    );
}

export default UIUXdesign;
