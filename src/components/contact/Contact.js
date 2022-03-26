import React from "react";

const Contact = () => {
  return (
    <div className="w-[250px] h-[1830px] bg-slate-600 fixed z-20 top-[50px] right-6 list-none ml-4">
      <div className="flex items-center ml-[98px] mt-2">
        <span className="w-[15px] h-[15px] rounded-full bg-gray-500"></span>
        <span className="w-[15px] h-[15px] rounded-full bg-orange-500 ml-2 "></span>
        <span className="w-[15px] h-[15px] rounded-full bg-purple-500 ml-2"></span>
      </div>
      <h2 className="text-center mt-[60px] text-white font-bold text-[25px]">
        {" "}
        Contact.{" "}
      </h2>
      <div className="flex items-center mt-20 ml-20">
        <span className="text-white">
          <i class="bx bx-message-alt"></i>
        </span>
        <li className="ml-2"> Hỗ trợ </li>
      </div>
      <div className="flex items-center mt-6 ml-20">
        <span className="text-white">
          <i class="bx bx-phone-call"></i>
        </span>
        <li className="ml-2"> 19006600 </li>
      </div>
      <div className="mt-10 ml-8">
        <h6 className="capitalize text-green-500 font-bold">
          {" "}
          Theo dõi chúng tôi trên{" "}
        </h6>
        <div className="flex items-center mt-4 ml-12 cursor-pointer">
          <span className="text-white hover:text-purple-500">
            <i class="bx bxl-facebook"></i>
          </span>
          <li className="ml-2"> Facebook </li>
        </div>
        <div className="flex items-center mt-4 ml-12 cursor-pointer">
          <span className="text-white hover:text-purple-500">
            <i class="bx bxl-youtube"></i>
          </span>
          <li className="ml-2"> Youtube </li>
        </div>
      </div>
    </div>
  );
};

export default Contact;
