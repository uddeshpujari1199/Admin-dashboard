import React from 'react'
import SideNav from '../component/SideNav'
import Navbar from '../component/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";  
import './Home.css'
import { NavLink } from 'react-router-dom';
import Swidget from '../component/Swidget';
import Stable from '../component/Stable';

function Home() {
  return (
    <div className='home'>
        <SideNav/>
        <div className='homecontainer'>
          <Navbar/>
          <div className='widget'>
            <Swidget type="user"/>
            <Swidget type="order"/>
            <Swidget type="erning"/>
            <Swidget type="balnce"/>
          </div>
          <div className='listContainer'>
            <div className='listTitle'>Letest trasction</div>
            <Stable/>
          </div>
        </div>
    </div>
    
  )
}

export default Home