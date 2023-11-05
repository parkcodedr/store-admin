import { type ClassValue, clsx } from "clsx"
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const notify = (message:string,type:string) => {
  switch (type) {
    case "success":
      return toast.success(message)
      case "error":
        return toast.error(message)
    default:
      return toast(message)
  }
};
