import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";

const Shopcard = () => {
  return (
    <div className="w-1/5 h-full  py-6 ">
      <h1 className="text-3xl font-medium pl-12 pt-3 pb-6">Lulu mall,Kochi</h1>

      <div className="bg-gray-100  text-lg p-3 font-medium flex items-center justify-end gap-3 hover:text-white ease-in-out duration-100   hover:bg-orange-400 rounded-r-xl mb-6">
      
        New order
        <FaCartShopping />
      </div>
      <div className="bg-gray-100  flex items-center gap-3 text-lg p-3 font-medium justify-end    hover:text-white  ease-in-out duration-100    hover:bg-orange-400 rounded-r-xl  mb-6">

        Order History
        <FaHistory />
      </div>
      <div className="bg-gray-100  flex items-center gap-3  p-3 text-lg  font-medium justify-end   hover:text-white  ease-in-out duration-100    hover:bg-orange-400 rounded-r-xl mb-6 ">
   
        Payments
        <SiCashapp />
      </div>
    </div>
  );
};

export default Shopcard;
