// import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
const Header = () => {

  return (
    <section className=" flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 bg-primary">
      {/* left side */}
      <div className=" flex flex-col md:w-1/2 justify-center items-start gap-4 py-10 md:py-[10vw] m-auto md:mb-[30px] ">
        <p className=" text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight ">
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div className=" flex flex-col  md:flex-row items-center gap-3 text-white text-sm fonn-light">
          <img
            src={assets.group_profiles}
            alt="group_profiles"
            className=" w-28"
          />
          <p className="">
            Simply browse through our extensive list of trusted doctors,
            <br className=" hidden sm:block" /> schedule your appointment
            hassle-free.
          </p>
        </div>

        <a href="#speciality" className=" flex gap-4 bg-white px-8 py-3 text-gray-600 text-sm m-auto rounded-full capitalize items-center md:m-0  hover: saturate-150 transition-all duration-300">
          Book appointment
          <img src={assets.arrow_icon} alt="" className="w-3" />
        </a>
      </div>

      {/* right side */}
      <div className=" md:w-1/2 relative">
        <img
          src={assets.header_img}
          alt="header"
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default Header;
