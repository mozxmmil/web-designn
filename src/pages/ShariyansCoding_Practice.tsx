"use client";
import Cards_Section from "@/component/Shariyans/Cards_Section";
import InputArea from "@/component/Shariyans/InputArea";
import { UserData } from "@/Types/inputCard";
import React, {  useState } from "react";

const ShariyansCoding_Practice = () => {
  const [data, setdata] = useState<UserData[]>([]);

  const handleSubmitData = (d: UserData) => {
    setdata([...data, d]);
  };
  const handleDelete = (id: number) => {
    setdata((prev) => prev.filter((item, inx) => inx !== id));
  };
  

  return (
    <div className="w-full h-screen bg-zinc-500">
      <Cards_Section data={data} handleDelete={handleDelete} />
      <InputArea handlesumitData={handleSubmitData} />
      
    </div>
  );
};

export default ShariyansCoding_Practice;
