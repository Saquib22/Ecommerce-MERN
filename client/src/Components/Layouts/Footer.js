import React from 'react'
import { Link } from 'react-router-dom'
import About from '../../pages/About'
import Contact from '../../pages/Contact';
import Policy from '../../pages/Policy';
function Footer() {
  return (
    <div className="footer">
      <h4 className="text-center">Footer Comp &copy; Saquib</h4>
      <p className='text-center mt-3'>
        <Link to="/about" element={<About />}>
          About
        </Link>{" "}
        |
        <Link to="/contact" element={<Contact />}>
          Contact
        </Link>
        |
        <Link to="/Policy" element={<Policy />}>
          Policy
        </Link>
      </p>
    </div>
  );
}

export default Footer