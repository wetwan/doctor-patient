import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const BookApointment = () => {
   const naviagte = useNavigate()
  return (
    <section className="flex bg-primary px-6 sm:px-10 lg:px-12 my-20 md:mx-10 rounded-lg ">
      {/* ---------------left side -------------- */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 ">
        <div className=" text-xl  sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white ">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>

        <button onClick={()=>{naviagte('/login'), scrollTo(0,0)}} className="mt-10 bg-white text-sm text-gray-600 px-8 py-3 rounded-3xl sm:text-base hover:scale-110 transition-all duration-500"> Create Account</button>
      </div>

      {/* ---------------ridght side -------------- */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative ">
        <img
          src={assets.appointment_img}
          alt=""
          className=" w-full absolute bottom-0 right-0 max-w-md"
        />
      </div>
    </section>
  );
};

export default BookApointment;
