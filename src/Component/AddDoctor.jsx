import React, { useState } from 'react'
import './AddDoctor.css'

export const AddDoctor = () => {
const [name,setName] = useState("")
const [email,setEmail] = useState("")

  // const handleSubmit =()=>{
  //   console.log(name,email)
  // }
  return (
    <>
      <div className="row">
          <div className="col-lg-6  col-md-6 ps-4">
           <div className=''>
           <label className='lableText' htmlFor="">Doctor name</label> <br />
           <input className='inpuField' type="text" name="name" id="name" placeholder='Name'/>
           </div>

             <div className='mt-3'>
             <label className='lableText' htmlFor="">Doctor Email</label> <br />
             <input className='inpuField' type="email" name="email" id="email" placeholder='Email'/>
             </div>


            <div className='mt-3'>
            <label className='lableText' htmlFor="">Doctor Password</label> <br />
            <input className='inpuField' type="password" name="password" id="password" placeholder='New password'/>
            </div>

           <div className='mt-3'>
           <label className='lableText' htmlFor="">Experience</label> <br />
           <input className='inpuField' type="text" name="Experience" id="Experience"  placeholder='Experience'/>
           </div>


            <div className='mt-3'>
            <label className='lableText' htmlFor="">Fees</label> <br />
            <input className='inpuField' type="text" name="fees" id="fees" placeholder='Your fees'/>
            </div>

            <div className='my-3'>
               <label className='lableText' htmlFor="">About me</label> <br/>
               <textarea className='message' name="message" id="message" placeholder='Message'></textarea>
            </div>

          </div>
          <div className="col-lg-6 col-md-6">
          <div className=''>
           <label className='lableText' htmlFor="">Speciality</label> <br />
           <input className='inpuField' type="text" name="name" id="name" placeholder='Speciality'/>
           </div>

             <div className='mt-3'>
             <label className='lableText' htmlFor="">Address</label> <br />
             <input className='inpuField' type="text" name="Address1" id="Address1" placeholder='Address 1'/>
             </div>


            <div className='mt-3'>
            <input className='inpuField' type="text" name="Address2" id="Address2" placeholder='Address 2'/>
            </div>
          </div>

          {/* <button onClick={handleSubmit}>submit</button> */}
      </div>
    </>
  )
}
