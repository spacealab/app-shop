import { ErrorMessage } from "./ErrorMessage";
import { FieldErrors } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";
import { useId } from "react";

interface Props {
    type?: "text" | "passwords" |"email" | "number";
    label?: string;
    placeholder?: string;
    register: UseFormRegisterReturn<any>;
    errors: FieldErrors<any>;
}

export function Input({type = "text", label, placeholder = "", register, errors}: Props) {

    const id = useId();

    const name = register.name;
    let hasError = false;

    if(errors && errors[name]) {
      hasError = true;
    }

  return (
    <div className="mb-8">
          <div className="flex flex-col items-start gap-2">
              {label && <label className="text-nowrap font-bold" htmlFor={id}>{label}</label>}
              <input 
                  className={`w-full rounded-lg p-4 border ${hasError && 'border-red'} `} 
                  id={id}
                  type={type} 
                  placeholder={placeholder} 
                  {...register }
              />
          </div>
          <ErrorMessage errors={errors} name={name} />
    </div>
  );
}