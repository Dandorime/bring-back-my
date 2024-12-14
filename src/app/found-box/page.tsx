'use client'
import { Page } from '@/components/Page';
import Frappuchino from '@/app/_assets/gift/frappuchino.png'
import FoundBoxModal from '@/components/Modal/FoundBox/found.box.modal';

export default function FoundBoxPage() {
    const title = 'my bottle'
    const subtitle = 'что-то этот год и всякой информаци'
    const desctiption = 'Здесь я рассказываю гору говна про эти все жделаЗдесь я рассказываю гору говна про эти все жделаЗдесь я рассказываю гору говна про эти все жделаЗдесь я рассказываю гору говна про эти все жделаЗдесь я рассказываю гору говна про эти все жделаЗдесь я рассказываю гору говна про эти все жделаЗдесь я рассказываю гору говна про эти все жделаЗдесь я рассказываю гору говна про эти все ждела'
    
    return <Page>
        <div className='flex flex-1 flex-col gap-2 w-full bg-[#EC3064] border-[#F2F4AA] rounded-[20px] border-2 p-[8px]'>
            <div className='flex flex-1 flex-col gap-2 w-full rounded-[20px] overflow-scroll'>
                <div className="grid grid-cols-3 grid-rows-5 gap-2">
                    <FoundBoxModal imageSrc={Frappuchino.src} title={title} subtitle={subtitle} description={desctiption}/>
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
                <FoundBoxModal imageSrc={Frappuchino.src} title={'финальный роз'} subtitle={'что-то этот год и всяк информаци'} description={'Собери все артефакты, чтобы принять участие в финальном розыгрыше.'}/>
            </div>
        </div>
    </Page>
}