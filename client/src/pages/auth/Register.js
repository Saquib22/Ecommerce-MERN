import React, { useState } from "react";
import Layout from "../../Components/Layouts/Layout";
import "../../Styles/authStyle.css";
import toast from "react-hot-toast";
import axios from 'axios'
import  {useNavigate}  from "react-router-dom";
const Register = () => {
    const [name ,setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const[address, setAddress] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
       e.preventDefault();
      // console.log(name,email,password,phone,address);
      // toast.success('Register Successfully')  // dummy message
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
          name,
          email,
          password,
          address,
          phone,
        });
        if(res.data.success){
          toast.success(res.data.message)
          navigate('/login') 
        }
        else{
          toast.error(res.data.message)
        }
      } catch (error) {
        console.log(error);
        toast.error('something went wrong')
      }
    };
    
    
  return (
    <Layout title="Register - Ecommerce APP">
      <div className="form-container">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              className="form-control"
              
              placeholder="Enter Your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              className="form-control"
              placeholder="Enter Your Phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              className="form-control"
              placeholder="Enter Your Address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default Register;