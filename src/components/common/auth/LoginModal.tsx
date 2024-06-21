import { Dispatch, SetStateAction } from "react";

import { Modal } from "@/components";

interface Props {
    onClose: () => void,
    setShowModal: Dispatch<SetStateAction<"login" | "register" | null>>
};

export function LoginModal({ onClose, setShowModal }: Props) {
    return (
        <Modal title="Login" closeModal={onClose}>
            <form></form>
            <span onClick={() => setShowModal('register')}>go to register modal</span>
        </Modal>
    );
}