/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import { specialityData } from "../assets/assets";
import DoctorList from "../components/DoctorList";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoctor, setFilterDoctor] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const { doctors } = useContext(ShopContext);

  const apllyfilter = () => {
    if (speciality) {
      setFilterDoctor(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoctor(doctors);
    }
  };
  useEffect(() => {
    apllyfilter();
  }, [doctors, speciality]);

  return (
    <section>
      <p className=" text-gray-600">Browse through the doctors specialist.</p>
      <div className=" flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={` py-1 px-3 border rounded-e text-sm transition-all sm:hidden ${
            showFilter ? " bg-primary text-white " : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          {" "}
          Filters
        </button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ?'flex':'hidden sm:flex'} `}
        >
          {specialityData.map((doctors, i) => (
            <p
              onClick={() =>
                speciality === `${doctors.speciality}`
                  ? navigate("/doctors")
                  : navigate(`/doctors/${doctors.speciality}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === `${doctors.speciality}`
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
              key={i}
            >
              {doctors.speciality}
            </p>
          ))}
        </div>
        <div className=" w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoctor.map((doctor, i) => (
            <DoctorList key={i} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
