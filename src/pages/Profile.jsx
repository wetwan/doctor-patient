import { useState } from "react";
import { assets } from "../assets/assets";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserdata] = useState({
    name: "Adebayo ridwan",
    image: assets.profile_pic,
    email: "wetwan@hoi.com",
    phone: "08037031172",
    address: {
      line1: "home way",
      line2: "ede osun",
    },
    gender: "male",
    dob: "1997-07-04",
  });
  return (
    <section className="max-w-lg flex flex-col gap-2 text-sm">
      <img src={userData.image} alt="image" className=" w-36 rounded-xl " />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          className=" bg-gray-50 text-3xl font-medium max-w-60 mt-4  border outline-none"
          onChange={(e) =>
            setUserdata((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="text-neutral-800 text-3xl font-medium mt-4">
          {userData.name}
        </p>
      )}
      <hr className=" bg-zinc-400 h-[1px] border-none" />
      <div className=" ">
        <p className=" uppercase text-neutral-900 underline mt-3">
          contact information:
        </p>{" "}
        <div className=" capitalize grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className=" capitalize font-medium">email id</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className=" font-medium">phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              className=" bg-gray-100 max-w-52 border outline-none"
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className=" text-blue-400">{userData.phone}</p>
          )}
          <p className=" font-medium">address:</p>
          {isEdit ? (
            <p className="">
              {" "}
              <input
                type="text"
                onChange={(e) =>
                  setUserdata((prev) => ({
                    ...prev,
                    address: { ...prev, line1: e.target.value },
                  }))
                }
                className="border outline-none bg-gray-50"
                value={userData.address.line1}
              />
              <br />
              <input
                type="text"
                className="border outline-none bg-gray-50"
                onChange={(e) =>
                  setUserdata((prev) => ({
                    ...prev,
                    address: { ...prev, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p className=" text-gray-500">
              {userData.address.line1} <br /> {userData.address.line2}
            </p>
          )}
        </div>
        <div className="">
          <p className=" uppercase text-neutral-900 underline mt-3">
            basic information
          </p>
          <div className="  capitalize grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
            <p className=" font-medium">gender: </p>
            {isEdit ? (
              <select
                onChange={(e) =>
                  setUserdata((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
                className="max-w-20 bg-gray-100"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            ) : (
              <p className=" text-gray-400">{userData.gender}</p>
            )}
            <p className=" font-medium">Birthday: </p>
            {isEdit ? (
              <input
                type="date"
                onChange={(e) =>
                  setUserdata((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
                className="max-w-28 bg-gray-100 "
              />
            ) : (
              <p className=" text-gray-400">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>
      <div className=" mt-10">
        {isEdit ? (
          <button onClick={() => setIsEdit(false)} className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer ">
            Save information
          </button>
        ) : (
          <button onClick={() => setIsEdit(true)} className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer ">
            Edit
          </button>
        )}
      </div>
    </section>
  );
};

export default Profile;
