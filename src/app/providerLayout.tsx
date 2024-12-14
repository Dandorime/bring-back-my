'use client'
import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import type { PropsWithChildren } from 'react';
import Room from '@/app/_assets/image/room.png'
import { Image } from '@telegram-apps/telegram-ui';

export default function ProviderLayout({ children }: PropsWithChildren) {
return(
    <div className={"flex flex-col flex-1 items-center h-screen w-screen pb-[14px] pt-[18px] px-[12px] relative"}>
        <Image src={Room.src} className={"absolute top-0 left-0 !rounded-none !w-full !h-full"}/>
        <Header/>
        <div className='flex flex-1 w-full items-center z-20'>
            {children}
        </div>
        <Footer/>
    </div>
)
}