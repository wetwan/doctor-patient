import { useNavigate } from "react-router-dom";
import { nav } from "../constacnce";
import { assets } from "../assets/assets";

const Footer = () => {
  const naviagte = useNavigate();
  return (
    <div className=" md:mx-10">
      <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------------left side ------------ */}
        <div className="">
          <img src={assets.logo} alt="" className=" mb-5 w-40" />
          <p className=" w-full md:w-2/3 text-gray-600 leading-6">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you &lsquo; re booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way
          </p>
        </div>
        {/* ------------center side ------------ */}
        <div className="">
          <h5 className="text-xl font-medium mb-5 ">COMPANY</h5>
          <ul className=" flex flex-col gap-2 text-gray-600">
            {nav.map((nav, i) => (
              <li
                className="cursor-pointer capitalize"
                key={i}
                onClick={() => {
                  naviagte(nav.link), scrollTo(0, 0);
                }}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
        {/* ------------right side ------------ */}
        <div className="">
          <h5 className="text-xl font-medium mb-5 ">GET IN TOUCH</h5>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li className="">+1-212-456-7890</li>
            <li className="">Contact@wetwan.com</li>
          </ul>
        </div>
      </div>
      {/* ------------copyright side ------------ */}
      <hr className=" " />
      <p className=" py-5 text-sm text-center font-semibold">
        Prescipto &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
