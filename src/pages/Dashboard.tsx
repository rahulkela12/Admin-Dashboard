import React from 'react'
import AdminSidebar from '../components/AdminSidebar';
import { BsSearch } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa';
import userpic from '../assets/userpic.png'
const Dashboard = () => {
  return (
    <div className='adminContainer'>
    <AdminSidebar/>
    <main className='dashboard'>
      <div className="bar">
       <BsSearch/>
       <input type="text" placeholder='search for data,users,docs'></input>
       <FaRegBell/>
       <img src={userpic} alt="userpic"/>
      </div>
    </main>
    </div>
  );
}

export default Dashboard;
