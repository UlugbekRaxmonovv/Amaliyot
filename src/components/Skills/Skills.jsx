"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import './Skills.scss'

const Skills = ({data,category}) => {
    const [ value,setValue] =useState("All")
    console.log(category);


    let products__category = category?.map(category => (
        <>
         <Radio
        onClick={() => setValue(category?.title)} 
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
          <button onClick={() => setValue(category?.title)} className='category__btn' key={category.id}>{category.title}</button>
        </>
      ))
     const categoryFilter = value === "All" ? data : data.filter(el => el?.category === value)
     
    let links = categoryFilter?.map((link) =>(
        <div className="skils_all" key={link.id}>
        <div className="img">
        <Image src={link.img} alt={link.title} width={200} height={200}/>
       <p>{link.title}</p>
        </div>
        </div>
    ))
    return (
        <div>
                  <ul className='category'>
                  <Radio
       onClick={() => setValue("All")} 
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
                <button  onClick={() => setValue("All")}>All</button>
                {products__category
                }     
               
            </ul>
            <div className="skils">
      {links}
        </div> 
        </div>
    );
}

export default Skills;
