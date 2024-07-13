import React from 'react';
import './Team.scss'
import rasm from '../../img/team.svg'
import Image from 'next/image';

const Team = () => {
    return (
     <>
     <section id='Team'>
         <div className="container">
          <div className="h1">
            <h1> Our Team</h1>
          </div>
          <div className='team-members '>
          <div className='member'>
         <p>For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.</p>
         <h1>100+</h1>
         <h4>Dedicated team</h4>
        </div>
        <div className='member'>
          <Image src={rasm} alt='rasm' />
        </div>
      
    </div>
         </div>
        
 
     </section>
     
     </>
    );
}

export default Team;
