import { useState } from "react";
import ModalCustom from "../Modal.custom";

interface FoundBoxModalProps {
    imageSrc: string,
    title: string,
    subtitle: string,
    description: string
}


export default function FoundBoxModal(props: FoundBoxModalProps) {
    const [isOpen, setIsOpen] = useState(false)

    return <>
        <button onClick={() => setIsOpen(true)} className='btn bg-[#F2F4AA] shadow-none border-none hover:bg-[#F2F4AA] hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'> 
            <div className='h-full w-fit p-1'>
                <img
                    alt="DinoEyeOpen"
                    src={props.imageSrc}
                    style={{ width: 'auto', height: '100%'}}
                />
            </div>
        </button>
        <ModalCustom isOpen={isOpen} onClose={() => setIsOpen(!setIsOpen)}>
            <div className="flex flex-col gap-[24px] overflow-hidden">
                <div className="flex gap-[10px]">
                    <div className="border-2 border-[#EC3064] rounded-[20px] w-[165px] h-[165px] p-2">
                        <img
                            alt="DinoEyeOpen"
                            src={props.imageSrc}
                            style={{ width: 'auto', height: '100%' }}
                        />
                    </div>
                    <div className="flex flex-col flex-1 gap-[10px] mt-[20px]">
                        <h1 className="text-[24px]">{props.title}</h1>
                        <h2 className="text-[18px]">{props.subtitle}</h2>
                    </div>
                </div>
                <div className="overflow-scroll flex flex-1 max-h-[40vh] px-[20px]">
                    <h2 className="text-[18px] text-[#EC3064]">{props.description} {props.description}</h2>
                </div>
            </div>
        </ModalCustom>
    </>
    
}