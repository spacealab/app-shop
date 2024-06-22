import { UseFormRegisterReturn } from "react-hook-form";
import { useId } from "react";

interface Props {
    type?: "text" | "passwords" |"email" | "number";
    label?: string;
    placeholder?: string;
    register: UseFormRegisterReturn<any>;
}

export function Input({type = "text", label, placeholder = "", register}: Props) {

    const id = useId();

  return (
    <div className="flex flex-col items-start gap-2 mb-8">
        {label && <label className="text-nowrap font-bold" htmlFor={id}>{label}</label>}
        <input 
            className="w-full rounded-lg p-4 border" 
            id={id}
            type={type} 
            placeholder={placeholder} 
            {...register }
        />
    </div>
  );
}