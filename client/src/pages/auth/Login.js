import React, { useState } from "react";
import Layout from "../../Components/Layouts/Layout";
import "../../Styles/authStyle.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useNavigate ,useLocation} from "react-router-dom";
const Login = () => {
     const[auth,setAuth] = useAuth();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate()
     const location = useLocation();
     const handleSubmit = async(e) => {
       e.preventDefault();
       try {
         const res = await axios.post(
           `${process.env.REACT_APP_API}/api/v1/auth/login`,
           { email, password }
         );
         if (res.data.success) {
           toast.success(res.data.message);
          
           setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token
           })
           localStorage.setItem("auth",JSON.stringify(res.data))
           navigate(location.state||'/',)
         } else {
           toast.error(res.data.message);
         }
       } catch (error) {
         console.log(error);
         toast.error('Something Went Wrong');
       }
     }
  return (
    <Layout title="Register - Ecommerce APP">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Login Form</h4>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              className="form-control"
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Login