import { Portal } from "../portal";

interface Props {
    children: React.ReactNode;
    closeModal: () => void;
    title?: string;
};

export function Modal({ children, closeModal, title }: Props) {
    return (

        <Portal onClose={closeModal}>

            <div className="z-10 min-w-[100vw] md:min-w-[50vw] min-h-[100vh] md:min-h-[50vh] overflow-scroll border rounded gb-gray-100">
                <div className="flex justify-between rounded bg-white p-8 text-[22px]">
                    <div onClick={closeModal} className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                            <path d="M 7 4 C 6.74425 4 6.4879767 4.0979688 6.2929688 4.2929688 C 5.9029688 4.6829688 5.9029688 5.3170312 6.2929688 5.7070312 L 11.585938 11 L 6.2929688 16.292969 C 5.9029688 16.682969 5.9029688 17.317031 6.2929688 17.707031 C 6.6829688 18.097031 7.3170312 18.097031 7.7070312 17.707031 L 13 12.414062 L 18.292969 17.707031 C 18.682969 18.097031 19.317031 18.097031 19.707031 17.707031 C 20.097031 17.317031 20.097031 16.682969 19.707031 16.292969 L 14.414062 11 L 19.707031 5.7070312 C 20.097031 5.3170312 20.097031 4.6829688 19.707031 4.2929688 C 19.317031 3.9029688 18.682969 3.9029688 18.292969 4.2929688 L 13 9.5859375 L 7.7070312 4.2929688 C 7.5120312 4.0979688 7.25575 4 7 4 z" />
                        </svg>
                    </div>
                    {title}
                </div>
                <div className="p-8 text-[18px]">
                    {children}
                </div>
            </div>

        </Portal>

    );
};