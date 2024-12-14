import { Page } from "@/components/Page";
import { Text, Image } from '@telegram-apps/telegram-ui';

import Bilets from '@/app/_assets/Tickets.png';
import Telegarm from '@/app/_assets/image 13.png'

export default function TasksPage() {
    return <Page>
        <div className="flex flex-1 flex-col items-center w-full h-full border-[#EBEEF4] border-2 rounded-[20px] bg-[#F96C38] py-[30px] px-[16px] gap-[12px]">
            <h2 className='text-[25px] text-center text-[#EBEEF4]'>
                Зарабатывай больше билетов!
            </h2>
            <div className="flex flex-1 w-full flex-col items-center gap-4 overflow-scroll">
                <button className="btn border-none h-fit bg-[#EBEEF4] text-[#F96C38] flex gap-2 justify-center items-center px-1 py-2 rounded-[20px]">
                    <h2 className='text-[18px] text-center text-[#705896] max-w-[70%]'>
                        Напиши в комментариях, какой твой любимый пимс 
                    </h2>
                    <h2>
                        +100
                    </h2>
                    <Image className='bg-transparent shadow-none' size={20} src={Bilets.src}></Image>
                </button>
                <button className="btn border-none h-fit bg-[#EBEEF4] text-[#F96C38] flex gap-2 justify-center items-center px-1 py-2 rounded-[20px]">
                    <h2 className='text-[18px] text-center text-[#705896] max-w-[70%]'>
                        Напиши в комментариях, какой твой любимый пимс 
                    </h2>
                    <h2>
                        +100
                    </h2>
                    <Image className='bg-transparent shadow-none' size={20} src={Bilets.src}></Image>
                </button>
                <button className="btn border-none h-fit bg-[#EBEEF4] text-[#F96C38] flex gap-2 justify-center items-center px-1 py-2 rounded-[20px]">
                    <h2 className='text-[18px] text-center text-[#705896] max-w-[70%]'>
                        Напиши в комментариях, какой твой любимый пимс 
                    </h2>
                    <h2>
                        +100
                    </h2>
                    <Image className='bg-transparent shadow-none' size={20} src={Bilets.src}></Image>
                </button>
                <button className="btn border-none h-fit bg-[#EBEEF4] text-[#F96C38] flex gap-2 justify-center items-center px-1 py-2 rounded-[20px]">
                    <h2 className='text-[18px] text-center text-[#705896] max-w-[70%]'>
                        Напиши в комментариях, какой твой любимый пимс 
                    </h2>
                    <h2>
                        +100
                    </h2>
                    <Image className='bg-transparent shadow-none' size={20} src={Bilets.src}></Image>
                </button>
                <button className="btn border-none h-fit bg-[#EBEEF4] text-[#F96C38] flex gap-2 justify-center items-center px-1 py-2 rounded-[20px]">
                    <h2 className='text-[18px] text-center text-[#705896] max-w-[70%]'>
                        Напиши в комментариях, какой твой любимый пимс 
                    </h2>
                    <h2>
                        +100
                    </h2>
                    <Image className='bg-transparent shadow-none' size={20} src={Bilets.src}></Image>
                </button>
            </div>
            
        </div>
    </Page>
}