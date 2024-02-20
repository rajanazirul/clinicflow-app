import React, { useEffect, useState } from "react";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import PhoneIcon from "@heroicons/react/24/outline/PhoneIcon";

function ClinicCard(props: any) {
  const [clinic, setClinic] = useState<any>();

  // const clinic = {
  //   address: {
  //     town: "Kota Kinabalu",
  //     state: "Sabah",
  //     numbers: "1-G-7",
  //     poscode: "88000",
  //     streets: "Lorong Api - Api 1, Api-api Centre",
  //   },
  //   createdAt: "2024-02-20T09:06:42.783523+00:00",
  //   geo: {
  //     latitude: 5.976553720234743,
  //     longitude: 116.07102723617588,
  //   },
  //   id: "clsu55qt20lbn0c18sbnxm3g0",
  //   name: "Family Care Clinic Api Api",
  //   publishedAt: null,
  //   telephone: "0128514847",
  //   updatedAt: "2024-02-20T09:09:40.295106+00:00",
  // };

  useEffect(() => {
    if (props.clinic) {
      setClinic(props.clinic);
    }
  }, [props.clinic]);
  return (
    clinic && (
      <div
        className="group bg-gray-50 p-2 sm:p-5 rounded-3xl m-1 sm:m-5
hover:bg-white 
hover:border-[1px] cursor-pointer duration-50
border-blue-500 "
      >
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={clinic.image[0].url} alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{clinic.name}</h2>
            <p>
              <MapPinIcon className="w-6 h-6 inline-block mr-2" />{" "}
              {clinic.address.streets}, {clinic.address.poscode},{" "}
              {clinic.address.town}, {clinic.address.state}
            </p>
            <p>
              <PhoneIcon className="w-6 h-6 inline-block mr-2" />{" "}
              {clinic.telephone}
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">GP</div>
              <div className="badge badge-outline">24 Hours</div>
            </div>
          </div>
        </div>

        <button
          className="hidden group-hover:flex bg-gradient-to-r
     from-blue-400 to-blue-700
    p-2 rounded-lg text-white w-full px-5 justify-between"
        >
          Book Now
          <span className="bg-blue-400 p-1 rounded-md ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    )
  );
}

export default ClinicCard;
