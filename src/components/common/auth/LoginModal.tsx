import { Modal } from "@/components";
import { createPortal } from "react-dom";

interface Props {
}

export function LoginModal({}: Props) {
    return createPortal (
        <Modal title="Login" closeModal={() => {}}>
            <form></form>
        </Modal>,
        document.getElementById("portal")!
    );
}
