import React from 'react'
import { Outlet } from 'react-router-dom';



const ProtectedRoute = () => {
  const useAuth = () => {
    const user = sessionStorage.getItem('user');
    return user;
    // return true;
  };

  const navigate = () => {
    alert('You are not authorized, Sign in')
     window.location="/signin";
  }

const isAuth = useAuth();
  return (
 
  isAuth ? 
    (<Outlet /> ): navigate()
  )
}

export default ProtectedRoute