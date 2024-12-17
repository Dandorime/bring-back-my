'use client'
import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import Bilets from '@/app/_assets/Tickets.png';
import Volume from '@/app/_assets/sound_on.png';
import VolumeOff from '@/app/_assets/sound_off.png';
import { useState } from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import { classNames } from '@telegram-apps/sdk-react';

export default function Header() {
    const [isOnSound, setIsOnSound] = useState(true)
    return (
        <div className='flex flex-row w-full justify-between z-10'>
            <Link href={'/promo'} className="btn border-[#705896] bg-[#EBEEF4] border-2 shadow-none text-[#705896] rounded-full">
                <Image className='bg-transparent shadow-none' style={{width: '36px', minWidth: '36px', height: '36px', minHeight: '36px' }} src={Bilets.src}></Image>
                <h2>
                    137
                </h2>
            </Link>
            <Link href={'/day-counter'} className="btn border-[#705896] bg-[#EBEEF4] border-2 rounded-full w-2/4 shadow-none text-[#705896]">
                <h2>
                    День 2/15
                </h2>
            </Link>
            <button className='btn btn-text p-0' onClick={() => setIsOnSound(!isOnSound)}>
                {
                    isOnSound ?
                        <Image className='bg-transparent shadow-none text-black' size={40} src={Volume.src}></Image>
                    :
                        <Image className='bg-transparent shadow-none text-black' size={40} src={VolumeOff.src}></Image>
                }
                
            </button>
            <ReactPlayer 
                className='hidden'
                url='/game_3.mp3'
                controls={false} 
                loop
                muted={!isOnSound}
                playing
            />
        </div>
    )
}