import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { verifyToken } from "../services/api";
import UserLayout from '../Layout/UserLayout';
import Login from "./Login";

function VerifyUser() {
    
  const cook = new Cookies();
  const [isLogin, setIsLogin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    verifyToken().then(res => {
        setIsLogin(res.status)
        setLoading(false)
    }).finally( fin => {
        setLoading(false)
    })
  }, [])

  return (
    loading ? <Loading /> 
        : 
    (isLogin ? <UserLayout /> : <Login />)
  )
  
}

export default VerifyUser;

function Loading() {
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
}
