import { Input } from "../ui/form/input";
import { Modal } from "@/components";
import { loginApiCall } from "@/api/Auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useModal } from "@/store/ModalContext";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "@/store/AuthContext";

interface Props {
    onClose: () => void,
};

interface FormData {
    identifier: string;
    passwords: string;
}

export function LoginModal({ onClose }: Props) {

    const {openModal, closeModal} = useModal()

    const {login} = useUser();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const mutate = useMutation({mutationFn: loginApiCall})

    const onSubmit = (data: FormData): void => {
        mutate.mutate(data, {onSuccess: (response) => {
            
                login(response.jwt, response.user);
                toast.success("welcome");
                closeModal();
            }})
        }  

    return (
        <Modal title="Login" closeModal={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Input register={register('identifier', { required: "enter your name please" })} errors={errors} label="username" {...{placeholder:"enter your username"}}/>

                <Input register={register('passwords', { required: "enter your passwords please", minLength:{value: 3, message: " min 3 character"} })} errors={errors} label="passwords" {...{placeholder:"enter your passwords"}} type="passwords"/>

            </form>
            <span onClick={() => openModal('register')}>go to register modal</span>
        </Modal>
    );
}