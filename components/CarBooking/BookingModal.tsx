import React, { useEffect } from "react";
import Form from "./Form";
import ClinicCard from "../Home/ClinicCard";

function BookingModal({ clinic }: any) {
  return (
    // add form to book car based on props from parent component
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      <div className="border-b-[1px] pb-2 ">
        <h3 className=" text-[30px] font-light text-gray-400">
          Book Appoinment Now!
        </h3>
      </div>
      <div
        className="grid grid-cols-1
    md:grid-cols-2 p-5"
      >
        <div>
          <ClinicCard clinic={clinic} />
        </div>
        <div>
          <button 
            className="btn btn-outline btn-success" 
            onClick={() => window.open('https://wa.me/60174220665?text=I%20want%20to%20make%20an%20appointment', '_blank')}
          >
            Send Whatsapp
          </button>
        </div>
      </div>
    </form>
  );
}

export default BookingModal;
