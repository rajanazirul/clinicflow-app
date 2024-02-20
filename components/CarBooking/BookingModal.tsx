import React, { useEffect } from 'react'
import CarCard from '../Home/CarCard'
import Form from './Form'

function BookingModal({car}:any) {

  return (
    // add form to book car based on props from parent component
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
    <div className='border-b-[1px] pb-2 '>
    <h3 className=" text-[30px] font-light text-gray-400">
        Book Appoinment Now!</h3>
    </div>
    <div className='grid grid-cols-1
    md:grid-cols-2 p-5'>
        <div>
            <CarCard car={car} />
        </div>
        <div>
           <Form car={car} />
        </div>
    </div>
   
    </form>
  )
}

export default BookingModal