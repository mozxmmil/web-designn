import React, { forwardRef } from "react";

interface Props {
          className ?: string;
}

const Coursor = forwardRef<HTMLDivElement, Props>((props, ref,) => {
  return (
    <div
      ref={ref}
      className="absolute w-10 h-10 rounded-full border-2 border-white -z-0
      mix-blend-difference -translate-x-1/2 -translate-y-1/2  "
    ></div>
  );
});

Coursor.displayName = "Coursor";

export default Coursor;
