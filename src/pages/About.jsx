import { assets } from "../assets/assets";
const About = () => {
  return (
    <section>
      <div className=" text-center text-2xl pt-10 text-gray-500">
        <p className="">
          About <span className=" text-gray-700 font-medium">Us</span>
        </p>
      </div>
      <div className=" flex my-10 flex-col md:flex-row gap-12">
        <img
          src={assets.about_image}
          alt=""
          className=" w-full max-w-[360px]"
        />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p className="">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you &apos;re booking your first appointment or
            managing ongoing care, Prescripto is here to support you every step
            of the way
          </p>
          <b className=" text-gray-800">Our Vision</b>
          <p className="">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it
          </p>
        </div>
      </div>

      <div className=" ">
        <p className=" uppercase text-xl my-4">
          Why <span className=" text-gray-700 font-semibold">Choose Us</span>
        </p>
        <div className="flex flex-col md:flex-row mb-20">
          <div className=" border px-10 md:px-16 py-8 md:py16 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 cursor-pointer hover:text-white ">
            <b className="">Efficiency:</b>
            <p className="">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 md:py16 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 cursor-pointer hover:text-white">
            <b className="">Convenience:</b>
            <p className="">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className=" border px-10 md:px-16 py-8 md:py16 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 cursor-pointer hover:text-white">
            <b className="">Personalization:</b>
            <p className="">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
