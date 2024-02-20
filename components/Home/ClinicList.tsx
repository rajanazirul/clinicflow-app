import React, { useEffect, useState } from "react";
import ClinicCard from "./ClinicCard";
import CarCardSkelton from "./CarCardSkelton";
import BookingModal from "../CarBooking/BookingModal";

function ClinicList(props: any) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedClinic, setSelectedClinic] = useState<any>([]);

  useEffect(() => {
    if (props.clinicList) {
      setIsLoaded(false);
    }
  }, [props.clinicList]);
  return (
    <div
      className="grid grid-cols-2 
    md:grid-cols-3
    lg:grid-cols-4"
    >
      {!isLoaded &&
        props.clinicList.map((clinic: any, index: number) => (
          <div
            key={index}
            onClick={() => {
              (window as any).my_modal_4.showModal();
              setSelectedClinic(clinic);
            }}
          >
            <ClinicCard clinic={clinic} />
          </div>
        ))}
      {isLoaded ? [1, 2, 3, 4, 5].map((item) => <CarCardSkelton key={item} />) : null}

      {/* You can open the modal using ID.showModal() method */}
      {/* This is modal when click button will show user modal to book car */}
      <dialog id="my_modal_4" className="modal">
        <BookingModal clinic={selectedClinic} />
      </dialog>
    </div>
  );
}

export default ClinicList;
