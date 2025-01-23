import React, { forwardRef } from "react";

interface Props {
          className ?: string;
}

const Coursor = forwardRef<HTMLDivElement, Props>((props, ref,) => {
  return (
    <div
      ref={ref}
      className="absolute w-10 h-10 rounded-full border-2 border-white bg-white bg-transparent z-[999]"
    ></div>
  );
});

Coursor.displayName = "Coursor";

export default Coursor;
