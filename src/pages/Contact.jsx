import { assets } from "../assets/assets";
const Contact = () => {
  return (
    <section>
      <div className=" text-center text-2xl pt-10 text-gray-500">
        <p className=" uppercase">
          Contact <span className=" text-gray-700 font-medium">Us</span>
        </p>
      </div>
      <div className=" flex my-10 flex-col md:flex-row gap-12">
        <img
          src={assets.contact_image}
          alt=""
          className=" w-full max-w-[360px]"
        />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p className="">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="">
            Tel: (415) 555 - 0132 <br />
            Email: greatstackdev@gmail.com
          </p>
          <b className=" text-gray-600 uppercase text-lg font-normal">
            Careers at PRESCRIPTO
          </b>
          <p className=" text-gray-500">Learn more about our teams and job openings.</p>
          <button className=" border-black border w-32 py-5 px-3  hover:bg-black transition-all duration-1000 hover:rounded-full cursor-pointer hover:text-white">
            {" "}
            Explore Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
