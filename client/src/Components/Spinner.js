import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

function Spinner() {
  const[count,setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount((prevvalue) => --prevvalue)
    },1000);
    
    count === 0 && navigate('/login',{
      state: location.pathname
    })
    
    return()=> clearInterval(interval) 
  },[count,navigate,location])
  
  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center" style={{height:'100vh'}}>
        <h1 className='Text-Center'>Redirection to you in {count} seconds</h1>
      <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    </>
  );
}

export default Spinner