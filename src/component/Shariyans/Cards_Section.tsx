import React from "react";
import { Card } from "./Card";
import { UserData } from "@/Types/inputCard";

interface Props {
  data: UserData[];
  handleDelete: (id: number) => void;
}

const Cards_Section: React.FC<Props> = ({ data, handleDelete }) => {
  console.log(data);
  return (
    <div className="w-full h-[60%]  flex justify-center items-center flex-wrap gap-10">
      {data?.map((item, inx) => (
        <Card key={inx} {...item} handleDelete={handleDelete} inx={inx} />
      ))}
    </div>
  );
};

export default Cards_Section;
