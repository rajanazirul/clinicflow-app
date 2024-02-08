"use client"
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import ToastMsg from "@/components/ToastMsg";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";


export default function Home() {

  const [carsList,setCarsList]=useState<any>([])
  const [carsOrgList,setCarsOrgList]=useState<any>([])
  const [showToastMsg,setShowToastMsg]=useState<boolean>(false);
  useEffect(()=>{
    getCarList_();
  },[])
  const getCarList_=async()=>{
    const result:any=await getCarsList();
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists);
  }

  // filter car list by brand
  // use state of carsOrgList to filter
  const filterCarList=(brand:string)=>{
    const filterList=carsOrgList.filter((item:any)=>
    item.carBrand==brand);
    setCarsList(filterList);
  }

  const orderCarList=(order:any)=>{
    const sortedData = [...carsOrgList].sort((a, b) =>
    order==-1? a.price - b.price:b.price - a.price);
    setCarsList(sortedData);
  }

  // This one use to close toast message after 4 second
  useEffect(()=>{
    if(showToastMsg)
    {
      setTimeout(function(){
        setShowToastMsg(false)
      },4000);
    }
  },[showToastMsg])
  

  return (
    <div className="">
      <BookCreatedFlagContext.Provider value={{showToastMsg,setShowToastMsg}}>
        <Hero/>
        <SearchInput/>

        {/* setBrand based on user filter brand using method filterCarlist */}
        <CarsFiltersOption carsList={carsOrgList}
        orderCarList={(value:string)=>orderCarList(value)}
        setBrand={(value:string)=>filterCarList(value)} />
        <CarsList carsList={carsList} />
        {showToastMsg?<ToastMsg msg={'Booking Created Successfully!'} />:null}
    </BookCreatedFlagContext.Provider>
    </div>
  )
}
