import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { verifyToken } from "../services/api";
import { useNavigate, Outlet } from "react-router-dom";

function VerifyUser() {
  const cook = new Cookies();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    verifyToken()
      .then((res) => {
        if (res.status) {
          setIsLogin(true);
        } else {
          navigate("/login");
        }
      })
      .catch(() => navigate("/login"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return isLogin ? <Outlet /> : null;
}

export default VerifyUser;

function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
    </div>
  );
}
