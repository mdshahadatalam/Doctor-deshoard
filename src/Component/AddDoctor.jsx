import React, { useState } from 'react'
import './AddDoctor.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';

export const AddDoctor = () => {
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [expe,setExpe] = useState("")
const [fees,setFess] = useState("")
const [about,setAbout] = useState("")
const [spe,setSpe] = useState("")
const [address,setAddress] = useState("")
const [addressTwo,setAddressTwo] = useState("")

  const handleSubmit =()=>{
    console.log(name,email,password,expe,fees,about,spe,address,addressTwo);

    axios.post('https://doctor-backend-git-main-md-shahadat-alams-projects.vercel.app/addDoctor',{
      name:name,
      email:email,
      password:password,
      experience:expe,
      fess:fees,
      about:about,
      spe:spe,
      addressOne:address,
      addressTwo:addressTwo,
    }).then(res=>{
      console.log(res);
      setName('')
      setEmail('')
      setPassword('')
      setExpe('')
      setFess('')
      setAbout('')
      setSpe('')
      setAddress('')
      setAddressTwo('')

      toast.success('Add Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
    }).catch(err=>{
      console.log(err);
      toast.error('Try again', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
    })
    
  }
  return (
    <>
      <div className="row">
          <div className="col-lg-6  col-md-6 ps-4">
           <div className=''>
           <label className='lableText' htmlFor="">Doctor name</label> <br />
           <input
            className='inpuField'
             type="text"
              name="name" 
              id="name"
               placeholder='Name'
               onChange={(e)=>{setName(e.target.value)}}
               value={name}
               />
           </div>

             <div className='mt-3'>
             <label className='lableText' htmlFor="">Doctor Email</label> <br />
             <input
              className='inpuField' 
              type="email"
               name="email"
                id="email" 
                placeholder='Email'
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
                />
             </div>


            <div className='mt-3'>
            <label className='lableText' htmlFor="">Doctor Password</label> <br />
            <input 
            className='inpuField'
             type="password"
              name="password" 
              id="password"
               placeholder='New password'
               onChange={(e)=>{setPassword(e.target.value)}}
               value={password}
               />
            </div>

           <div className='mt-3'>
           <label className='lableText' htmlFor="">Experience</label> <br />
           <input
            className='inpuField'
             type="text"
              name="Experience"
               id="Experience"
                 placeholder='Experience'
                 onChange={(e)=>{setExpe(e.target.value)}}
                 value={expe}
                 />
           </div>


            <div className='mt-3'>
            <label className='lableText' htmlFor="">Fees</label> <br />
            <input
             className='inpuField'
             type="text" 
             name="fees" 
             id="fees" 
             placeholder='Your fees'
             onChange={(e)=>{setFess(e.target.value)}}
             value={fees}
             />
            </div>

            <div className='my-3'>
               <label className='lableText' htmlFor="">About me</label> <br/>
               <textarea 
               className='message'
               name="message" 
               id="message"
               placeholder='Message'
               onChange={(e)=>{setAbout(e.target.value)}}
               value={about}
               ></textarea>
            </div>

          </div>
          <div className="col-lg-6 col-md-6">
          <div className=''>
           <label className='lableText' htmlFor="">Speciality</label> <br />
           <input 
           className='inpuField'
            type="text"
             name="Speciality" 
             id="Speciality" 
             placeholder='Speciality'
             onChange={(e)=>{setSpe(e.target.value)}}
             value={spe}
             />
           </div>

             <div className='mt-3'>
             <label className='lableText' htmlFor="">Address</label> <br />
             <input
              className='inpuField'
               type="text"
                name="Address1" 
                id="Address1" 
                placeholder='Address 1'
                onChange={(e)=>{setAddress(e.target.value)}}
                value={address}
                />
             </div>


            <div className='mt-3'>
            <input
             className='inpuField'
              type="text" 
              name="Address2" 
              id="Address2" 
              placeholder='Address 2'
              onChange={(e)=>{setAddressTwo(e.target.value)}}
              value={addressTwo}
              />
            </div>
          </div>

          <button onClick={handleSubmit} className='addDoc'>Add doctor</button>
      </div>

      <ToastContainer />
    </>
  )
}
