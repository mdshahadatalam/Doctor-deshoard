import React, { useEffect, useState } from 'react'
import doc from '../assets/images/doctor/doctor1 (1).png'
import axios from 'axios'
export const DoctorList = () => {
  const [list,setList] = useState([])


  useEffect(()=>{
    async function data(){
        const data = await axios.get('http://localhost:3000/addDocItem')
        console.log(data.data)
        // setDocNum(data.data.length)
        setList(data.data)
    }
    data()
},[])
  return (
    <>
       <section className='ps-3'>
           <h4 className='al'>All doctors</h4>
           <div className="row">
                {
                  list.map((item,index)=>(
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                      <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer text-center'>
                        <div className='d-flex justify-center'><img src={doc} className='img-fluid' alt="image" /></div>
                                                               
                          <h4 className='test m-0'>{item.name}</h4>
                          <span className='general'>{item.spe}</span>
                      </div>
                </div>
                  ))
                }
           </div>
       </section>
    </>
  )
}
