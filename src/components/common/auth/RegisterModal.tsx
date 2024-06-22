import { Input } from "../ui/form/input";
import { Modal } from "@/components";
import { useForm } from "react-hook-form";

interface Props {
    onClose: () => void
}

interface FormData {
    username: string;
    email: string;
    passwords: string;
}

export function RegisterModal({ onClose }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData): void => {
    }

    return (
        <Modal title="register" closeModal={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Input register={register('username', { required: "enter your name please" })} errors={errors} label="username" placeholder={"enter your username"}/>

                <Input register={register('email', { required: "enter your email please"  })} errors={errors} label="email" placeholder={"enter your email please"} type="email"/>

                <Input register={register('passwords', { required: "enter your passwords please", minLength:{value: 3, message: " min 3 character"} })} errors={errors} label="passwords" placeholder={"enter your passwords please"} type="passwords"/>

            </form>

            <button className="mt-2 bg-[#efefef]">submit</button>
        </Modal>
    );
}
