import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../contexts/ContextProvider'
function DashboardLayouts() {
  const { user, token } = useStateContext();
  if (!token) {
    return <Navigate to="/login" />
  }
  const onLogout = (e) => {
    e.preventDefault();
  }

  return (
    <div id='dashboardlayout'>
      <aside>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/users">Users</Link>
      </aside>
      <div className='content'>
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name}
            <a href='#' onClick={onLogout} className='btn-logout'>Logout</a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayouts
