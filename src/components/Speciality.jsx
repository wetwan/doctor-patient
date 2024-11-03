// import React from 'react'
import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const Speciality = () => {
  return (
    <div
      className=" flex flex-col items-center gap-4 py-16 text-gray-800 "
      id="speciality"
    >
      <h1 className=" text-3xl font-medium">Find by Speciality </h1>
      <p className=" sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <ul className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll   ">
        {specialityData.map((item, i) => (
          <Link
          onClick={()=> scrollTo(0,0)}
            key={i}
            to={`/doctors/${item.speciality}`}
            className=" flex flex-col items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] duration-500 transition-all text-xs"
          >
            <img src={item.image} alt="" className="w-16 sm:w-24 mb-2" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Speciality;
