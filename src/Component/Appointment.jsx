import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Deshboard.css'

export const Appointment = () => {
     const [list,setList] = useState([])
     const [num,setNum] = useState("")

  const handleDelete =(item)=>{
    console.log(item._id);
    
     axios.delete(`https://doctor-backend-git-main-md-shahadat-alams-projects.vercel.app/appointDelete/${item._id}`).then(res=>{
         console.log(res)
         async function data(){
             const data = await axios.get('https://doctor-backend-git-main-md-shahadat-alams-projects.vercel.app/appointmentItem')
             console.log(data.data)
             setList(data.data)
             
            }
            data()
 
     }).catch(err=>{
         console.log(err)
 
          
     })
 
  }


  useEffect(()=>{
    async function data(){
     const data = await axios.get('https://doctor-backend-git-main-md-shahadat-alams-projects.vercel.app/appointmentItem')
     console.log(data.data)
     setList(data.data)
     // console.log(data.data.length);
     setNum(data.data.length)    
     
    }
    data()
 },[])
 
 
  return (
    <>
      <section>
         <div className="container">      
             <div className='pt-4'>
                  <h4 className='latest'>All Appointments</h4>

                          <table>
                            <thead>
                                <tr>
                                     <th>Sr</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Title</th>
                                    <th>Doctor</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((item,index)=>(
                                        <tr>
                                        <td>{index +1}</td>
                                         <td><img src={`http://localhost:3000/${item.img}`} alt="" /></td>
                                        <td>{item.name}</td>
                                        <td>Booking by {item.date}</td>
                                        <td>{item.docName}</td>
                                        <td>{item.phone}</td>
                                        <td><button class="delete-btn" onClick={()=>{handleDelete(item)}}>✖</button></td>
                                    </tr>
                                    ))
                                }
                                
                            </tbody>
                        </table>
                  </div>
         </div>
      </section>
    </>
  )
}
