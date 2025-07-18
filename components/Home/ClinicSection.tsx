"use client";
import { getClinicList } from "@/services/cms";
import { useEffect, useState } from "react";
import ClinicList from "./ClinicList";
import Search from "@/components/Search/Search";

export default function ClinicSection() {
  const [clinicList, setClinicList] = useState<any>([]);

  useEffect(() => {
    getClinicList_();
  }, []);

  const getClinicList_ = async () => {
    const result: any = await getClinicList();
    setClinicList(result?.clinics);
    console.log(result);
  };

  return (
    <div>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-center mt-10 mb-5">
            Find a Clinic
          </h1>
        </div>

        <Search />
        <ClinicList clinicList={clinicList} />
      </div>
    </div>
  );
}
