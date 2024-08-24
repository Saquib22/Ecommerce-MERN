import React, { useState } from "react";
import Layout from "../../Components/Layouts/Layout";
import "../../Styles/authStyle.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
   
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const[answer,setAnswer] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      //    console.log(email, password);
      //    toast.success("Register Successfully"); // dummy message
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
          {
            email,
            newPassword,
            answer,
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong");
      }
    };
  return (
    <Layout title={"Forgot Password - Ecommerce App"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Reset Password</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              className="form-control"
              placeholder="Enter Your Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              className="form-control"
              placeholder="Enter Your New Password"
              required
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              className="form-control"
              placeholder="Favourite Sports"
              required
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default ForgotPassword