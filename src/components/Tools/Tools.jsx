
import React from 'react';
import './Tools.scss'
import {getData }from '../../components/fetch/index'
import Skills from '../Skills/Skills';
const  Tools = async () => {
  let data =   await getData("Sneakers")
  let category =   await getData("category")
  
  console.log(category);
    return (
       <>
       <section id='Tools'>
        <div className="container">
        <div className="h1 ">
            <h1>Tools</h1>
        </div>
        <Skills data={data} category={category}/>
       
       
        </div>
       
       </section>
       </>
    );
}

export default Tools;
