import React, { useEffect, useState } from "react";
import ClinicCard from "./ClinicCard";
import CardSkeleton from "./CardSkeleton";
import BookingModal from "../CarBooking/BookingModal";
import { ClinicListProps, ClinicProps } from "@/context/ClinicInterface";

function ClinicList(props: ClinicListProps) {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setIsLoaded(false);
  }, [props.clinicList]);
  return (
    <div className="max-container padding-container relative w-full flex justify-end">
      <div
        className="grid grid-cols-1 
    md:grid-cols-3
    lg:grid-cols-4"
      >
        {!isLoaded &&
          props.clinicList.map((clinic: ClinicProps, index: number) => (
            <div
              key={index}
              // onClick={() => {
              //   (window as any).my_modal_4.showModal();
              // }}
            >
              <ClinicCard clinic={clinic} />
            </div>
          ))}
        {isLoaded
          ? [1, 2, 3, 4, 5].map((item) => <CardSkeleton key={item} />)
          : null}

        {/* You can open the modal using ID.showModal() method */}
        {/* This is modal when click button will show user modal to book car */}
        {/* <dialog id="my_modal_4" className="modal">
        <BookingModal clinic={selectedClinic} />
      </dialog> */}
      </div>
    </div>
  );
}

export default ClinicList;
