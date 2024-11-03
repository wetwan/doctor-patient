import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <div
      className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500  "
      onClick={() => {
        navigate(`/appointments/${doctor._id}`);
        scrollTo(0, 0);
      }}
    >
      <img src={doctor.image} alt={doctor.name} className=" bg-blue-50" />
      <div className=" p-4">
        <div className=" flex items-center gap-2 text-sm text-center text-green-500">
          <div className=" w-2 h-2 bg-green-500 rounded-full"></div>
          <p>Available</p>
        </div>
        <p className=" font-semibold text-gray-900 text-lg">{doctor.name}</p>
        <p className=" text-gray-600 text-sm">{doctor.speciality}</p>
      </div>
    </div>
  );
};

export default DoctorList;
