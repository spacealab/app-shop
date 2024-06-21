import { Modal } from "@/components";

interface Props {
    onClose: () => void
}

export function LoginModal({onClose}: Props) {
    return (
        <Modal title="Login" closeModal={onClose}>
            <form></form>
        </Modal>
    );
};