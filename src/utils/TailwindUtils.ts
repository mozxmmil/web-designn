import clsx, { ClassValue }  from "clsx";
import { twMerge } from "tailwind-merge";

export const twclx = (...inputs:ClassValue[]) =>{
          return twMerge(clsx(inputs))
}