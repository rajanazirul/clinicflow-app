"use client";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import ToastMsg from "@/components/ToastMsg";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = async (supabaseAccessToken: any) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_KEY || '',
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    }
  );
  return supabase;
};

const Example = () => {
  const { getToken } = useAuth();
  const [response, setResponse] = useState('// Click button to execute code');

  const fetchToken = async () => {
    setResponse('// Loading...');
    try {
      // TODO: Update with your JWT template name
      const token = await getToken({ template: 'supabase' });
      setResponse(token ?? '');
    } catch (e) {
      setResponse(
        '// There was an error with the request. Please contact support@clerk.dev'
      );
    }
  };

  const fetchData = async () => {
    setResponse('// Loading...');

    try {
      // TODO: Update with your JWT template name
      const supabaseAccessToken = await getToken({ template: 'supabase' });

      const supabase = await supabaseClient(supabaseAccessToken);

      const { data } = await supabase.from('users').select('*');
      const body = data ? JSON.stringify(data, null, '  ') : 'No data returned';

      setResponse(body);
    } catch (e) {
      setResponse(
        '// There was an error with the request. Please contact support@clerk.dev'
      );
    }
  };

  return (
    <div className="example">
      <div className="card">
        <button onClick={fetchToken} type="button">
          <img
            className="card-logo"
            alt="Clerk logo"
            src="/images/logo-clerk.svg"
          />
          <div>
            <h3>{`getToken({ template: 'supabase' })`}</h3>
            <p>Retrieve token from JWT template</p>
          </div>
          <svg
            className="icon-arrow"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M8 12l4 4 4-4M12 2v14"
              stroke="#335BF1"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="card">
        <button onClick={fetchData} type="button">
          <img
            className="card-logo"
            alt="Supabase logo"
            src="/images/logo-supabase.svg"
          />
          <div>
            <h3>supabase.from('User').select()</h3>
            <p>Retrieve data from Supabase</p>
          </div>
          <svg
            className="icon-arrow"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M8 12l4 4 4-4M12 2v14"
              stroke="#335BF1"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <pre>
        <code>{response}</code>
      </pre>
    </div>
  );
};

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);
  useEffect(() => {
    getCarList_();
  }, []);
  const getCarList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
  };

  // filter car list by brand
  // use state of carsOrgList to filter
  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter(
      (item: any) => item.carBrand == brand
    );
    setCarsList(filterList);
  };

  const orderCarList = (order: any) => {
    const sortedData = [...carsOrgList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
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
    <div className="">
      <BookCreatedFlagContext.Provider
        value={{ showToastMsg, setShowToastMsg }}
      >
        <Example />
        <Hero />
        <SearchInput />

        {/* setBrand based on user filter brand using method filterCarlist */}
        <CarsFiltersOption
          carsList={carsOrgList}
          orderCarList={(value: string) => orderCarList(value)}
          setBrand={(value: string) => filterCarList(value)}
        />
        <CarsList carsList={carsList} />
        {showToastMsg ? (
          <ToastMsg msg={"Booking Created Successfully!"} />
        ) : null}
      </BookCreatedFlagContext.Provider>
    </div>
  );
}
