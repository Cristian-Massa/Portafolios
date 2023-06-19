import React, { useState, useEffect } from 'react';

export const ScrollNav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { 
        setShow(false); 
      } 
      if(window.scrollY < lastScrollY) {
        setShow(true);
      }
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(()=>{
    if(show === false){
        document.getElementById('header').style.setProperty("transform", "translateY(-250px)")
    }else{
        document.getElementById('header').style.setProperty("transform", "translateY(0px)")
    }
  }, [show])

}