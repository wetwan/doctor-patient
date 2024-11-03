import { useContext } from "react";
import { useState } from "react";
import { ShopContext } from "../contexts/ShopContext";

const MyAppointments = () => {
  const { doctors } = useContext(ShopContext);
  useState();
  return (
    <section>
      <p className=" pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>
      <div className="">
        {doctors.slice(0, 3).map((item, i) => (
          <div
            className=" grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
            key={i}
          >
            <div className=" ">
              <img src={item.image} alt="" className=" w-32 bg-indigo-50 " />
            </div>
            <div className=" flex-1 text-sm text-zinc-600 ">
              <p className=" text-neutral-800 font-semibold">{item.name}</p>
              <p className="">{item.speciality}</p>
              <p className=" text-zinc-700 font-semibold mt-1">Address</p>
              <p className=" text-sm ">{item.address.line1}</p>
              <p className=" text-sm">{item.address.line2}</p>
              <p className=" text-xs mt-1">
                <span className=" text-sm text-neutral-700 font-medium ">
                  Date & Time:
                </span>
                25, July, 2024 | 8:30 PM
              </p>
            </div>
            <div className=""></div>
            <div className=" flex flex-col gap-2 justify-end">
              <button className=" text-sm text-stone-500 text-center sm:min-w-48 hover:bg-primary hover:text-white transition-all duration-500 rounded py-2  border ">Pay Online</button>
              <button className=" text-sm text-stone-500 text-center sm:min-w-48 hover:bg-red-600 hover:text-white transition-all duration-500 rounded py-2  border ">cancel Appointment </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyAppointments;
