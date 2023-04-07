"use client";

import Image from "next/image";
import err from "../../public/icons/error.png";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={err} alt="error" className="w-56 mb-8" />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold text-red">An Error Occurred</h3>
        <p className="mt-6 text-sm font-light">{error.message}</p>
      </div>
    </div>
  );
};
export default Error;
