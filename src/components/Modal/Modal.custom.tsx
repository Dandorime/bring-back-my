import { PropsWithChildren } from "react";

export interface ModalCustomProps extends PropsWithChildren {
    isOpen: boolean,
    onClose: () => void,
}

const ModalCustom = ({ isOpen, onClose, children }: ModalCustomProps) => {

    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                padding: '12px',
                background: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            className="fixed"
        >
            <div
                style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    margin: "auto",
                }}
                className="h-fit w-fit bg-[#F2F4AA] border-[#EC3064] border-2 rounded-[20px] px-[12px] py-[18px] text-black"
            >
                {children}
            </div>
        </div>
    );
};

export default ModalCustom;