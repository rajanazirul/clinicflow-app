"use client";
import SearchInput from "@/components/Home/SearchInput";
import ToastMsg from "@/components/ToastMsg";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";
import { getClinicList } from "@/services";
import { useEffect, useState } from "react";
import ClinicFilterOption from "./ClinicFilterOption";
import ClinicList from "./ClinicList";

export default function ClinicSection() {
  const [clinicList, setClinicList] = useState<any>([]);
  const [clinicTownList, setClinicTownList] = useState<any>([]);
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);

  useEffect(() => {
    getClinicList_();
  }, []);

  const getClinicList_ = async () => {
    const result: any = await getClinicList();
    setClinicList(result?.clinics);
  };

  const filterClinicList = (town: string) => {
    const filterList = clinicTownList.filter((item: any) => item.town == town);
    setClinicList(filterList);
  };

  // This one use to close toast message after 4 second
  useEffect(() => {
    if (showToastMsg) {
      setTimeout(function () {
        setShowToastMsg(false);
      }, 4000);
    }
  }, [showToastMsg]);
  return (
    <div>
      <BookCreatedFlagContext.Provider
        value={{ showToastMsg, setShowToastMsg }}
      >
        <SearchInput />

        {/* <ClinicFilterOption
          clinicList={clinicTownList}
          setTown={(value: string) => filterClinicList(value)}
        /> */}
        <div>
          <ClinicList clinicList={clinicList} />
        </div>
        {showToastMsg ? (
          <ToastMsg msg={"Booking Created Successfully!"} />
        ) : null}
      </BookCreatedFlagContext.Provider>
    </div>
  );
}
