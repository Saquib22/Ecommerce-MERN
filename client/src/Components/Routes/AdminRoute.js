import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";
import axios from "axios";

export default function AdminRoute() {
  const [auth, setAuth] = useAuth();
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/auth/admin-auth`,
        );
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setOk(false);
      } finally {
        setLoading(false); // Set loading to false after request completes
      }
    };

    if (auth?.token) {
      authCheck();
    } else {
      setLoading(false); // Set loading to false if there's no token
    }
  }, [auth?.token]);

  if (loading) {
    return <Spinner path="login" />; // Or any other path you prefer
  }

  return ok ? <Outlet /> : <Spinner path="" />; // Adjust path as needed
}
