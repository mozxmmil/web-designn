import React from "react";

//todo: we have to make components of a button so every can download their code 


const page = () => {
  return (
    <div className="text-white bg-zinc-700 h-screen w-full flex justify-center items-center">
      <div className="w-[70%] h-[70%]  border-2 border-black p-10 rounded-lg shadow-lg relative ">
        <button className="px-5 py-3 shadow-md hover:text-black transition-all duration-300 ease-in-out bg-zinc-800 rounded-xl text-white relative overflow-hidden before:content-[''] before:h-full before:w-full before:rounded-full before:bg-yellow-500 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2  before:transform  before:scale-0 hover:before:scale-150 before:transition-all before:duration-300 before:ease-in-out before:-z-0 z-10">
          <h1 className="z-10 relative ">click here</h1>
        </button>
        <h1 className="absolute bottom-5 left-0 px-5 animate-pulse"><span className="text-red-500">Note: </span>This  page is not complete</h1>
      </div>
    </div>
  );
};

export default page;
