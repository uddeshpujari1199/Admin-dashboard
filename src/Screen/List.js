import React from 'react'
import SideNave from './../component/SideNav'
import Navbar from '../component/Navbar'
import './list.css'
import DataTable from '../component/DataTable'

function List() {
  return (
    <div className='list-list'>
        <SideNave/>
        <div className='list-listContainer'>
        <Navbar/>
        <DataTable/>
        </div>
    </div>
  )
}

export default List