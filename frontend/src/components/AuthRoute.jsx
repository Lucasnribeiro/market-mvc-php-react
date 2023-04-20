import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { ShoppingCartProvider } from '../contexts/ShoppingCartProvider'
import useAuth from '../hooks/useAuth'
import DashboardNavbar from './DashboardNavbar'
import ShopNavbar from './ShopNavbar'

function AuthRoute({children}) {
  const { checkAuth } = useAuth()
  const authUser = checkAuth()

  if (!authUser) return <Navigate to="/" />

  if(authUser.role == 1){
    return (
        <>
          <DashboardNavbar />
          {children}
        </>
      )
  }

  if(authUser.role == 2){
    return (
        <>
          <ShoppingCartProvider>
            <ShopNavbar />
            {children}
          </ShoppingCartProvider>
        </>
      )
  }
}

export default AuthRoute
