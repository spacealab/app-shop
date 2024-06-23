import { Input } from "../ui/form/input";
import { Modal } from "@/components";
import { registerApiCall } from "@/api/Auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useModal } from "@/store/ModalContext";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "@/store/AuthContext";
interface Props {
    onClose: () => void
}

interface FormData {
    username: string;
    email: string;
    passwords: string;
}

export function RegisterModal({ onClose }: Props) {

    const { closeModal } = useModal()

    const {login} = useUser();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const mutate = useMutation({mutationFn: registerApiCall})

    const onSubmit = (data: FormData): void => {
        mutate.mutate(data, {
            onSuccess: (response) => {
                login(response.jwt, response.user)
                toast.success("welcome");
                closeModal();
            }})
        }  

    return (
        <Modal title="register" closeModal={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Input register={register('username', { required: "enter your name please" })} errors={errors} label="username" {...{placeholder:"enter your username"}}/>

                <Input register={register('email', { required: "enter your email please"  })} errors={errors} label="email" {...{placeholder:"enter your email"}} type="email"/>

                <Input register={register('passwords', { required: "enter your passwords please", minLength:{value: 3, message: " min 3 character"} })} errors={errors} label="passwords" {...{placeholder:"enter your passwords"}} type="passwords"/>

            </form>

            <button className="mt-2 bg-[#efefef]">submit</button>
        </Modal>
    );
}
