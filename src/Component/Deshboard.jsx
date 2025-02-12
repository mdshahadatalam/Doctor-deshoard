import React from 'react'
import './Deshboard.css'
import img1 from '../assets/images/dashboard/appointments_icon.svg'
import img2 from '../assets/images/dashboard/doctor_icon.svg'
import img3 from '../assets/images/dashboard/patients_icon.svg'

export const Deshboard = () => {
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
                                    <span className='num'>14</span>
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
                                    <span className='num'>2</span>
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
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Title</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="https://via.placeholder.com/40" alt="Profile"/></td>
                                    <td>John Doe</td>
                                    <td>Software Engineer</td>
                                    <td><button class="delete-btn" onclick="removeRow(this)">✖</button></td>
                                </tr>
                                <tr>
                                    <td><img src="https://via.placeholder.com/40" alt="Profile"/></td>
                                    <td>Jane Smith</td>
                                    <td>Product Manager</td>
                                    <td><button class="delete-btn" onclick="removeRow(this)">✖</button></td>
                                </tr>
                            </tbody>
                        </table>
                  </div>
           </div>
      </section>
   </>
  )
}
