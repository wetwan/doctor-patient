import { useContext } from "react";

import DoctorList from "./DoctorList";
import { ShopContext } from "../contexts/ShopContext";
import { useNavigate } from "react-router-dom";
const TopDoctors = () => {
  const { doctors } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <div
      className=" flex flex-col items-center gap-4 py-16 text-gray-800 "
      id="speciality"
    >
      <h1 className=" text-3xl font-medium">Top Doctors to Book</h1>
      <p className=" sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <ul className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 sm:px-0.5      ">
        {doctors.slice(0, 10).map((doctor, i) => {
          return <DoctorList key={i} doctor={doctor} />;
        })}
      </ul>
      <button
        onClick={() => {
          navigate("/doctors"), scrollTo(0, 0);
        }}
        className="px-12 py-3 mt-10 rounded-lg capitalize font-medium  bg-blue-100"
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;
