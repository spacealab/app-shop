import { Modal } from "@/components";

interface Props {
}

export function LoginModal({}: Props) {
    return (
        <Modal title="Login" closeModal={() => {}}>
            <form></form>
        </Modal>
    );
}
