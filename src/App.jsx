import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Deshboard } from './Component/Deshboard';
import { Appointment } from './Component/Appointment';
import { AddDoctor } from './Component/AddDoctor';
import { DoctorList } from './Component/DoctorList';
import { Nav } from './Component/Nav';
import { TbSmartHome } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";


export const App = () => {
  const [ menu, setMenu] = useState('Navbar')

  const handleMenu = (menu)=>{
    console.log(menu);
    setMenu(menu)
    
  }

  return (
   <>
     <Nav/>
       <section className='font-serif py-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className='bg-white '>
                <button onClick={()=>handleMenu("dashboard")} className='allDocNav mt-3 justify-center align-items-center d-flex '> <span className='text-2xl me-1'><TbSmartHome /></span> Dashboard</button>

                <button onClick={()=>handleMenu("appointment")} className='allDocNav mt-3 justify-center align-items-center d-flex '> <span className='text-2xl me-1'><MdDateRange /></span> Appointments</button>

                <button onClick={()=>handleMenu("addDoc")} className='allDocNav mt-3 justify-center align-items-center d-flex'> <span className='text-2xl me-1'><IoIosAddCircleOutline /></span> Add Doctor</button>

                <button onClick={()=>handleMenu("docList")} className='allDocNav mt-3 justify-center align-items-center d-flex'> <span className='text-2xl me-1'><FaUserGroup /></span> Doctor list</button>
              </div>
            </div>
            <div className="col-lg-10">

              <div className='  p-3'>
                 {  menu === "dashboard" && <Deshboard/>}
                 {  menu === "appointment" && <Appointment/>}
                 {  menu === "addDoc" && <AddDoctor/>}
                 {  menu === "docList" && <DoctorList/>}
                 
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}
