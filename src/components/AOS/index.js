"use client";
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Index = () => {
    useEffect(() => {
        AOS.init({
          duration: 50,
        });
      }, []);
    return (
      <></>
    );
}

export default Index;
