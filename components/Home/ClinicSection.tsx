"use client";
import { getClinicList } from "@/services";
import { useEffect, useState } from "react";
import ClinicList from "./ClinicList";

export default function ClinicSection() {
  const [clinicList, setClinicList] = useState<any>([]);

  useEffect(() => {
    getClinicList_();
  }, []);

  const getClinicList_ = async () => {
    const result: any = await getClinicList();
    setClinicList(result?.clinics);
  };

  return (
    <div>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-center mt-10 mb-5">
            Our Clinic Partner
          </h1>
        </div>
        <ClinicList clinicList={clinicList} />
      </div>
    </div>
  );
}
