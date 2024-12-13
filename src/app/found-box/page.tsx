import { Page } from '@/components/Page';
import Frappuchino from '@/app/_assets/gift/frappuchino.png'

export default function FoundBoxPage() {
    return <Page>
        <div className="grid grid-cols-3 grid-rows-5 gap-2 flex-wrap w-full h-full bg-[#EC3064] border-[#F2F4AA] rounded-[20px] border-2 p-[8px] overflow-scroll">
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'> 
                <div className='h-full w-fit p-1'>
                    <img
                    alt="DinoEyeOpen"
                    src={Frappuchino.src}
                    style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
            <button className='btn bg-[#F2F4AA] shadow-none border-none hover:shadow-none hover:border-none rounded-[20px] w-full h-[80px]'></button>
        </div>
    </Page>
}