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
                <div>
                    <label htmlFor="username">username:</label>
                    <input id="username" type="text" placeholder="enter your username" {...register('username', { required: true })} />
                </div>

                <div>
                    <label htmlFor="email">email:</label>
                    <input id="email" type="email" {...register('email', { required: "enter your email please" })} />
                </div>

                <div>
                    <label htmlFor="passwords">passwords:</label>
                    <input id="passwords" type="passwords" {...register('passwords', { required: "enter your passwords please", minLength:{value: 3, message: " min 3 character"} })}/>
                </div>
            </form>

            <button className="mt-2 bg-[#efefef]">submit</button>
        </Modal>
    );
}
