import React, { memo } from "react";

interface Props {
  counter: number;
}

export const CounterNumber: React.FC<Props> = memo(({ counter }) => {
  return (
    <div className="flex justify-between items-center gap-2 text-5xl font-normal font-Gilroy_R italic">
      <h1 className="b w-[7vw] ">{counter}</h1>
      <span>-</span>
      <h1>100</h1>
    </div>
  );
});

CounterNumber.displayName = "CounterNumber";
