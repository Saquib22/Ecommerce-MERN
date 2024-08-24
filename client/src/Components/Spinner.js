import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);

   if (count === 0) {
     // Encode the path to ensure it is a valid URL
     const encodedPath = encodeURI(`/${path}`);
     navigate(encodedPath, { state: { from: location.pathname } });
     return;
   }

    return () => clearInterval(interval);
  }, [count, navigate, location.pathname,path]);

  return (
    <>
      <div
        className="d-flex justify-content-center flex-column align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="Text-Center">Redirection to you in {count} seconds</h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner