import React from 'react';
import './Ourservices.scss'
import rasm from '../../img/svg.svg'
import Image from 'next/image';
import rasm1 from '../../img/fon.svg'
import rasm2 from '../../img/zan.svg'
import rasm3 from '../../img/tv.svg'
import rasm4 from '../../img/wor.svg'
import rasm5 from '../../img/st.svg'
const Ourservices = () => {
    return (
       <>
     <section id='Ourservices'>
        <div className="container">
        <div className="h1">
                <h1>
                Our services
                </h1>
            </div>
<div className="Ourservices_all">
<div className="Ourservices_row">
<div className="svg">
   <Image src={rasm}/>
     <p>Team</p>
   </div>
</div>
<div className="Ourservices_row">
<div className="svg">
     <Image src={rasm1}/>
     <p>Development of mobile applications</p>
     </div>
</div>
<div className="Ourservices_row">
<div className="svg">
     <Image src={rasm2}/>
     <p>Development and implementation ERP systems</p>
    </div>
</div>
<div className="Ourservices_row">
<div className="svg">
     <Image src={rasm4}/>
     <p>User interface, User experience design</p>
     </div>
</div>
<div className="Ourservices_row">
<div className="svg">
     <Image src={rasm5}/>
     <p>User interface, User experience design</p>
     </div>
</div>
<div className="Ourservices_row">
<div className="svg">
     <Image src={rasm3}/>
     <p>IT consulting</p>
     </div>
</div>
</div>
</div>
     </section>
       </>
    );
}

export default Ourservices;
