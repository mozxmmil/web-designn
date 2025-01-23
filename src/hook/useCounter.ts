import { useState, useEffect, useCallback } from "react";

export const useCounter = () => {
  const [counter, setcounter] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);

  const startIncrement = useCallback(() => {
    if (!isActive) setIsActive(true);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setcounter((prev) => {
        if (prev < 100) return prev + 1;
        else {
          setIsActive(false);
          return prev;
        }
      });
    }, 25);

    return () => clearInterval(interval);
  }, [isActive]);
  return { counter, startIncrement };
};
