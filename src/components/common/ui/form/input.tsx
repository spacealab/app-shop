import { ErrorMessage } from "./ErrorMessage";
import { FieldErrors } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";
import { useId } from "react";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    type?: "text" | "passwords" |"email" | "number";
    label?: string;
    register: UseFormRegisterReturn<any>;
    errors: FieldErrors<any>;
}

export function Input({type = "text", label, register, errors, ...rest}: Props) {

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
                  {...rest}
                  className={`w-full rounded-lg p-4 border ${hasError && 'border-red'} `} 
                  id={id}
                  type={type} 
                  {...register }
              />
          </div>
          <ErrorMessage errors={errors} name={name} />
    </div>
  );
}