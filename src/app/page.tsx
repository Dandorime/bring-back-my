'use client';

import { useEffect, useState } from 'react';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';
import DinoEyeOpen from '@/app/_assets/image/dino_eye_open.png'
import DinoWithBox from '@/app/_assets/image/dino-with-box.png'
import useUserData from '@/store/userData';


export default function Home() {
  const t = useTranslations('i18n');
  const userData = useUserData

  // const openBox = () =>{
  //   const userResponse = await fetch('https://dandorime-backend-bring-back-my-9b5b.twc1.net/open-box', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `tma ${userData.initDataRaw}`
  //     },
  //   })

  //   const userInfo = await userResponse.json()
  // }

  return (
    <Page back={false}>
      <div className='flex flex-1 justify-center items-end w-full h-full'>
        {
            userData.visits.is_open ? 
              <button className='btn bg-transparent border-none shadow-none h-fit w-2/3 hover:bg-transparent hover:shadow-none'>
                        <img
                        alt="DinoEyeOpen"
                        src={DinoEyeOpen.src}
                        style={{ width: '100%', height: 'auto' }}
                      />
              </button>
            :
              <button className='btn bg-transparent border-none shadow-none h-fit w-2/3 hover:bg-transparent hover:shadow-none'>
                          <img
                          alt="DinoWithBox"
                          src={DinoWithBox.src}
                          style={{ width: '100%', height: 'auto' }}
                        />
              </button>
          }
        
        {/* <Image src={DinoEyeOpen.src} className='bg-transparent !rounded-none !w-1/2 '/> */}
      </div>
    </Page>
  );
}
