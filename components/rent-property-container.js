import PropertyCard from "./property-card";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import PropertiesGridContainer from "../components/properties-grid-container";
import Link from "next/link";

const RentPropertyContainer = () => {
  const client = createClient(process.env.NEXT_PUBLIC_URL,process.env.NEXT_PUBLIC_KEY);
  const [properties, setProperties] = useState([]);
 
  useEffect(() => {
    const fetchProperties = async () => {
      const result = await client.from('properties').select('*').limit(4);
      setProperties(result.data);

    }
    fetchProperties();
  },[])
  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Discover the Finest Rentals: Explore our latest properties available for rent. From cozy apartments to spacious homes, we bring you a curated selection of the most sought-after rental options. Find your next home sweet home today!
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
        <PropertiesGridContainer 
        allProperties={properties} />
        </div>
      </div>
      <Link href='/properties'className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center inline-block">
          Load more listing
        </button>
      </Link>
    </div>
  );
};

export default RentPropertyContainer;
