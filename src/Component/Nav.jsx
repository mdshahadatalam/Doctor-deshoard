import React from 'react'
import logo from '../assets/images/doctor/doc.svg'


export const Nav = () => {
  return (
  <>
      <section>
        <div className="container px-0">
        <nav
            className="flex items-center justify-between w-full relative bg-white rounded-full px-[10px] py-[8px]">

            {/* logo */}
         <div className='d-flex align-items-center justify-center'>
         <img src={logo} alt="logo" className="img-fluid"/>

          <span className='font-serif border-1 rounded-2xl py-0 ms-2 w-[80px] text-center'>Admin</span>
         </div>
         

            {/* action buttons */}
            <div className="items-center gap-[10px] flex">

              
            
                <button className='w-[100px] h-[35px] bg-blue-500  text-white'>Login </button> 
               
             
             
             
               

             
            </div>
        </nav>

        <hr />
        </div>
    </section>
  </>
  )
}
