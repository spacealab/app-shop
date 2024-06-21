import { Modal } from "@/components";
import { useModal } from "@/store/ModalContext";

interface Props {
    onClose: () => void,
};

export function LoginModal({ onClose }: Props) {

    const {openModal} = useModal()

    return (
        <Modal title="Login" closeModal={onClose}>
            <form></form>
            <span onClick={() => openModal('register')}>go to register modal</span>
        </Modal>
    );
}