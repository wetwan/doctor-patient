
import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("sign-up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitform = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={submitform}>
      <div className=" flex flex-col gap-3  m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="capitalize text-2xl font-semibold">
          {state === "sign-up" ? "create account" : "login"}
        </p>
        <p className="capitalize ">
          {state === "sign-up"
            ? "Please sign up to book appointment"
            : "Please login to book appointment"}
        </p>
        {state === "sign-up" ? (
          <div className="capitalize flex flex-col gap-3 w-full">
            <label htmlFor="name"> full name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className=" border outline-none border-x-zinc-300 rounded w-full p-2 mt-1"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        ) : (
          ""
        )}

        <div className=" capitalize flex flex-col gap-2 w-full">
          <label htmlFor="email"> email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="  border outline-none border-x-zinc-300 rounded w-full p-2 mt-1"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className=" capitalize flex flex-col gap-2 w-full">
          <label htmlFor="password"> password </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="  border outline-none border-x-zinc-300 rounded w-full p-2 mt-1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className=" capitalize bg-primary w-full text-white py-2 rounded-md text-base">
          {state === "sign-up" ? "create account" : "login"}
        </button>
        {state === "sign-up" ? (
          <p className=" capitalize"> Already have an account? <span className=" text-primary underline cursor-pointer mx-1" onClick={()=>setState('login')}>Login here</span> </p>
        ) : (
          <p className=" capitalize">create a new account? <span className=" text-primary underline cursor-pointer mx-1" onClick={()=>setState('sign-up')}>click here</span></p>
        )}
      </div>
    </form>
  );
};

export default Login;
