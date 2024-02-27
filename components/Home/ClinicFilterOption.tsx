import React, { useEffect, useState } from "react";

function ClinicFilterOption({ clinicList, setTown }: any) {
  const [townList, setTownList] = useState<any>();
  const TownSet = new Set();

  useEffect(() => {
    if (clinicList) {
      filterTownList();
    }
  }, [clinicList]);

  const filterTownList = () => {
    clinicList.forEach((element: any) => {
      TownSet.add(element.town);
    });
    setTownList;
  };
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Clinics</h2>
        <h2>
          Discover a wide range of clinic franchise, their service and
          locations.
        </h2>
      </div>
      <div className="flex gap-5">
        <select
          className="select 
            select-bordered w-full md:block max-w-xs hidden"
          onChange={(e) => setTown(e.target.value)}
        >
          <option disabled selected>
            Town
          </option>
          {townList &&
            townList.map((town: string, index: number) => (
              <option key={index}>{town}</option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default ClinicFilterOption;
