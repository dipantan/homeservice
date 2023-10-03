import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './screens/auth/login/Login'
import Email from './screens/auth/email/Email'
import Register from './screens/auth/Register/Register'
import ForgotPassword from './screens/auth/forgotPassword/ForgotPassword'
import Home from './screens/home/Home'
import Services from './screens/services/Services'
import ServiceDetails from './screens/service-details/ServiceDetails'
import Booknow from './screens/booknow/Booknow'
import Dashboard from './screens/technician/dashboard/Dashboard'
import MyWork from './screens/technician/mywork/MyWork'
import MyServices from './screens/technician/myservices/MyServices'
import Details from './screens/auth/details/Details'
import AboutUs from './screens/about/AboutUs'
import Contactus from './screens/contact-us/Contactus'
import Profile from './screens/profile/Profile'
import Settings from './screens/profile/Settings'
import MyOrder from './screens/profile/MyOrder'
import PendingOrder from './screens/technician/pending-order/PendingOrder'
// Home

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/get-email' element={<Email />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/my-orders" element={<MyOrder />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service/details/:id' element={<ServiceDetails />} />
        <Route path='/booknow' element={<Booknow />} />
        <Route path='/worker/dashboard' element={<Dashboard />} />
        <Route path='/worker/my-work' element={<MyWork />} />
        <Route path='/worker/my-service' element={<MyServices />} />
        <Route path='/worker/pending-work' element={<PendingOrder />} />
      </Routes>
    </div>
  )
}

export default App