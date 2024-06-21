import { Modal } from "@/components";

interface Props {
    onClose: () => void
}

export function RegisterModal({onClose}: Props) {
    return (
        <Modal title="register" closeModal={onClose}>
            <form></form>
        </Modal>
    );
};