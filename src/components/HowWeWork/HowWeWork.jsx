import React from 'react';
import './HowWeWork.scss'
import Image from 'next/image';
import rasm from '../../img/how.svg'
import rasm1 from '../../img/how1.svg'
import rasm2 from '../../img/how2.svg'
import rasm3 from '../../img/how3.svg'

const HowWeWork = () => {
    return (
        <>
        <section id='HowWeWork'>
         <div className="container">
         <div className="h1">
                <h1>How we work!</h1>
            </div>
<div className="HowWeWork_all">
    <div className="HowWeWork_row">
        <div className="img">
           <div className="img_All">
            <Image src={rasm} alt='rasm1'/>
           </div>
        </div>
        <h4>Сontact</h4>
        <p>Send us your project request or project idea.</p>
    </div>
    <div className="HowWeWork_row">
        <div className="img">
        <Image src={rasm} alt='rasm1'/>
           <div className="img_All">
           
           </div>
        </div>
        <h4>Сontact</h4>
        <p>Send us your project request or project idea.</p>
    </div>
    <div className="HowWeWork_row">
        <div className="img">
           <div className="img_All">
            <Image src={rasm1} alt='rasm1'/>
           </div>
        </div>
        <h4>Analysis</h4>
        <p>We will contact you to clarify your project requirements.</p>
    </div>
    <div className="HowWeWork_row">
        <div className="img">
           <div className="img_All">
            <Image src={rasm2} alt='rasm1'/>
           </div>
        </div>
        <h4>Offer</h4>
        <p>We will provide you with our free, non-binding application.</p>
    </div>
    <div className="HowWeWork_row">
        <div className="img">
           <div className="img_All">
            <Image src={rasm3} alt='rasm1'/>
           </div>
        </div>
        <h4>Team</h4>
        <p>We provide a team for your requirements.</p>
    </div>
    <div className="HowWeWork_row">
        <div className="img">
           <div className="img_All">
            <Image src={rasm} alt='rasm1'/>
           </div>
        </div>
        <h4>Start</h4>
        <p>You will get to know the team and we'll get started.</p>
    </div>
</div>
         </div>

        </section>
        </>
    );
}

export default HowWeWork;
