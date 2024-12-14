import { Image } from '@telegram-apps/telegram-ui';

import Home from '@/app/_assets/home.png';
import Controller from '@/app/_assets/controller.png';
import Gift from '@/app/_assets/gift.png';
import CheckList from '@/app/_assets/checklist.png';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="border-2 border-[#705896] bg-[#EBEEF4] rounded-[24px] flex flex-row justify-center items-center py-[8px] px-[18px] gap-8  z-10">
            <Link href={'/'} className='btn btn-square btn-text p-1  h-fit w-fit'>
                <Image size={40} className='bg-transparent shadow-none text-black' src={Home.src}></Image>
            </Link>
            <Link href={'/game'} className='btn btn-square btn-text p-1  h-fit w-fit'>
                <Image size={40} className='bg-transparent shadow-none text-black' src={Controller.src}></Image>
            </Link>
            <Link href={'/found-box'} className='btn btn-square btn-text p-1  h-fit w-fit'>
                <Image size={40} className='bg-transparent shadow-none text-black' src={Gift.src}></Image>
            </Link>
            <Link href={'/tasks'} className='btn btn-square btn-text p-1  h-fit w-fit'>
                <Image size={40} className='bg-transparent shadow-none text-black' src={CheckList.src}></Image>
            </Link>
        </div>
    )
}