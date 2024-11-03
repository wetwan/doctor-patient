/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import { assets } from "../assets/assets";
import RelatedDoctor from "../components/RelatedDoctor";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors } = useContext(ShopContext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSLots, setDocSLots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };
  const getAvalibleSlot = async () => {
    setDocSLots([]);

    // getting cuurent date

    let today = new Date();

    for (let index = 0; index < 7; index++) {
      // geting get with index

      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + index);
      //  setting end time of the date

      let endTime = new Date();
      endTime.setDate(today.getDate() + index);
      endTime.setHours(20, 0, 0, 0);

      ///seting hours

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 8 ? currentDate.getHours() + 1 : 8
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(8);
        currentDate.setMinutes(0);
      }
      let timeSLots = [];
      while (currentDate < endTime) {
        let formmatedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        // ading timeSLots
        timeSLots.push({
          datetime: new Date(currentDate),
          time: formmatedTime,
        });

        // imcrement time by 30 mint

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSLots((prev) => [...prev, timeSLots]);
    }
  };

  useEffect(() => {
    getAvalibleSlot();
  }, [docInfo]);
  useEffect(() => {}, [docSLots]);

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <section className="">
        {/* ----------doctor details -------- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="">
            <img
              src={docInfo.image}
              alt=""
              className=" bg-primary w-full sm:max-w-72 rounded-lg"
            />
          </div>
          <div className=" flex-1 border-gray-400 border rounded-lg p-8 bg-white mx-2 sm:mx-0 mt-[80px] sm:mt-0.5 ">
            {/* --------doctor info----------- */}
            <p className=" flex items-center gap-2 font-semibold text-2xl text-gray-900">
              {docInfo.name}
              <img src={assets.verified_icon} alt="" className=" w-5" />
            </p>
            <div className=" flex items-center gap-2 text-sm mt-1 text-gray-600 ">
              <p className="">
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <p className=" py-0.5 px-2 border text-sm rounded-full ">
                {docInfo.experience}
              </p>
            </div>
            <div className="">
              <p className=" flex items-center gap-2 text-sm font-medium text-gray-900 mt-3 ">
                About <img src={assets.info_icon} alt="" className="w-3" />
              </p>
              <p className=" text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
              <p className=" text-gray-400 font-medium mt-4">
                Appointment fee:
                <span className=" text-gray-600"> ${docInfo.fees}</span>
              </p>
            </div>
          </div>
        </div>

        {/* BOOKING SLOT  */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p className=" capitalize ">booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll ">
            {docSLots.length &&
              docSLots.map((item, index) => (
                <div
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? " bg-primary text-white"
                      : " border border-primary"
                  }`}
                  key={index}
                  onClick={() => setSlotIndex(index)}
                >
                  <p className="">
                    {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                  </p>
                  <p className="">{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className=" flex items-center w-full gap-3 overflow-x-scroll mt-5">
            {docSLots.length &&
              docSLots[slotIndex].map((item, i) => (
                <p
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? " bg-primary text-white"
                      : " text-gray-400 border border-primary"
                  } `}
                  key={i}
                  onClick={() => setSlotTime(item.time)}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className=" bg-primary px-14 py-4 my-6 hover:scale-[85%] transition-all duration-500 text-white text-sm rounded-full">
            Book an Appointment
          </button>
        </div>

        {/* related doctors  */}
        <RelatedDoctor docId={docId} speciality={docInfo.speciality} />
      </section>
    )
  );
};

export default Appointments;
