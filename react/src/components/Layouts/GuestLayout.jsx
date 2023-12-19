import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../contexts/ContextProvider'
import App from '../../App';

function GuestLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/admin/dashboard" />
  }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default GuestLayout
