import React from 'react'
import logo from './../Assets/logo5.jpg'
import './SideNav.css'
import { NavLink } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BallotIcon from '@mui/icons-material/Ballot';
import LogoutIcon from '@mui/icons-material/Logout';

function SideNav() {
  return (
    <div className='nav'>
        <div className='top'><span className='logo'>Logo</span></div>
        <hr style={{
          margin:0,
        }}/>
        <div className='center'>
          <ul>
          <p className='title'>main</p>
            <li><DashboardIcon className='icon'/><span>Dashbpard</span></li>
           <NavLink to='/users'> <li><PersonIcon className='icon'/><span>User</span></li></NavLink>
            <p className='title'>links</p>
            <li><ProductionQuantityLimitsIcon className='icon'/><span>Product</span></li>
            <li><BallotIcon className='icon'/><span>Order</span></li>
            <li><NotificationsActiveIcon className='icon'/><span>Notification</span></li>
            <p className='title'>user</p>
            <li><SettingsIcon className='icon'/><span>Setting</span></li>
            <li><LogoutIcon className='icon'/><span>Logout</span></li>
          </ul>
        </div>
        <div className='bottom'>
          <div className='colorOption'></div>
          <div className='colorOption'></div>
          <div className='colorOption'></div>
        </div>
    </div>
  )
}

export default SideNav