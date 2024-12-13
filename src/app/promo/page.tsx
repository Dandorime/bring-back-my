import { Page } from "@/components/Page";

import { Text, Image } from '@telegram-apps/telegram-ui';
import Bilets from '@/app/_assets/ticketsLight.png';

import Dodo from '@/app/_assets/dodo.png'
import Pims from '@/app/_assets/pims.png'

export default function PromoPage() {
    return <Page>
        <div className="flex flex-1 flex-col items-center w-full h-full border-[#EBEEF4] border-2 rounded-[20px] bg-[#F96C38] p-[18px] justify-between">
            <div className="grid grid-cols-2 w-full items-center justify-center place-self-auto gap-2 overflow-scroll">
                <div className="flex flex-col h-fit justify-center items-center px-[8px] py-[10px] max-w-[150px] bg-[#EBEEF4] rounded-[20px] gap-[10px]">
                    <h2 className="text-[18px] text-[#705896]">
                        промокод 20%
                    </h2>
                    <Image className='bg-transparent shadow-none !w-[76px] !h-[76px]' src={Pims.src}/>
                    <button className="btn bg-[#705896] border-none shadow-none hover:shadow-non rounded-full">
                        <h2 className="text-[18px] text-[#EBEEF4]"> 
                            100
                        </h2>
                        <Image className='bg-transparent shadow-none' style={{width: '30px', minWidth: '30px', height: '30px', minHeight: '30px' }} src={Bilets.src}></Image>
                    </button>
                </div>
                <div className="flex flex-col h-fit justify-center items-center px-[8px] py-[10px] max-w-[150px] bg-[#EBEEF4] rounded-[20px] gap-[10px]">
                    <h2 className="text-[18px] text-[#705896]">
                        промокод 20%
                    </h2>
                    <Image className='bg-transparent shadow-none !w-[76px] !h-[76px]' src={Dodo.src}/>
                    <button className="btn bg-[#705896] border-none shadow-none hover:shadow-non rounded-full">
                        <h2 className="text-[18px] text-[#EBEEF4]"> 
                            100
                        </h2>
                        <Image className='bg-transparent shadow-none' style={{width: '30px', minWidth: '30px', height: '30px', minHeight: '30px' }} src={Bilets.src}></Image>
                    </button>
                </div>
                <div className="flex flex-col h-fit justify-center items-center px-[8px] py-[10px] max-w-[150px] bg-[#EBEEF4] rounded-[20px] gap-[10px]">
                    <h2 className="text-[18px] text-[#705896]">
                        промокод 20%
                    </h2>
                    <Image className='bg-transparent shadow-none !w-[76px] !h-[76px]' src={Pims.src}/>
                    <button className="btn bg-[#705896] border-none shadow-none hover:shadow-non rounded-full">
                        <h2 className="text-[18px] text-[#EBEEF4]"> 
                            100
                        </h2>
                        <Image className='bg-transparent shadow-none' style={{width: '30px', minWidth: '30px', height: '30px', minHeight: '30px' }} src={Bilets.src}></Image>
                    </button>
                </div>
                <div className="flex flex-col h-fit justify-center items-center px-[8px] py-[10px] max-w-[150px] bg-[#EBEEF4] rounded-[20px] gap-[10px]">
                    <h2 className="text-[18px] text-[#705896]">
                        промокод 20%
                    </h2>
                    <Image className='bg-transparent shadow-none !w-[76px] !h-[76px]' src={Dodo.src}/>
                    <button className="btn bg-[#705896] border-none shadow-none hover:shadow-non rounded-full">
                        <h2 className="text-[18px] text-[#EBEEF4]"> 
                            100
                        </h2>
                        <Image className='bg-transparent shadow-none' style={{width: '30px', minWidth: '30px', height: '30px', minHeight: '30px' }} src={Bilets.src}></Image>
                    </button>
                </div>
                <div className="flex flex-col h-fit justify-center items-center px-[8px] py-[10px] max-w-[150px] bg-[#EBEEF4] rounded-[20px] gap-[10px]">
                    <h2 className="text-[18px] text-[#705896]">
                        промокод 20%
                    </h2>
                    <Image className='bg-transparent shadow-none !w-[76px] !h-[76px]' src={Dodo.src}/>
                    <button className="btn bg-[#705896] border-none shadow-none hover:shadow-non rounded-full">
                        <h2 className="text-[18px] text-[#EBEEF4]"> 
                            100
                        </h2>
                        <Image className='bg-transparent shadow-none' style={{width: '30px', minWidth: '30px', height: '30px', minHeight: '30px' }} src={Bilets.src}></Image>
                    </button>
                </div>
                <div className="flex flex-col h-fit justify-center items-center px-[8px] py-[10px] max-w-[150px] bg-[#EBEEF4] rounded-[20px] gap-[10px]">
                    <h2 className="text-[18px] text-[#705896]">
                        промокод 20%
                    </h2>
                    <Image className='bg-transparent shadow-none !w-[76px] !h-[76px]' src={Dodo.src}/>
                    <button className="btn bg-[#705896] border-none shadow-none hover:shadow-non rounded-full">
                        <h2 className="text-[18px] text-[#EBEEF4]"> 
                            100
                        </h2>
                        <Image className='bg-transparent shadow-none' style={{width: '30px', minWidth: '30px', height: '30px', minHeight: '30px' }} src={Bilets.src}></Image>
                    </button>
                </div>
            </div>
            <button className="btn h-[50px] rounded-[20px] bg-[#EBEEF4] border-none shadow-none hover:shadow-non mt-2">
                <h2 className="text-[25px] text-[#705896]"> 
                    Мои купоны
                </h2>
            </button>
        </div>
    </Page>
}