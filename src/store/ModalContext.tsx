import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
    children: ReactNode
}

interface ContextProps {
    currentModal: ModalType;
    openModal: (modalName: ModalType) => void;
    closeModal: () => void;
}

type ModalType = "login" | "register" | null;

export const ModalContext = createContext<ContextProps>({
    currentModal: null,
    openModal: () => {},
    closeModal: () => {}
});

export const useModal = () => useContext(ModalContext)


export function ModalContextProvider({ children }: Props) {

    const [showModal, setShowModal] = useState<"login" | "register" | null>(null);

    const openModal = (modalName: ModalType) => {
        setShowModal(modalName)
    }

    const closeModal = () => {
        setShowModal(null)
    }

    return (
        <ModalContext.Provider value={{currentModal: showModal, openModal: openModal, closeModal: closeModal}}>
            {children}
        </ModalContext.Provider>
    );
}
