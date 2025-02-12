import React, { useEffect, useState } from 'react'
import './Deshboard.css'
import img1 from '../assets/images/dashboard/appointments_icon.svg'
import img2 from '../assets/images/dashboard/doctor_icon.svg'
import img3 from '../assets/images/dashboard/patients_icon.svg'
import axios from 'axios'

export const Deshboard = () => {

  const [list,setList] = useState([])
  const [num,setNum] = useState("")
  const [docNum,setDocNum] = useState("")

 const handleDelete =(item)=>{
   console.log(item._id);
   
    axios.delete(`http://localhost:3000/appointDelete/${item._id}`).then(res=>{
        console.log(res)
        async function data(){
            const data = await axios.get('http://localhost:3000/appointmentItem')
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
    const data = await axios.get('http://localhost:3000/appointmentItem')
    // console.log(data.data)
    setList(data.data)
    // console.log(data.data.length);
    setNum(data.data.length)
    
    
   }
   data()
},[])



// doctor list  data

useEffect(()=>{
    async function data(){
        const data = await axios.get('http://localhost:3000/addDocItem')
        // console.log(data.data)
        setDocNum(data.data.length)
    }
    data()
},[])


  return (
   <>
      <section>
           <div className="container">
                <div className="row">
                     <div className="col-lg-4 col-md-3 col-sm-4 mt-2">
                          <div className='d-flex shadow-md bg-gray-100 rounded-md p-3'>
                              <div>
                                  <img className='img-fluid' src={img2} alt="image" />
                              </div>

                                <div className='ps-3'>
                                    <span className='num'>{docNum}</span>
                                    <p className='doc'>Doctors</p>
                                </div>
                          </div>
                     </div>
                     <div className="col-lg-4 col-md-3 col-sm-4 mt-2">
                     <div className='d-flex shadow-md bg-gray-100 rounded-md p-3'>
                              <div>
                                  <img className='img-fluid' src={img1} alt="image" />
                              </div>

                                <div className='ps-3'>
                                    <span className='num'>{num}</span>
                                    <p className='doc'>Appointments</p>
                                </div>
                          </div>
                     </div>
                     <div className="col-lg-4 col-md-3 col-sm-4 mt-2">

                     <div className='d-flex shadow-md bg-gray-100 rounded-md p-3'>
                              <div>
                                  <img className='img-fluid' src={img3} alt="image" />
                              </div>

                                <div className='ps-3'>
                                    <span className='num'>5</span>
                                    <p className='doc'>Patients</p>
                                </div>
                          </div>
                     </div>
                </div>



                  {/* latest appointment  */}


              <div className='pt-4'>
                  <h4 className='latest'>Latest Appointment</h4>

                          <table>
                            <thead>
                                <tr>
                                     <th>Sr</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Title</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((item,index)=>(
                                        <tr>
                                        <td>{index +1}</td>
                                        <td><img src="https://via.placeholder.com/40" alt="Profile"/></td>
                                        <td>{item.name}</td>
                                        <td>Booking by {item.date}</td>
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
