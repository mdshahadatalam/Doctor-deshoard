import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Deshboard } from './Component/Deshboard';
import { Appointment } from './Component/Appointment';
import { AddDoctor } from './Component/AddDoctor';
import { DoctorList } from './Component/DoctorList';
import { Nav } from './Component/Nav';


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
                <button onClick={()=>handleMenu("dashboard")} className='allDocNav mt-3'>Dashboard</button>
                <button onClick={()=>handleMenu("appointment")} className='allDocNav mt-3'>Appointments</button>
                <button onClick={()=>handleMenu("addDoc")} className='allDocNav mt-3'>Add Doctor</button>
                <button onClick={()=>handleMenu("docList")} className='allDocNav mt-3'>Doctor list</button>
              </div>
            </div>
            <div className="col-lg-10">

              <div className='  p-3 m-3'>
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
