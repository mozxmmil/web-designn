"use client";
import { Button } from "@/components/ui/button";
import { UserData } from "@/Types/inputCard";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface Props {
  handlesumitData: (e: UserData) => void;
}

const InputArea: React.FC<Props> = ({ handlesumitData }) => {
  const { handleSubmit, register, reset } = useForm<UserData>();
  const handleDataSumit: SubmitHandler<UserData> = (data) => {
    handlesumitData(data);
    reset();
  };
  return (
    <div className="w-64 h-full bg-zinc-700 absolute top-0 left-0 px-5 ">
      <form
        onSubmit={handleSubmit(handleDataSumit)}
        className="w-full  flex justify-center flex-col pt-10 gap-5"
      >
        <input {...register("name")} type="text" placeholder="name" />
        <input {...register("Username")} type="text" placeholder="Username" />
        <input {...register("photo")} type="text" placeholder="Profile" />
        <Button type="submit">submit</Button>
      </form>
      <Link href={"/Final_project"} className="text-white">go</Link>
    </div>
  );
};

export default InputArea;
